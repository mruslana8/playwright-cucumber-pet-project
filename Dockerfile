FROM node:latest

FROM mcr.microsoft.com/playwright:v1.35.0-jammy

WORKDIR /home/app

ENV PATH /home/app/node_modules/.bin:$PATH

COPY . /home/app

RUN npm install

CMD ["npm", "run", "test"]