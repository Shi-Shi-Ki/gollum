#
# node
#
FROM node:14 AS node

RUN apt-get update && \
    apt-get install -y tzdata && \
    cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

WORKDIR /usr/src/app

COPY ./package*.json /usr/src/app/
COPY ./tsconfig.json /usr/src/app/

RUN yarn install
COPY . .
RUN yarn compile

EXPOSE 50051

ENV NODE_APP_INSTANCE=default

CMD ["yarn","run","runJs"]
