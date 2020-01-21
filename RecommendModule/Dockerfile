FROM java:8-jre
WORKDIR /usr/src
COPY ./target/RecommendModule-0.0.1-SNAPSHOT.jar RecommendModule-0.0.1-SNAPSHOT.jar
#EXPOSE 8081
ENTRYPOINT ["java","-jar","/usr/src/RecommendModule-0.0.1-SNAPSHOT.jar"]