FROM node:9.4-alpine

LABEL maintainer "Afonso Coutinho <afonso@yack.com.br>"

RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app

COPY bin ./bin
COPY dists ./dists
COPY package.json package-lock.json ./
COPY node_modules ./node_modules

EXPOSE 4000
