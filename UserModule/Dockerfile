FROM java:8-jre
WORKDIR /usr/src
ENV MYSQL_HOST=localhost
ENV MYSQL_DATABASE=bookapp
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=root123
COPY ./target/UserModule-0.0.1-SNAPSHOT.jar UserModule-0.0.1-SNAPSHOT.jar
#EXPOSE 8085
ENTRYPOINT ["java","-jar","/usr/src/UserModule-0.0.1-SNAPSHOT.jar"]