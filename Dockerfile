# Builder
FROM node:18.16.0-bullseye as builder

WORKDIR /app

COPY . ./

ENV NODE_OPTIONS=--max-old-space-size=4096 \
    TZ=Asia/Shanghai \
    LANG=C.UTF-8 \
    LANGUAGE=C.UTF-8 \
    LC_ALL=C.UTF-8

RUN npm -v \
    && npm config set registry https://registry.npmmirror.com/ \
    && npm install -g pnpm \
    && pnpm -v \
    && pnpm config set registry https://registry.npmmirror.com/ \
    && pnpm install \
    && pnpm build

FROM node:18.16.0-alpine3.17

ENV NODE_OPTIONS=--max-old-space-size=4096 \
    TZ=Asia/Shanghai \
    LANG=C.UTF-8 \
    LANGUAGE=C.UTF-8 \
    LC_ALL=C.UTF-8

WORKDIR /app

COPY --from=builder /app/.output ./.output/
COPY --from=builder /app/ecosystem.config.js .

RUN npm -v \
    && npm config set registry https://registry.npmmirror.com/ \
    && npm install -g pm2 \
    && pm2 -v

EXPOSE 3000

CMD ["pm2" ,"start", "ecosystem.config.js", "--no-daemon"]
