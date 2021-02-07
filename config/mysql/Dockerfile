#
# database
#
FROM mysql:5.7 AS database

ENV MYSQL_USER dev
ENV MYSQL_ROOT_PASSWORD developer

COPY ./mysql.cnf /etc/mysql/conf.d/mysql.cnf
COPY ./init.sql /data/application/init.sql
