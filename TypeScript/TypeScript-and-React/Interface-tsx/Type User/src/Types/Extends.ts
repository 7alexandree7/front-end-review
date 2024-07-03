export interface Pessoa  {
    nome: string,
    idade: number
}



export interface Aluno extends Pessoa {
    curso: string,
    materiaFavorita: string
}

