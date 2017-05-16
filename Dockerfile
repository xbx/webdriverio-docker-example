FROM node

RUN mkdir /app/
WORKDIR /app/

RUN npm install express
COPY app.js /app/

CMD node app.js
