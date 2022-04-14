FROM node:lts-alpine
# ENV TZ Sao-Paulo/America
# RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN npm install -g npm

RUN apk update
RUN apk upgrade 
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

# instala um servidor http simples para servir conteúdo estático
RUN npm install -g http-server

# faz da pasta 'app' o diretório atual de trabalho
WORKDIR /app

# copia os arquivos 'package.json' e 'package-lock.json' (se disponível)
COPY ./package.json ./
COPY ./initializer_frontend.sh ./
# RUN chmod +x initializer_frontend.sh

# instala dependências do projeto
RUN npm install

# ENTRYPOINT ["/bin/sh", "/app/initializer_frontend.sh"]
CMD ["http-server", "dist" ]

EXPOSE 8080