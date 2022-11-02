ARG version="19.0.0"
FROM node:$version
LABEL author="El Mahfoud BOUATIM"
LABEL commpany="BeTech" 
WORKDIR /app
COPY package.json .
RUN npm install package.json
COPY . .
EXPOSE 5000 
VOLUME /app/src
CMD ["sh","-c","npm start"]
