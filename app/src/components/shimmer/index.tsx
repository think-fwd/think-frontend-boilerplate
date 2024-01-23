import { ReactElement } from 'react'
import { Skeleton, SkeletonProps } from '@mui/material'

export interface ShimmerProps extends SkeletonProps {
  isLoading: boolean
}

export function Shimmer({
  isLoading,
  children,
  width = 0,
  height,
  variant,
}: ShimmerProps) {
  if (!isLoading) return children as ReactElement

  return (
    <Skeleton
      variant={variant || 'rounded'}
      animation="wave"
      width={width}
      height={height}
    >
      {children}
    </Skeleton>
  )
}
