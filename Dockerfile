FROM node:alpine

### k3s workaround
#WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN cd /usr/src/app && npm install

COPY index.js /usr/src/app

EXPOSE 3000

CMD ["node", "/usr/src/app/index.js"]  
