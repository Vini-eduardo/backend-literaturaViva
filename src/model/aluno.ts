/**
 * Classe que representa um Aluno.
 */
export class Aluno {

    /* Atributos */
    /* Identificador do aluno */
    private idAluno: number = 0;
    /* ra do aluno */
    private raAluno: number = 0;
    /* nome do aluno */
    private nome: string;
    /* sobrenome do carro */
    private sobrenome: string;
    /* data de nascimento do aluno */
    private dataNascimento: Date;
    /* endereco do aluno*/
    private endereco: string;
    /* email do aluno*/
    private email: string;
    /* celular do aluno*/
    private celular: string;




    /**
     * Construtor da classe Aluno
     * 
     * @param nome Nome do Aluno
     * @param sobrenome Sobrenome do Aluno
     * @param dataNascimento Data de Nascimento do Aluno
     * @param endereco Endereço do Aluno
     * @param email email do Aluno
     * @param celular celular do Aluno
     */
    constructor(
        nome: string,
        sobrenome: string,
        dataNascimento: Date,
        endereco: string,
        email: string,
        celular: string
    ) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.email = email;
        this.celular = celular;
    }

    /* Métodos get e set */
    /**
     * Recupera o identificador do aluno
     * @returns o identificador do aluno
     */
    public getIdAluno(): number {
        return this.idAluno;
    }

    /**
     * Atribui um valor ao identificador do aluno
     * @param idAluno novo identificador do aluno
     */
    public setIdAluno(idAluno: number): void {
        this.idAluno = this.idAluno;
    }



    /**
         * Recupera o RA do aluno
         * @returns o RA do aluno
         */
    public getRaAluno(): number {
        return this.raAluno;
    }

    /**
     * Atribui um valor ao RA do aluno
     * @param ra novo RA do aluno
     */
    public setRaAluno(raAluno: number): void {
        this.raAluno = this.raAluno;
    }








    /**
     * Retorna o nome do Aluno.
     *
     * @returns {string} O nome do aluno.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do aluno.
     * 
     * @param nome - Nome do aluno a ser definido.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }






    /**
     * Retorna o sobrenome do aluno.
     *
     * @returns {string} O sobrenome do aluno.
     */
    public getSobrenome(): string {
        return this.sobrenome;
    }

    /**
     * Define o sobrenome do aluno.
     *
     * @param sobrenome - O sobrenome do aluno.
     */
    public setSobrenome(sobrenome: string): void {
        this.sobrenome = sobrenome;
    }





    /**
     * Retorna a data de nascimento do aluno.
     *
     * @returns {Date} A data de nascimento do aluno.
     */
    public getDataNascimento(): Date {
        return this.dataNascimento;
    }

    /**
     * Define a data de nascimento do aluno.
     * 
     * @param dataNascimento - O data de nascimento a ser definida para o aluno.
     */
    public setDataNascimento(dataNascimento: Date): void {
        this.dataNascimento = dataNascimento;
    }





    /**
     * Retorna o endereço do aluno.
     *
     * @returns {string} O endereço do aluno.
     */
    public getEndereco(): string {
        return this.endereco;
    }

    /**
     * Define o endereço do aluno.
     * 
     * @param endereco - O endereço do aluno.
     */
    public setEndereco(endereco: string): void {
        this.endereco = endereco;
    }





    /**
 * Retorna o email do aluno.
 *
 * @returns {string} Email do aluno.
 */
    public getEmail(): string {
        return this.email;
    }

    /**
     * Define o email do aluno.
     * 
     * @param email - O email do aluno.
     */
    public setEmail(email: string): void {
        this.email = email;
    }



    /**
 * Retorna o celular do aluno.
 *
 * @returns {string} O celular por aluno.
 */
    public getCelular(): string {
        return this.celular;
    }

    /**
     * Define o celular do aluno.
     * 
     * @param celular - O celular do Aluno.
     */
    public setCelular(celular: string): void {
        this.celular = celular;
    }
}