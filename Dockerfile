FROM ubuntu:latest

RUN apt-get update 
RUN apt-get install -y hugo 
RUN apt install npm -y
RUN npm install -g -y typescript
RUN hugo

CMD [“echo”,”Image created”] 