import React from 'react'
import { Dialog } from '@mui/material'
import { useModal } from '../../hooks/modal'

export const Modal = (): JSX.Element => {
  const { stack, closeModal } = useModal()

  const currentOptions = React.useMemo(() => {
    if (stack.length <= 0) return undefined
    return stack[stack.length - 1].options
  }, [stack])

  // <!-- mount display stack component to be rendered on modal -->
  const component = React.useMemo(() => {
    // <!-- return undefined component to prevent render modal -->
    // <!-- if does not exists any component on stack -->
    if (stack.length <= 0) return undefined
    // <!-- return stack components, but display only the last one -->
    // * must to envolve the components with a <div>
    // - to prevent component from lost state and
    // - reset the stack component render
    return (
      <>
        {stack.map((stackItem, index) => {
          if (index < stack.length - 1) {
            return (
              <div style={{ display: 'none' }} key={`modal-stack-${index}`}>
                {stackItem.component}
              </div>
            )
          } else {
            return <div key={`modal-stack-${index}`}>{stackItem.component}</div>
          }
        })}
      </>
    )
  }, [stack])

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!component) return <></>

  return (
    <Dialog
      open
      maxWidth="md"
      transitionDuration={0}
      onClose={currentOptions?.locked ? undefined : closeModal}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      componentsProps={{
        backdrop: {
          style: { backdropFilter: 'blur(1px)' },
        },
      }}
      PaperProps={{
        elevation: 0,
        sx: {
          boxShadow:
            'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.15) 0px 0px 0px 1px',
        },
      }}
    >
      {component}
    </Dialog>
  )
}
