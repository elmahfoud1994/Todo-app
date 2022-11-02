ARG version="19-alpine3.15"
FROM node:$version AS BUILD 
LABEL author="EL Mahfoud BOUATIM"
LABEL company="BeTech"
WORKDIR /app
COPY package.json . 
RUN npm install package.json 
COPY . .
VOLUME /app/src
EXPOSE 4200 
CMD ["sh","-c","npm start"] 

