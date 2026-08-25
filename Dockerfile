FROM node:alpine3.22 AS runtime

COPY --chown=node:node package*.json /home/node/app/

USER node
WORKDIR /home/node/app

RUN npm ci

COPY --chown=node:node . .

EXPOSE 3000
CMD ["npm", "start"]
