FROM postgres:12



ENV PGUSER curso
ENV PGPASSWORD 12345678
ENV POSTGRES_USERNAME postgres
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD 12345678


USER root
USER postgres

COPY ./BD_BKP/config/pg_hba.conf /var/lib/postgresql/data/
COPY ./BD_BKP/config/pg_ident.conf /var/lib/postgresql/data/
COPY ./BD_BKP/config/postgresql.conf /var/lib/postgresql/data/

# RUN echo "postgres           postgres               postgres"  >> /var/lib/postgresql/data/pg_ident.conf

# RUN echo "host all  all    0.0.0.0/0  md5" >> /var/lib/postgresql/data/pg_hba.conf
# RUN echo "host    all             all               all                 ident map=postgres" >> /var/lib/postgresql/data/pg_hba.conf
# RUN echo "listen_addresses='*'" >> /var/lib/postgresql/data/postgresql.conf


COPY ./init.sql /docker-entrypoint-initdb.d/


# Porta do service
EXPOSE 5432