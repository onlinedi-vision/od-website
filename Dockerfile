FROM node:alpine3.22 AS runtime

WORKDIR /home/node/app

RUN chown node:node /home/node/app

USER node

COPY --chown=node:node package.json package-lock.json ./
RUN npm ci

COPY --chown=node:node . .

EXPOSE 3000

CMD ["npm", "start"]
