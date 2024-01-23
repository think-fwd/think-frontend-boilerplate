import { styled } from "@mui/material";
export const Wrapper = styled('div')(({ theme }) => ({
    padding: 32,
    borderRadius: 8,
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: `${theme.palette.gray.light}90`
}))