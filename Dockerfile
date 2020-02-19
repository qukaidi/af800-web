FROM 127.0.0.1:10000/nginx:stable-alpine

COPY dist/ /usr/share/nginx/html

COPY new.nginx.conf /etc/nginx/nginx.conf
