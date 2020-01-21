FROM java:8-jre
WORKDIR /usr/src
ENV MYSQL_HOST=localhost
ENV MYSQL_DATABASE=bookapp
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=root123
COPY ./target/LoginModule-0.0.1-SNAPSHOT.jar LoginModule-0.0.1-SNAPSHOT.jar
#EXPOSE 8084
ENTRYPOINT ["java","-jar","/usr/src/LoginModule-0.0.1-SNAPSHOT.jar"]