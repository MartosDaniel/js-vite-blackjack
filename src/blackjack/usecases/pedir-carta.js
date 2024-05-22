
/**
 * 
 * @param {Array<String>} deck arreglo de string
 * @returns Devuelve un string
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}