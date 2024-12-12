import { DatabaseModel } from "./DataBaseModel";

// armazenei o pool de conexões
const database = new DatabaseModel().pool;

/**
 * Classe que representa um Empréstimo.
 */
export class Emprestimo {

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
        idAluno: number,
        idLivro: number,
        dataEmprestimo: Date,
        dataDevolucao: Date,
        statusEmprestimo: string
    ) {
        this.idAluno = idAluno;
        this.idLivro = idLivro;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.statusEmprestimo = statusEmprestimo;
    }

    /* Métodos get e set */
    /**
     * Recupera o identificador do Emprestimo
     * @returns o identificador do Emprestimo
     */
    public getIdEmprestimo(): number {
        return this.idEmprestimo;
    }
    /**
     * Atribui um valor ao identificador do Emprestimo
     * @param idEmprestimo identificador do Emprestimo
     */
    public setIdEmprestimo(idEmprestimo: number): void {
        this.idEmprestimo = idEmprestimo;
    }
    /*
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
     * Retorna a data de Devolução
     * @returns A data de Devolução.
     */
    public getDataDevolucao(): Date {
        return this.dataDevolucao;
    }
    /**
     Define a data de Devolução.
    * @param dataDevolucao - Data de Devolução.
    */
    public setDataDevolucao(dataDevolucao: Date): void {
        this.dataDevolucao = dataDevolucao;
    }
    /**
    * Retorna o status do empréstimo.
    * @returns {string} O status do empréstimo.
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

    /**
     * Busca e retorna uma lista de emprestimos do banco de dados.
     * @returns Um array de objetos do tipo `Emprestimos` em caso de sucesso ou `null` se ocorrer um erro durante a consulta.
     * 
     * - A função realiza uma consulta SQL para obter todos os registros da tabela "emprestimos".
     * - Os dados retornados são utilizados para instanciar objetos da classe `emprestimos`.
     * - Cada emprestimo instanciado é adicionado a uma lista que será retornada ao final da execução.
     * - Caso ocorra uma falha na consulta ao banco, a função captura o erro, exibe uma mensagem no console e retorna `null`.
     */
    static async listagemEmprestimos(): Promise<Array<Emprestimo> | null> {
        // objeto para armazenar a lista de empréstimos
        const listaDeEmprestimos: Array<Emprestimo> = [];

        try {
            // query de consulta ao banco de dados
            const querySelectEmprestimos = `SELECT * FROM emprestimo;`;
            // fazendo a consulta e guardando a resposta
            const respostaBD = await database.query(querySelectEmprestimos);

            // usando a resposta para instanciar um objeto do tipo emprestimo
            respostaBD.rows.forEach((linha: any) => {
                // instancia (cria) objeto emprestimo
                const novoEmprestimo = new Emprestimo(
                    linha.idAluno,
                    linha.id_livro,
                    linha.data_emprestimo,
                    linha.data_devolucao,
                    linha.status_emprestimo
                );

                // atribui o ID emprestimo
                novoEmprestimo.setIdEmprestimo(linha.id_emprestimo);

                // adiciona o objeto na lista
                listaDeEmprestimos.push(novoEmprestimo);
            });

            // retorna a lista de emprestimos
            return listaDeEmprestimos;
        } catch (error) {
            console.log('Erro ao buscar lista de empréstimos');
            return null;
        }
    }
}
