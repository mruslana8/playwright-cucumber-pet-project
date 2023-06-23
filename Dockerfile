FROM mcr.microsoft.com/playwright

RUN mkdir -p /home/app

WORKDIR /home/app

COPY . /home/app

CMD ["npm", "run", "test"]