import { Box, Typography, useTheme, type Theme } from '@mui/material';
import { useMemo, type ReactElement } from 'react';
import type { RewardDetailProps } from '../types/RewardDetailProps';

/**
 * Componente genérico responsável por exibir detalhes
 * das recompensas obtidas em um vôo específico.
 *
 * @param iconSrc - Uma `string` com caminho relativo para um ícone a ser renderizado
 * @param iconAlt - Uma `string` que contém o texto alternativo para um icone a ser renderizado
 * @param title - Representa uma `string` que será exibida como titulo da recompensa obtida
 * @param value - Representa um `number` que será exibido como valor da recompensa obtida
 * @param uppercase - Representa um `boolean` que indica se o titulo deve ser em letras maiusculas.
 * @default false
 * @param type - Representa o tipo de informação que o componente carrega `'number' | 'balance' | 'percentage'`.
 * `number` para numeros, `balance` para saldo, `percentage` para porcentagem.
 * @returns
 */
export default function RewardDetail({
    iconSrc,
    iconAlt,
    title,
    value,
    uppercase,
    type = 'number'
}: RewardDetailProps): ReactElement {
    const theme = useTheme();
    const styles = useMemo(() => rewardDetailStyles(theme), [theme]);

    const checkBalance = () => {
        switch (type) {
            case 'number':
                return <Typography variant="h1">{value}</Typography>;

            case 'balance':
                let result = value
                    .toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })
                    .replace('R$', '');
                return (
                    <Typography
                        color={`${value > 0 ? 'success' : 'error'}`}
                        variant="h1">
                        {result}
                    </Typography>
                );

            case 'percentage':
                return <Typography variant="h1">{`${value}%`}</Typography>;

            default:
                return <Typography variant="h1">{value}</Typography>;
        }
    };

    return (
        <Box sx={styles.boxContainer}>
            <Box>
                <img src={iconSrc} alt={iconAlt} />
            </Box>
            <Box sx={styles.boxTitle}>
                <Typography variant="subtitle2">
                    {uppercase ? title.toUpperCase() : title}
                </Typography>
                {checkBalance()}
            </Box>
        </Box>
    );
}

const rewardDetailStyles = (theme: Theme) => ({
    boxContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: theme.spacing(2)
    },
    boxTitle: {
        display: 'flex',
        flexDirection: 'column'
    }
});
