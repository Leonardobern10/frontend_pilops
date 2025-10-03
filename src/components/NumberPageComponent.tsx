import { Button, styled } from '@mui/material';

export const NumberPageComponent = styled(Button)(({ theme }) => ({
    fontSize: '1rem',
    minWidth: '1.2rem',
    maxWidth: '1.5rem',
    [theme.breakpoints.up('md')]: {
        width: 'fit-content',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    }
}));
