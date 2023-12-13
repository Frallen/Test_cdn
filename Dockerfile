FROM node:20-alpine3.18 as builder
RUN apk add --no-cache git
RUN npm install -g pnpm
ENV NUXT_PUBLIC_TYPEWRITER=true
WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm i && pnpm store prune

COPY . .

RUN pnpm build