FROM python:3.8
ENV PYTHONUNBUFFERED 1
RUN mkdir /curso_administracao
WORKDIR /curso_administracao

# Installing OS Dependencies
RUN apt-get update && apt-get -y upgrade 
RUN pip install --upgrade pip

COPY ./requirements.txt /curso_administracao/
COPY ./inicializa_backend.sh /


RUN pip install -r /curso_administracao/requirements.txt
ADD . /curso_administracao/

USER root
ENTRYPOINT ["/bin/sh", "/inicializa_backend.sh"]
CMD ["./inicializa_backend.sh"]
# Django service
# EXPOSE 9000
# EXPOSE 8000