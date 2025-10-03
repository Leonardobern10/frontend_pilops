import { Button, Stack } from '@mui/material';
import type { ReactElement } from 'react';
import type { PaginationComponentProps } from '../types/PaginationComponentProps';
import { NumberPageComponent } from './NumberPageComponent';
import { PaginationContainer } from './ui/PaginationContainer';

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
}: PaginationComponentProps): ReactElement {
    return (
        <PaginationContainer>
            {Array.from({ length: pagesQuantity }, (_, page) => {
                const pageNumber: number = page + 1;
                return (
                    <NumberPageComponent
                        variant={
                            currentPage === pageNumber ? 'outlined' : 'text'
                        }
                        key={pageNumber}
                        onClick={() => setCurrentPage(pageNumber)}>
                        {pageNumber}
                    </NumberPageComponent>
                );
            })}
        </PaginationContainer>
    );
}
