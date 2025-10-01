import { CardActionArea, styled } from '@mui/material';

/**
 * Componente container que abriga as informações de um registro
 * no histórico de vôos.
 *
 * @extends - CardActionArea - Componente interativo do Material UI para
 * cards com feedback visual e interatividade.
 */
const CardActionFlightContainer = styled(CardActionArea)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    columnGap: theme.spacing(20)
}));

export default CardActionFlightContainer;
