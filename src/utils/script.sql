use  validacion;

create table generos(
	id_genero int auto_increment,
	genero varchar(10),
	primary key(id_genero)
);
create table ciudades(
	id_ciudad int auto_increment,
	ciudad varchar(50),
	primary key(id_ciudad)
);
create table lenguajes(
	id_lenguaje int auto_increment,
	nombre_lenguaje varchar(30),
	primary key(id_lenguaje)
);
create table usuarios(
	documento int,
	nombre_usuario varchar(50),
	apellido_usuario varchar (50),
  telefono int(10),
  contrasenia varchar(100),
	genero int,
	ciudad int,
	primary key(documento),
	foreign key(genero) references generos(id_genero) on delete set null,
	foreign key(ciudad) references ciudades(id_ciudad)on delete set null
);
 create table lenguaje_usuario(
  documento_usuario int,
  id_lenguaje int,
  foreign key(documento_usuario) references usuarios(documento) on delete set null,
  foreign key(id_lenguaje)references lenguajes(id_lenguaje) on delete set null
);
