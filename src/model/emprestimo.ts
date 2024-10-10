/**
 * Classe que representa um Empréstimo.
 */
export class Empréstimo {

    /* Atributos */
    /* Identificador do Empréstimo */
    private idEmprestimo: number = 0;
    /* Identificador do Aluno */
    private idAluno: number = 0;
    /* Identificador do Livro */
    private idLivro: number = 0;
    /* Data do Empréstimo */
    private dataEmprestimo: Date;
    /* Data da Devolução */
    private dataDevolucao: Date;
    /* Status do Empréstimo */
    private statusEmprestimo: string;


    /**
        * Construtor da classe PedidoVenda
        * 
        * @param idEmprestimo Identificador do empréstimo
        * @param idAluno Identificador do Aluno
        * @param idLivro Identificador do Livro
        * @param dataEmprestimo Data de Realização do Pedido
        * @param dataDevolucao Valor do Pedido
        * @param statusEmprestimo Status do Empréstimo
   */

    constructor(
        idEmprestimo: number,
        idAluno: number,
        idLivro: number,
        dataEmprestimo: Date,
        dataDevolucao: Date,
        statusEmprestimo: string
    ) {
        this.idEmprestimo = idEmprestimo;
        this.idAluno = idAluno;
        this.idLivro = idLivro;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.statusEmprestimo = statusEmprestimo;
    }




    /* Métodos get e set */
    /**
     * Recupera o identificador do Empréstimo
     * @returns o identificador do Empréstimo
     */
    public getIdEmprestimo(): number {
        return this.idEmprestimo;
    }

    /**
     * Atribui um valor ao identificador do Empréstimo
     * @param idEmprestimo identificador do Empréstimo
     */
    public setIdEmprestimo(idEmprestimo: number): void {
        this.idEmprestimo = idEmprestimo;
    }


    /* Métodos get e set */
    /**
     * Recupera o identificador do Aluno
     * @returns o identificador do Aluno
     */
    public getIdAluno(): number {
        return this.idAluno;
    }

    /**
     * Atribui um valor ao identificador do Aluno
     * @param idAluno identificador do Aluno
     */
    public setIdAluno(idAluno: number): void {
        this.idAluno = idAluno;
    }


    /* Métodos get e set */
    /**
     * Recupera o identificador do livro
     * @returns o identificador do livro
     */
    public getIdLivro(): number {
        return this.idLivro;
    }

    /**
     * Atribui um valor ao identificador do livro
     * @param idLivro identificador do livro
     */
    public setIdLivro(idLivro: number): void {
        this.idLivro = idLivro;
    }


    /**
     * Retorna a data de Empréstimo.
     * @returns A data de Empréstimo.
     */
    public getDataemprestimo(): Date {
        return this.dataEmprestimo;
    }

    /**
    * Define a data de Empréstimo.
    * @param dataEmprestimo - Data de Empréstimo.
    */
    public setDataEmprestimo(dataEmprestimo: Date): void {
        this.dataEmprestimo = dataEmprestimo;
    }


    /**
     * Retorna a data de Empréstimo.
     * @returns A data de Empréstimo.
     */
    public getDataDevolucao(): Date {
        return this.dataDevolucao;
    }

    /**
     Define a data de Empréstimo.
    * @param dataDevolucao - Data de Empréstimo.
    */
    public setDataDevolucao(dataDevolucao: Date): void {
        this.dataDevolucao = dataDevolucao;
    }


    /**
    * Retorna o status do empréstimo.
    * @returns {string} O status do livro empréstimo.
    */
    public getStatusEmprestimo(): string {
        return this.statusEmprestimo;
    }

    /**
    * Define o starus do empréstimo.
    * @param statusEmprestimo - Status do Empréstimo a ser definido.
    */
    public setStatusEmprestimo(statusEmprestimo: string): void {
        this.statusEmprestimo = statusEmprestimo;
    }
}