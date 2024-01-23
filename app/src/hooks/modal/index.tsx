import produce from 'immer'
import React from 'react'

type Props = {
  children: JSX.Element | JSX.Element[]
}

type ModalOptions = {
  locked?: boolean
}

type ModalContextType = {
  stack: ModalComponentStackType[]
  openModal: (component: JSX.Element, options?: ModalOptions) => void
  closeModal: () => void
}

const ModalContext = React.createContext<ModalContextType>(
  {} as ModalContextType
)

type ModalComponentStackType = {
  component: JSX.Element
  options?: ModalOptions
}

const ModalProvider = ({ children }: Props): JSX.Element => {
  const [stack, setStack] = React.useState<ModalComponentStackType[]>([])

  // <!-- add component on last position of stack -->
  // <!-- following the FILO approach -->
  const pushStack = React.useCallback(
    (component: JSX.Element, options?: ModalOptions) => {
      setStack(
        produce(stack, (draft) => {
          draft.push({ component, options })
        })
      )
    },
    [setStack, stack]
  )

  // <!-- remove the last item from stack -->
  // <!-- following the FILO approach -->
  const popStack = React.useCallback(() => {
    setStack(
      produce(stack, (draft) => {
        draft.pop()
      })
    )
  }, [setStack, stack])

  // <!-- expose open modal to be used throughth hooks -->
  const openModal = React.useCallback(
    (component: JSX.Element, options?: ModalOptions) =>
      pushStack(component, options),
    [pushStack]
  )

  // <!-- expose close modal to be used throughth hooks -->
  const closeModal = React.useCallback(() => popStack(), [popStack])

  const values = React.useMemo(
    () => ({ stack, openModal, closeModal }),
    [stack, openModal, closeModal]
  )

  return (
    <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
  )
}

const useModal = () => {
  const context = React.useContext(ModalContext)
  return context
}

export { ModalProvider, useModal }
