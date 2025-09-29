import { Box } from '@mui/material';
import type { ReactElement } from 'react';
import RewardDetail from './RewardDetail';
import balanceIcon from '../assets/BalanceIcon_pilops.svg';
import starIcon from '../assets/Star_pilops.svg';
import bonusIcon from '../assets/BonusIcon_pilops.svg';
import type { RewardComponentProps } from '../types/RewardComponentProps';

export default function RewardComponent({
    balance,
    xp,
    missionBonus
}: RewardComponentProps): ReactElement {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                columnGap: 30,
                width: '100%'
            }}>
            <RewardDetail
                iconSrc={balanceIcon}
                iconAlt="Icone para saldo"
                title="Ganhos totais"
                value={balance}
            />
            <RewardDetail
                iconSrc={starIcon}
                iconAlt="Icone para xp recebido"
                title="xp conquistado"
                value={xp}
                uppercase
            />
            <RewardDetail
                iconSrc={bonusIcon}
                iconAlt="Icone para presentação de bonus"
                title="Bônus de missão"
                value={missionBonus}
                percentage
            />
        </Box>
    );
}
