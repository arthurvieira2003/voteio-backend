show tables

CREATE TABLE Usuario (
    Id BIGINT AUTO_INCREMENT PRIMARY KEY,  
    Nome VARCHAR(155) NULL,
    Email VARCHAR(155) NOT NULL UNIQUE,
    Senha VARCHAR(255) NOT NULL,  -- Corrigido de VARCHAR(max) para VARCHAR(255)
    DtInclusao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Adiciona data de inclusão automática
    DtAtualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,  -- Atualiza na modificação
    Situacao INT NULL
);