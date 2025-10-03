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
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    columnGap: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(2),
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}));

export default CardActionFlightContainer;
