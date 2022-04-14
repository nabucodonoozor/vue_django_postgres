#!/bin/sh
# /etc/init.d/postgresql restart
#pg_createcluster 12 main --start
#/etc/init.d/postgresql start
# pg_ctlcluster 12 main start



# PGPASSWORD=12345678 pg_restore -h "pgs_bd" -p "5432" -U "postgres" --role "postgres" -c -d "eagle" --verbose "/home/dump_eagle_bd.tar"
#psql -U "postgres" -W "12345678" CREATE USER eagle WITH SUPERUSER PASSWORD 'eagle'
# psql -U "postgres" -W "12345678" DROP DATABASE eagle
# psql -U "postgres" -W "12345678" CREATE DATABASE eagle
# psql -U "postgres" -W "12345678" GRANT ALL PRIVILEGES ON DATABASE eagle TO eagle
# createdb -U "postgres" eagle

# psql -U postgres -tc "CREATE USER eagle WITH SUPERUSER PASSWORD '12345678';"
# # psql -U postgres -tc "SELECT 1 FROM pg_database WHERE datname='eagle'" | grep -q 1 || psql -U postgres -c "DROP DATABASE eagle";
# psql -U postgres -tc "DROP DATABASE eagle;";
# psql -U postgres -tc "CREATE DATABASE eagle WITH TEMPLATE template0;";
# psql -U postgres -tc "GRANT ALL PRIVILEGES ON DATABASE eagle TO eagle;";
# #psql -U "postgres" -a -q -f "/home/backup/verificacao.sql";#\gexex



# PGADMIN
# *********************************************************************************************

  
until PGPASSWORD=12345678 /usr/local/pgsql-13/psql -h pgs_bd -U postgres -c '\q'; do
  >&2 echo "PgAdmin - sleeping"
  sleep 30
done
  
>&2 echo "PgAdmin - executing command"

PGPASSWORD=12345678 /usr/local/pgsql-13/pg_restore -h pgs_bd -p 5432 -U postgres --role postgres -c -d eagle --verbose /home/backup/dump_eagle_bd.dump

/bin/sh /entrypoint.sh