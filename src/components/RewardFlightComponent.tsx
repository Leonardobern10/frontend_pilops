import type { ReactElement } from 'react';
import RewardFlightContainer from './ui/RewardFlightContainer';
import { Box, Stack, Typography } from '@mui/material';
import trophy from '../assets/Trophy_pilops.svg';
import RewardComponent from './RewardComponent';
import type { RewardComponentProps } from '../types/RewardComponentProps';

/**
 * Componente que representa toda a seção de recompensas de um voo especifico
 *
 * @param balance - Representa o saldo total conquistado em um voo especifico
 * @param xp - Representa o valor de xp conquistado em um vôo específico
 * @param missionBonus - Representa o valor de bonus conquistado em um voo específico
 * @returns
 */
export default function RewardFlightComponent({
    balance,
    missionBonus,
    xp
}: RewardComponentProps): ReactElement {
    return (
        <RewardFlightContainer>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                width="fit-content"
                spacing={2}>
                <Box>
                    <img
                        src={trophy}
                        alt="Icone de trofeu que acompanha as recompensas"
                    />
                </Box>
                <Typography variant="body1">Recompensas</Typography>
            </Stack>
            <RewardComponent
                balance={balance}
                missionBonus={missionBonus}
                xp={xp}
            />
        </RewardFlightContainer>
    );
}
