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
}