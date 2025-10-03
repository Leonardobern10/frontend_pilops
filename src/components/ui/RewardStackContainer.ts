import { Stack, styled } from '@mui/material';

export const RewardStackContainer = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: theme.spacing(2),
    width: 'fit-content'
}));
