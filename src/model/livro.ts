import { DatabaseModel } from "./DataBaseModel";

// armazenei o pool de conexões
const database = new DatabaseModel().pool;

/**
 * Classe que representa um Livro.
 */
export class Livro {

    /* Atributos */
    /* Identificador do Livro */
    private idLivro: number = 0;
    /* Título do Livro */
    private titulo: string;
    /* Autor d Livro */
    private autor: string;
    /* Editora do Livro*/
    private editora: string;
    /* Ano de Publicação do Livro */
    private anoPublicacao: string;
    /* ISBN do livro*/
    private isbn: string;
    /* Quantidade Total do Livro*/
    private quantTotal: number;
    /* Quantidade disponível do Livro*/
    private quantDisponivel: number;
    /* Valor de Aquisição do Livro*/
    private valorAquisicao: number;
    /* Status do Livro Emprestado */
    private statusLivroEmprestado: string;


    /**
     * Construtor da classe Livro
     * 
     * @param titulo Título do Livro
     * @param autor Autor do Livro
     * @param editora Editora do Livro
     * @param anoPublicacao Ano de Publicação do Livro
     * @param isbn ISBN do livro
     * @param quantTotal Quantidade total do livro
     * @param quantDisponivel Quantidade disponível do Livro
     * @param valorAquisicao Valor de Aquisição do livro
     * @param statusLivroEmprestado Status do Livro Emprestado
     */

    constructor(
        titulo: string,
        autor: string,
        editora: string,
        anoPublicacao: string,
        isbn: string,
        quantTotal: number,
        quantDisponivel: number,
        valorAquisicao: number,
        statusLivroEmprestado: string
    ) {
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.anoPublicacao = anoPublicacao;
        this.isbn = isbn;
        this.quantTotal = quantTotal;
        this.quantDisponivel = quantDisponivel;
        this.valorAquisicao = valorAquisicao;
        this.statusLivroEmprestado = statusLivroEmprestado;
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
     * @param idLivro novo identificador do livro
     */
    public setIdLivro(idLivro: number): void {
        this.idLivro = this.idLivro;
    }

    /**
     * Retorna o titulo do livro.
     *
     * @returns {string} O titulo do livro.
     */
    public getTitulo(): string {
        return this.titulo;
    }

    /**
     * Define o nome do livro.
     * 
     * @param titulo - Título do livro a ser definido.
     */
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    /**
     * Retorna o Autor do livro.
     *
     * @returns {string} O titulo do livro.
     */
    public getAutor(): string {
        return this.autor;
    }

    /**
     * Define o Autor do livro.
     * 
     * @param autor - Autor do livro a ser definido.
     */
    public setAutor(autor: string): void {
        this.autor = autor;
    }

    /**
     * Retorna a editora do livro.
     *
     * @returns {string} A editora do livro.
     */
    public getEditora(): string {
        return this.editora;
    }

    /**
     * Define a editora do livro.
     * 
     * @param editora - Editora do livro a ser definida
     */
    public setEditora(editora: string): void {
        this.editora = editora;
    }

    /**
     * Retorna o ano de publicação do livro.
     *
     * @returns {string} O ano de publicação do livro.
     */
    public getAnoPublicacao(): string {
        return this.anoPublicacao;
    }

    /**
     * Define o ano de publicação do livro.
     * 
     * @param anoPublicacao - Ano do de publicação do livro a ser definido.
     */
    public setAnopublicacao(anoPublicacao: string): void {
        this.anoPublicacao = anoPublicacao;
    }

    /**
       * Retorna o isbn do livro.
       *
       * @returns {string} O isbn do livro.
       */
    public getIsbn(): string {
        return this.isbn;
    }

    /**
     * Define o isbn do livro.
     * 
     * @param isbn - isbn do livro a ser definido.
     */
    public setIsbn(isbn: string): void {
        this.isbn = isbn;
    }

    /**
         * Retorna a quantidade total do livro.
         *
         * @returns {number} A quantidade total do livro.
         */
    public getQuantTotal(): number {
        return this.quantTotal;
    }

    /**
     * Define a quantidade total do livro.
     * 
     * @param quantTotal - Quantidade total a ser definida.
     */
    public setQuantTotal(quantTotal: number): void {
        this.quantTotal = quantTotal;
    }

    /**
         * Retorna a quantidade disponível do livro.
         *
         * @returns {number} Quantidade disponível do livro.
         */
    public getQuantDisponivel(): number {
        return this.quantDisponivel;
    }

    /**
     * Define a quantidade disponível do livro.
     * 
     * @param quantDisponivel - Quantidade disponível do livro a ser definida.
     */
    public setQuantDisponivel(quantDisponivel: number): void {
        this.quantDisponivel = quantDisponivel;
    }

    /**
         * Retorna o Valor de Aquisição do livro.
         *
         * @returns {string} O Valor de Aquisição do livro.
         */
    public getValorAquisicao(): number {
        return this.valorAquisicao;
    }

    /**
     * Define o valor de aquisição do livro.
     * 
     * @param valorAquisicao - valor de aquisição a ser definido.
     */
    public setValorAquisicao(valorAquisicao: number): void {
        this.valorAquisicao = valorAquisicao;
    }

    /**
         * Retorna o status do livro emprestado.
         *
         * @returns {string} O status do livro.
         */
    public getStatusLivroEmprestado(): string {
        return this.statusLivroEmprestado;
    }

    /**
     * Define o status do livro emprestado.
     * 
     * @param statusLivroEmprestado - Status do livro a ser definido.
     */
    public setStatusLivroEmprestado(statusLivroEmprestado: string): void {
        this.statusLivroEmprestado = statusLivroEmprestado;
    }



    
    
    /**
     * Busca e retorna uma lista de livros do banco de dados.
     * @returns Um array de objetos do tipo `Livro` em caso de sucesso ou `null` se ocorrer um erro durante a consulta.
     * 
     * - A função realiza uma consulta SQL para obter todas as informações da tabela "livro".
     * - Os dados retornados do banco de dados são usados para instanciar objetos da classe `Livro`.
     * - Cada livro é adicionado a uma lista que será retornada ao final da execução.
     * - Se houver falha na consulta ao banco, a função captura o erro, exibe uma mensagem no console e retorna `null`.
     */
    static async listagemLivro(): Promise<Array<Livro> | null> {
        // objeto para armazenar a lista de livros
        const listaDeLivros: Array<Livro> = [];

        try {
            // query de consulta ao banco de dados
            const querySelectLivro = `SELECT * FROM livro;`;

            // fazendo a consulta e guardando a resposta
            const respostaBD = await database.query(querySelectLivro);

            // usando a resposta para instanciar um objeto do tipo livro
            respostaBD.rows.forEach((linha: any) => {
                // instancia (cria) objeto livro
                const novoLivro = new Livro(
                    linha.titulo,
                    linha.autor,
                    linha.editora,
                    linha.ano_publicacao,
                    linha.isbn,
                    linha.quant_total,
                    linha.quant_disponivel,
                    linha.valor_aquisicao,
                    linha.status_Livro_Emprestado
                );

                // atribui o ID objeto
                novoLivro.setIdLivro(linha.id_livro);

                // adiciona o objeto na lista
                listaDeLivros.push(novoLivro);
            });

            // retorna a lista de carros
            return listaDeLivros;
        } catch (error) {
            console.log('Erro ao buscar lista de livros');
            return null;
        }
    }

    /**
     * Realiza o cadastro de um livro no banco de dados.
     * 
     * Esta função recebe um objeto do tipo `Livro` e insere seus dados ()
     * na tabela `livros` do banco de dados. O método retorna um valor booleano indicando se o cadastro 
     * foi realizado com sucesso.
     * 
     * @param {Livro} livro - Objeto contendo os dados do livro que será cadastrado. O objeto `Livro`
     *                        deve conter os métodos `getMarca()`, `getModelo()`, `getAno()` e `getCor()`
     *                        que retornam os respectivos valores do livro.
     * @returns {Promise<boolean>} - Retorna `true` se o livro foi cadastrado com sucesso e `false` caso contrário.
     *                               Em caso de erro durante o processo, a função trata o erro e retorna `false`.
     * 
     * @throws {Error} - Se ocorrer algum erro durante a execução do cadastro, uma mensagem de erro é exibida
     *                   no console junto com os detalhes do erro.
     */
    static async cadastroLivro(livro: Livro): Promise<boolean> {
        try {
            // query para fazer insert de um livro no banco de dados
            const queryInsertLivro = `INSERT INTO livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado)
                                        VALUES
                                        ('${livro.getTitulo()}', 
                                        '${livro.getAutor()}', 
                                        '${livro.getEditora()}', 
                                        '${livro.getAnoPublicacao()}',
                                        '${livro.getIsbn()}',
                                        ${livro.getQuantTotal()},
                                        ${livro.getQuantDisponivel()},
                                        ${livro.getValorAquisicao()},
                                        '${livro.getStatusLivroEmprestado()}')
                                        RETURNING id_livro;`;

                    console.log(queryInsertLivro);

            // executa a query no banco e armazena a resposta
            const respostaBD = await database.query(queryInsertLivro);

            // verifica se a quantidade de linhas modificadas é diferente de 0
            if (respostaBD.rowCount != 0) {
                console.log(`Livro cadastrado com sucesso! ID do carro: ${respostaBD.rows[0].id_livro}`);
                // true significa que o cadastro foi feito
                return true;
            }
            // false significa que o cadastro NÃO foi feito.
            return false;

            // tratando o erro
        } catch (error) {
            // imprime outra mensagem junto com o erro
            console.log('Erro ao cadastrar o livro. Verifique os logs para mais detalhes.');
            // imprime o erro no console
            console.log(error);
            // retorno um valor falso
            return false;
        }
    }
}
