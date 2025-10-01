/**
 * Função responsável por manipular o sinal do `balance` (saldo).
 * Ela verifica de o valor é positivo ou negativo, e gera uma
 * representação adequada com o sinal (caso seja negativo) à
 * frente.
 *
 * @param content - `string` | `number` representa o valor recebido.
 * @returns
 */

export const setSignal = (content: string | number): string => {
    let value = Number(content);
    if (value < 0) return `- P$ ${Math.abs(value).toFixed(2)}`;
    else return `P$ ${Math.abs(value).toFixed(2)}`;
};
