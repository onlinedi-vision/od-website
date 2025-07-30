FROM alpine:3.22.1


RUN apk add --no-cache \
        ca-certificates \
        gcc \
	      curl \
        npm

RUN mkdir website
COPY ./src ./website/src 
COPY ./build ./website/build 
COPY ./public ./website/public 
COPY ./package.json ./website/package.json 
RUN cd website && npm i
RUN cd website && npm start 
