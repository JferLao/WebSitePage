FROM node:alpine as builder

# 設定工作路徑
WORKDIR /www

COPY ./package.json /www/package.json
COPY ./pnpm-lock.yaml /www/pnpm-lock.yaml 

RUN npm install -g pnpm@8.7.5 && pnpm install

# Copy package.json到工作目錄
COPY . /www

RUN npm run build

FROM nginx

COPY --from=builder /www/build /usr/share/nginx/html