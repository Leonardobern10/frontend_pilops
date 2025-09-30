import { Box, Typography } from '@mui/material';
import type { ReactElement } from 'react';
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
    const checkBalance = () => {
        switch (type) {
            case 'number':
                return <Typography variant="h1">{value}</Typography>;
            case 'balance':
                let result = Math.abs(value)
                    .toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    })
                    .slice(2);
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
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 2
            }}>
            <Box>
                <img src={iconSrc} alt={iconAlt} />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                <Typography variant="subtitle2">
                    {uppercase ? title.toUpperCase() : title}
                </Typography>
                {checkBalance()}
            </Box>
        </Box>
    );
}
