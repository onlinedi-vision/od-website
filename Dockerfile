FROM node:alpine3.22 AS workspace
WORKDIR /app
COPY --link package* .
FROM workspace AS requirements
RUN npm install -g

FROM requirements AS runtime
COPY --link src/ src/
COPY --link public/ public/
CMD ["npm", "start"] 

