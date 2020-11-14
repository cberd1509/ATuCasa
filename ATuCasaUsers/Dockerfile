FROM alpine
RUN apk add npm

WORKDIR /app
COPY package*.json ./

RUN npm install
COPY ./ ./

RUN npm run build:prod --aot

FROM nginx:alpine
EXPOSE 4200

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /www/ /usr/share/nginx/html
RUN chmod -R a+rwX /usr/share/nginx
