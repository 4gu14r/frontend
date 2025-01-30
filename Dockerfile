FROM node:alpine
RUN npm install -g @angular/cli
WORKDIR /home/node/task
COPY . /home/node/task
RUN npm install
RUN npm audit fix --force --audit-level=high
EXPOSE 4200
CMD ng serve --host 0.0.0.0