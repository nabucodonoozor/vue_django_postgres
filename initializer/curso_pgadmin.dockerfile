FROM dpage/pgadmin4

ENV USER_PASSWORD 12345678
ENV PGADMIN_DEFAULT_EMAIL teste@teste.com
ENV PGADMIN_DEFAULT_PASSWORD 12345678

USER root

#RUN echo "PGPASSWORD=12345678 /usr/local/pgsql-13/pg_restore -h pgs_bd -p 5432 -U postgres --role postgres -c -d eagle --verbose ./home/dump_eagle_bd.tar" >> /docker-entrypoint.sh

# COPY /BD_BKP/ /home

# ENTRYPOINT ["/bin/sh", "/home/sh/dump.sh"]
# Porta do service
# EXPOSE 80