FROM node:20
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
COPY static/videos /usr/src/app/static/videos
EXPOSE 3000
CMD ["npm", "start"]