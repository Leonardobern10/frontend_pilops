import { Button, Stack } from '@mui/material';
import type { ReactElement } from 'react';

/**
 * Componente responsável por abrigar o conjuntos de páginas
 * disponiveis para navegação entre os registros.
 *
 * @param pagesQuantity - `number` indica a quantidade de páginas a disponiveis
 * @param currentPage - `number` indica a página atual
 * @param setCurrentPage - `(page: number) => void` representa a função
 * responsável por atualizar o valor de `currentPage`.
 * @returns
 */

export default function PaginationComponent({
    pagesQuantity,
    currentPage,
    setCurrentPage
}: {
    pagesQuantity: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}): ReactElement {
    const accessPage = () => setCurrentPage(currentPage + 1);
    return (
        <Stack direction="row" spacing={2}>
            {Array.from({ length: pagesQuantity }, (_, page) => (
                <Button variant="text" key={page + 1} onClick={accessPage}>
                    {page + 1}
                </Button>
            ))}
        </Stack>
    );
}
