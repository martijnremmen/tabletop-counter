FROM nginx:alpine

RUN rm -r /usr/share/nginx/html/*

ADD ./public/ /usr/share/nginx/html

EXPOSE 80