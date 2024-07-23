FROM mysql

# Variables de entorno para configurar la base de datos
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=employeesdb

# Copiar el archivo SQL a la carpeta de inicialización del MySQL
COPY database.sql /docker-entrypoint-initdb.d/database.sql