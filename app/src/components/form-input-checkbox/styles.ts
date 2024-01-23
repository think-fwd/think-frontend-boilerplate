import { FormInputTextTheme } from '@components/form-input-text/types'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import { theme } from '@theme/index'

export const OptionContainer = styled(Box)<{
  active: string
  enabled: string
  theme: FormInputTextTheme
}>`
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: ${({ theme: themecolor }) =>
    themecolor === 'light'
      ? theme.palette.common.white
      : theme.palette.gray.light};
  border-color: ${(props) =>
    !(props.enabled === 'true')
      ? theme.palette.grey['200']
      : props.active === 'true'
      ? theme.palette.primary.main
      : theme.palette.divider};
  &:hover {
    border-color: ${(props) =>
      props.active === 'true'
        ? theme.palette.primary.main
        : `${theme.palette.secondary.main}60}`};
  }
`

export const OptionCheckRadio = styled(Box)<{
  active: string
  enabled: string
  rounded: string
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  min-width: 24px;
  height: 24px;
  max-height: 24px;
  border-radius: ${(props) => (props.rounded === 'true' ? '24px' : '4px')};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    !(props.enabled === 'true')
      ? theme.palette.grey['300']
      : props.active === 'true'
      ? theme.palette.primary.main
      : theme.palette.grey[400]};
  background-color: ${(props) =>
    !(props.enabled === 'true')
      ? theme.palette.grey['300']
      : props.active === 'true'
      ? `${theme.palette.primary.main}15`
      : `${theme.palette.grey[400]}15`};
`
