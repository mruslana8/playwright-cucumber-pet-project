FROM mcr.microsoft.com/playwright:v1.32.2-focal

RUN mkdir -p /home/app

WORKDIR /home/app

COPY . /home/app

CMD ["npm", "run", "test"]