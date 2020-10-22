FROM nginx:1.19.3-alpine
COPY ./dist /usr/share/nginx/html/
CMD ["nginx","-g","daemon off;"]