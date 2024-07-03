export interface Pessoa {
    nome: string,
    idade: number,
    pais?: string
}




export interface Gamer extends Pessoa {
    mouse: string,
    teclado: string,
    mousePad: string,
    proPlayer: boolean,
    micrefone: string,
}


