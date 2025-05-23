#Creo el usuario
create user 'Kevin_adso2894667'@'localhost' identified  by "Aprendiz2025";


#creo la base de datos
create database Apis_db;

#asignar priveegios
grant all on  Apis_db.* to  Kevin_adso2894667@localhost;


flush privileges;


use Apis_db;

create table generos(
	id_genero int auto_increment,
	genero varchar(10),
	primary key(id_genero));

    create table ciudades(
	id_ciudad int auto_increment,
	ciudad varchar(50),
	primary key(id_ciudad));
    
  
    create table lenguajes(
	id_lenguaje int auto_increment,
	nombre_lenguaje varchar(30),
	primary key(id_lenguaje));
    

    create table usuarios(
    id_usuario int auto_increment,
	documento bigint,
	nombre_usuario varchar(50),
	apellido_usuario varchar (50),
    telefono bigint,
    contrasenia varchar(100),
	id_genero int,
	id_ciudad int,
	primary key(id_usuario),
	foreign key(id_genero) references generos(id_genero) on delete set null,
	foreign key(id_ciudad) references ciudades(id_ciudad)on delete set null);
    
    drop table if exists usuarios;
	create table lenguaje_usuario(
    id_usuario int,
    id_lenguaje int,
    foreign key(id_usuario) references usuarios(id_usuario) on delete set null,
    foreign key(id_lenguaje)references lenguajes(id_lenguaje) on delete set null);
    
    show tables;
    
    INSERT INTO generos (genero) VALUES
('Masculino'),
('Femenino'),
('Otro');

INSERT INTO ciudades (ciudad) VALUES
('Bogotá'),
('Medellín'),
('Cali'),
('Barranquilla');

INSERT INTO lenguajes (nombre_lenguaje) VALUES
('Python'),
('Java'),
('JavaScript'),
('C#'),
('Ruby');
select * from lenguajes;

INSERT INTO usuarios (documento, nombre_usuario, apellido_usuario, telefono, contrasenia, genero, ciudad) VALUES
(1010101, 'Juan', 'Pérez', 300123457, 'pass1234', 1, 1),
(2020202, 'Ana', 'García', 311654789, 'abc12345', 2, 2),
(3030303, 'Carlos', 'Ramírez', 312987654, 'secure456', 1, 3),
(4040404, 'Luisa', 'Fernández', 313456789, 'mypass789', 2, 1);

INSERT INTO lenguaje_usuario (documento_usuario, id_lenguaje) VALUES
(1, 1), 
(1, 2), 
(2, 3), 
(3, 4), 
(4, 1), 
(4, 5); 