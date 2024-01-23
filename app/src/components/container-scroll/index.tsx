/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-syntax */
import { useEffect, forwardRef, useRef, useImperativeHandle } from 'react'
import { ContainerScrollStyled } from './styles'
import { ContainerScrollType } from './types'

export type ContainerScrollRef = {
  scrollTop: () => void
}

function ContainerScroll(
  { onScrollBottom, disableScrollIndicator, ...props }: ContainerScrollType,
  forwardRef: React.Ref<ContainerScrollRef>
) {
  const ref = useRef<HTMLDivElement>(null)

  const handleScroll = (target: HTMLDivElement) => {
    const { clientHeight, scrollTop, scrollHeight, style } = target
    if (clientHeight + scrollTop + 1 >= scrollHeight) onScrollBottom?.()
    if (disableScrollIndicator) return
    if (scrollTop === 0) {
      style.borderTopWidth = '0px'
    } else {
      style.borderTopWidth = '2px'
    }
    if (clientHeight + scrollTop + 1 >= scrollHeight) {
      style.borderBottomWidth = '0px'
    } else {
      style.borderBottomWidth = '2px'
    }
  }

  useEffect(() => {
    handleScroll(ref.current as HTMLDivElement)
  }, [])

  const scrollTop = () => {
    ref?.current?.scrollTo?.({ top: 0 })
  }

  // Expose the internalFunction to the ref
  useImperativeHandle(forwardRef, () => ({
    scrollTop,
  }))

  return (
    <ContainerScrollStyled
      {...props}
      ref={ref}
      onScroll={(e) => handleScroll(e.currentTarget)}
    />
  )
}

export default forwardRef(ContainerScroll)
