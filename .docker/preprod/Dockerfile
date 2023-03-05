FROM node:18.14-alpine3.17 as build

WORKDIR /app
COPY . /app/

#RUN npm install -g react-scripts
RUN npm install --registry https://registry.npmjs.org
RUN npm run build

FROM nginx:1.21.3-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/preprod/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]