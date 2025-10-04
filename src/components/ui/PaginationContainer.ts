import { Stack, styled } from '@mui/material';

/**
 * Componente que abriga a exibição das páginas
 */
export const PaginationContainer = styled(Stack)(({ theme }) => ({
    width: '100%',
    flexDirection: 'row',
    columnGap: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
        columnGap: theme.spacing(2)
    }
}));
