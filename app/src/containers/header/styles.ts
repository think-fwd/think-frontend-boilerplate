import {styled} from "@mui/material"

export const Wrapper = styled('div')(({ theme }) => ({
    zIndex: 999,
    height: '79px',
    width: '100%',
    borderBottom: `1px solid ${theme.palette.gray.main}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))