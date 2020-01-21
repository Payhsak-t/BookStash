FROM java:8-jre
WORKDIR /usr/src
COPY ./target/RatingModule-0.0.1-SNAPSHOT.jar RatingModule-0.0.1-SNAPSHOT.jar
#EXPOSE 8081
ENTRYPOINT ["java","-jar","/usr/src/RatingModule-0.0.1-SNAPSHOT.jar"]