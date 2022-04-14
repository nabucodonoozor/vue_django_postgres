#!/usr/bin/env bash
cp ./frontend/package.json ./initializer
cp ./frontend/package-lock.json ./initializer
cp ./backend/curso_administracao/requirements.txt ./initializer
cd initializer

docker-compose up
