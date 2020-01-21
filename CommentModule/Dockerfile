FROM java:8-jre
WORKDIR /usr/src
COPY ./target/CommentModule-0.0.1-SNAPSHOT.jar CommentModule-0.0.1-SNAPSHOT.jar
#EXPOSE 8081
ENTRYPOINT ["java","-jar","/usr/src/CommentModule-0.0.1-SNAPSHOT.jar"]