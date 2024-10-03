CREATE SEQUENCE seq_ra START 1;

CREATE TABLE Aluno (
    id_aluno SERIAL PRIMARY KEY,
    ra VARCHAR (7) UNIQUE NOT NULL,
    nome VARCHAR (80) NOT NULL,
    sobrenome VARCHAR (80) NOT NULL,
    data_nascimento DATE,
    endereco VARCHAR (200),
    email VARCHAR (80),
    celular VARCHAR (20) NOT NULL
);

CREATE OR REPLACE FUNCTION gerar_ra() RETURNS TRIGGER AS $$
BEGIN
    NEW.ra := 'AAA' || TO_CHAR(nextval('seq_ra'), 'FM0000');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_gerar_ra
BEFORE INSERT ON Aluno
FOR EACH ROW EXECUTE FUNCTION gerar_ra();





CREATE TABLE Livro (
    id_livro SERIAL PRIMARY KEY,
    titulo VARCHAR (200) NOT NULL,
    autor VARCHAR (150) NOT NULL,
    editora VARCHAR (100) NOT NULL,
    ano_publicacao VARCHAR (5),
    isbn VARCHAR (20),
    quant_total INTEGER NOT NULL,
    quant_disponivel INTEGER NOT NULL,
    valor_aquisicao DECIMAL (10,2),
    status_livro_emprestado VARCHAR (20)
);

CREATE TABLE Emprestimo (
    id_emprestimo SERIAL PRIMARY KEY,
    id_aluno INT REFERENCES Aluno(id_aluno),
    id_livro INT REFERENCES Livro(id_livro),
    data_emprestimo DATE NOT NULL,
    data_devolucao DATE,
    status_emprestimo VARCHAR (20)
);

INSERT INTO Aluno (nome, sobrenome, data_nascimento, endereco, email, celular) 
VALUES 
('Conor', 'McGregor', '2005-01-15', 'Rua UFC, 123', 'mcgregor@ufc.com', '16998959876'),
('Amanda', 'Nunes', '2004-03-22', 'Rua UFC, 456', 'amanda.nunes@ufc.com', '16995992305'),
('Angelina', 'Jolie', '2003-07-10', 'Rua Hollywood, 789', 'jolie@cinema.com', '16991915502'),
('Natalie', 'Portman', '2002-11-05', 'Rua Hollywood, 101', 'natalie.portman@cinema.com', '16993930703'),
('Shaquille', 'ONeal', '2004-09-18', 'Rua NBA, 202', 'shaquille@gmail.com', '16993937030'),
('Harry', 'Kane', '2000-05-18', 'Rua Futebol, 2024', 'kane@futi.com', '16998951983'),
('Jaqueline', 'Carvalho', '2001-12-10', 'Rua Volei, 456', 'jack@volei.com', '16991993575'),
('Sheilla', 'Castro', '2003-04-25', 'Rua Volei, 2028', 'sheilla.castro@volei.com', '16981974547'),
('Gabriela', 'Guimarães', '2007-08-19', 'Rua Volei, 2028', 'gaby@volei.com', '16983932215'),
('Magic', 'Johnson', '2003-07-08', 'Rua NBA, 1999', 'magic@gmail.com', '16993932020');


INSERT INTO Aluno (nome, sobrenome, data_nascimento, endereco, email, celular) 
VALUES 
('Steve', 'Harris', '2004-07-12', 'Rua Maiden, 666', 'harris@iron.com', '16990638211'),
('Jimmy', 'Page', '2007-10-14', 'Rua Zeppelin, 123', 'jimmy.page@led.com', '16991564323'),
('Ozzy', 'Osbourne', '2006-06-06', 'Rua Sabbath, 666', 'ozzy@darkness.com', '16991906456'),
('Flea', 'Balzary', '2011-12-04', 'Rua Peppers, 189', 'flea.bass@hot.com', '16994567123'),
('Axl', 'Rose', '2003-10-18', 'Rua Roses, 202', 'axlrose@gmail.com', '16994329876'),
('Pedro', 'Goncaçalves', '2010-05-02', 'Rua Futebol, 2023', 'pedro@futi.com', '16998951907'),
('André', 'Batista', '2000-02-14', 'Rua Pato, 456', 'Andre@Pato.com', '16991954575'),
('Gabriel', 'Lima', '2002-05-25', 'Rua Volei, 2029', 'Gabriel.Lima@volei.com', '16982349947'),
('Ana', 'Lemes', '2007-06-09', 'Rua Limeira, 208', 'ana@Lima.com', '16945738275'),
('Jorge', 'Alves', '2007-08-09', 'Rua Parda, 196', 'patch@gmail.com', '16999745022');

INSERT INTO Livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado) 
VALUES 
('O Senhor dos Anéis', 'J.R.R. Tolkien', 'HarperCollins', '1954', '978-0007525546', 10, 10, 150.00, 'Disponível'),
('1984', 'George Orwell', 'Companhia das Letras', '1949', '978-8535906770', 8, 8, 90.00, 'Disponível'),
('Dom Quixote', 'Miguel de Cervantes', 'Penguin Classics', '1605', '978-0142437230', 6, 6, 120.00, 'Disponível'),
('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 'Agir', '1943', '978-8522008731', 12, 12, 50.00, 'Disponível'),
('A Revolução dos Bichos', 'George Orwell', 'Penguin', '1945', '978-0141036137', 7, 7, 80.00, 'Disponível'),
('O Hobbit', 'J.R.R. Tolkien', 'HarperCollins', '1937', '978-0007458424', 9, 9, 140.00, 'Disponível'),
('O Conde de Monte Cristo', 'Alexandre Dumas', 'Penguin Classics', '1844', '978-0140449266', 5, 5, 110.00, 'Disponível'),
('Orgulho e Preconceito', 'Jane Austen', 'Penguin Classics', '1813', '978-0141439518', 7, 7, 90.00, 'Disponível'),
('Moby Dick', 'Herman Melville', 'Penguin Classics', '1851', '978-0142437247', 4, 4, 100.00, 'Disponível'),
('Guerra e Paz', 'Liev Tolstói', 'Companhia das Letras', '1869', '978-8535922343', 3, 3, 130.00, 'Disponível');



INSERT INTO Livro (titulo, autor, editora, ano_publicacao, isbn, quant_total, quant_disponivel, valor_aquisicao, status_livro_emprestado) 
VALUES 
('Admirável Mundo Novo', 'Aldous Hoxley', 'Biblioteca Azul', '1932', '978-0007525547', 9, 9, 120.00, 'Disponível'),
('Duna', 'Frank Herbert', 'Aleph', '1965', '978-8535907321', 7, 7, 130.00, 'Disponível'),
('Fahreinheint 451', 'Ray Bradbury', 'Globo', '1953', '978-0142437230', 6, 6, 40.00, 'Disponível'),
('Guerra do Velho', 'John Scalzi', 'Globo', '2005', '978-8522008245', 12, 12, 80.00, 'Disponível'),
('Neuromancer', 'William Gibson', 'Aleph', '1984', '978-0141036137', 7, 7, 80.00, 'Disponível'),
('Jogos Vorazes', 'Suzanne Collins', 'Presenca', '2008', '978-0007459756', 9, 9, 140.00, 'Disponível'),
('A Guerra dos Mundos', 'H. G. Wells', 'Suma', '1898', '978-0140124877', 5, 5, 110.00, 'Disponível'),
('Tudo é Rio', 'Carla Madeira', 'Record', '2014', '978-0143256789', 7, 7, 90.00, 'Disponível'),
('The Testaments', 'Margaret Atwood', 'Bertrand', '2019', '978-0171340789', 4, 4, 94.00, 'Disponível'),
('Artemis', 'Andy Weir', 'Crown Publishing Group', '2017', '978-8428563109', 3, 3, 130.00, 'Disponível');

INSERT INTO Emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao, status_emprestimo) 
VALUES 
(1, 2, '2024-09-01', '2024-09-15', 'Em andamento'),
(2, 1, '2024-09-02', '2024-09-16', 'Em andamento'),
(3, 5, '2024-09-03', '2024-09-17', 'Em andamento'),
(5, 3, '2024-09-04', '2024-09-18', 'Em andamento'),
(4, 6, '2024-09-05', '2024-09-19', 'Em andamento'),
(6, 4, '2024-09-06', '2024-09-20', 'Em andamento'),
(7, 8, '2024-09-07', '2024-09-21', 'Em andamento'),
(8, 7, '2024-09-08', '2024-09-22', 'Em andamento'),
(10, 9, '2024-09-09', '2024-09-23', 'Em andamento'),
(9, 10, '2024-09-10', '2024-09-24', 'Em andamento'),
(1, 10, '2024-09-11', '2024-09-25', 'Em andamento'),
(2, 3, '2024-09-11', '2024-09-25', 'Em andamento'),
(4, 5, '2024-09-11', '2024-09-25', 'Em andamento'),
(6, 2, '2024-09-11', '2024-09-25', 'Em andamento');



INSERT INTO Emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao, status_emprestimo) 
VALUES 
(1, 4, '2024-10-03', '2024-10-18', 'Em andamento'),
(2, 7, '2024-10-03', '2024-10-18', 'Em andamento'),
(3, 9, '2024-10-04', '2024-10-19', 'Em andamento'),
(5, 6, '2024-10-05', '2024-10-20', 'Em andamento'),
(4, 5, '2024-10-06', '2024-10-21', 'Em andamento'),
(6, 8, '2024-10-07', '2024-10-22', 'Em andamento'),
(7, 3, '2024-10-08', '2024-10-23', 'Em andamento'),
(8, 2, '2024-10-09', '2024-10-24', 'Em andamento'),
(10, 1, '2024-10-10', '2024-10-25', 'Em andamento'),
(9, 10, '2024-09-10', '2024-10-26', 'Em andamento');
