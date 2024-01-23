import styled from '@emotion/styled'
import { ContainerScrollType } from './types'

export const ContainerScrollStyled = styled.div<ContainerScrollType>`
  flex: 1;
  opacity: ${({ disabled }) => (disabled === 'true' ? 0.5 : 1)};
  gap: ${({ spacing }) => (spacing !== undefined ? `${spacing}px` : '40px')};
  height: 100%;
  display: flex;
  overflow: scroll;
  position: relative;
  padding-right: ${({ pr }) => (pr !== undefined ? `${pr}px` : '24px')};
  padding-bottom: ${({ pb }) => (pb !== undefined ? `${pb}px` : '0px')};
  padding-top: ${({ pt }) => (pt !== undefined ? `${pt}px` : '0px')};
  flex-direction: column;
  overflow-y: ${(props) => (props.auto === 'true' ? 'auto' : 'scroll')};
  overflow-x: hidden;
  border-top-width: 0px;
  border-top-style: solid;
  border-top-color: #ced2db;
  border-bottom-width: 0px;
  border-bottom-style: solid;
  border-bottom-color: #ced2db;
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
    border-radius: 8px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f4f5;
    border-radius: 8px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #ced2db;
    border-radius: 8px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #a9b0bf;
    border-radius: 8px;
  }
`
