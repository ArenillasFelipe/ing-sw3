FROM node:18

WORKDIR /myapp

COPY package.json /myapp/
RUN npm install

COPY . /myapp/



CMD ["sh", "-c", "sleep 50 && node index.js"]
