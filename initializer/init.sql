CREATE USER curso WITH SUPERUSER PASSWORD '12345678';
CREATE DATABASE curso_administracao WITH TEMPLATE template0;
GRANT ALL PRIVILEGES ON DATABASE curso_administracao TO curso;