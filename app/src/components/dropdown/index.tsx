import React from 'react'
import Menu from '@mui/material/Menu'
import { Box, MenuItem, Stack, Typography } from '@mui/material'
import { IconProps } from '@phosphor-icons/react'
import { uid } from 'uid'

export type DropdownOptionType = {
  action: () => void
  label: string
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
}

type DropdownProps = {
  children: JSX.Element
  options: DropdownOptionType[]
}

export const Dropdown = (props: DropdownProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClose = () => setAnchorEl(null)
  const handleClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget)

  return (
    <Box alignItems="center" justifyContent="center" display="flex">
      <div
        style={{ display: 'inline-block', overflow: 'auto' }}
        onClick={handleClick}
      >
        {props.children}
      </div>
      <Menu
        id="long-menu"
        MenuListProps={{ 'aria-labelledby': 'long-button' }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            ml: 1,
            '&:before': {
              right: '16px !important',
            },
          },
        }}
      >
        {props.options.map((option) => (
          <MenuItem
            sx={{ py: 2 }}
            key={`dropdown-option-${uid()}`}
            onClick={(_) => [handleClose(), option.action()]}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              {option.icon && <option.icon weight="duotone" size={16} />}
              <Typography variant="caption" color="muted.main">
                {option.label}
              </Typography>
            </Stack>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}
