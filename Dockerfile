FROM node:slim
MAINTAINER Aditya Setiono<winged.zach@gmail.com>
RUN npm install -g yarn forever@0.14.2
RUN mkdir /code
WORKDIR /code
COPY ./package.json /code/
RUN yarn
COPY . /code
EXPOSE 3000
