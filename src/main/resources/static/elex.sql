-- Acceso a MySQL: root / root
-- Materias -> pág. 223
-- Documentos -> pág. 208
-- Tipos Expediente -> pag 66 y varias mas
-- Estados -> Página 165
-- Actuaciones -> Página 36

SET sql_mode = 'STRICT_ALL_TABLES';

DROP DATABASE IF EXISTS elex;
CREATE DATABASE IF NOT EXISTS elex
CHARACTER SET utf8mb4
  COLLATE utf8mb4_spanish_ci;

USE elex;

-- 1. Tabla Tipos Expediente
CREATE TABLE tipos_expediente
(
	id TINYINT NOT NULL UNIQUE AUTO_INCREMENT,
    materia VARCHAR (20) UNIQUE NOT NULL,
    PRIMARY KEY PK_tipos_expediente (id)
) 
COMMENT "Tabla Principal Tipos -> Expedientes";

-- 2. Tabla Expedientes
CREATE TABLE expedientes
(
	id INT NOT NULL UNIQUE AUTO_INCREMENT,
    codigo VARCHAR(50) NOT NULL UNIQUE,
    fecha DATE NOT NULL,
    estado ENUM('Pendiente','Enviado', 'Erróneo') DEFAULT 'Pendiente',
    opciones VARCHAR(70) DEFAULT "",
    descripcion VARCHAR(255) NOT NULL,
	tipo TINYINT NOT NULL,
    FOREIGN KEY (tipo) REFERENCES tipos_expediente (id),
    PRIMARY KEY PK_expedientes (id)
)
COMMENT "Tabla Principal Expedientes";

-- 3. Tabla Actuaciones
CREATE TABLE actuaciones 
(
	id INT NOT NULL UNIQUE AUTO_INCREMENT,
    descripcion VARCHAR(255) NOT NULL,
    finalizado BOOLEAN DEFAULT 0,
    fecha DATE NOT NULL,
    expediente INT NOT NULL,
    FOREIGN KEY (expediente) REFERENCES expedientes (id),
    PRIMARY KEY PK_actuaciones (id)
);

-- 4. Tabla Documentos
CREATE TABLE documentos
(
	id INT NOT NULL UNIQUE AUTO_INCREMENT,
	ruta VARCHAR(255) NOT NULL,
    tasa DECIMAL(6,2) NOT NULL,
    expediente INT NOT NULL,
    FOREIGN KEY (expediente) REFERENCES expedientes (id),
    PRIMARY KEY PK_documentos (id)
);

INSERT INTO tipos_expediente (materia)
VALUES ("Judicial"), ("Asistencia"), ("Informe"), ("Moción");

INSERT INTO expedientes
(codigo, fecha, estado, opciones, descripcion, tipo)
VALUES
("SEV-20240320-001", "2024-03-20", 'Pendiente', "Urgente, Confidencial", "Test1", 1),
("SEV-20240320-002", "2024-03-20", 'Pendiente', "Urgente, Confidencial", "Test2", 2),
("SEV-20240320-003", "2024-03-20", 'Enviado', "Urgente", "Test3", 1);

INSERT INTO actuaciones
(descripcion, finalizado, fecha, expediente)
VALUES
("Actuación 1", 0, "2024-03-20", 1),
("Actuación 2", 0, "2024-03-20", 2),
("Actuación 3", 1, "2024-03-21", 3);


INSERT INTO documentos
(ruta, tasa, expediente)
VALUES 
("static/pdfs/doc001.dpdf", 100.55, 1),
("static/pdfs/doc002.dpdf", 90.55, 2),
("static/pdfs/doc003.dpdf", 80.55, 3);

SELECT * FROM tipos_expediente;
SELECT * FROM expedientes;
SELECT * FROM actuaciones;
SELECT * FROM documentos;

