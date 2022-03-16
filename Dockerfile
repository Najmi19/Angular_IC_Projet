

#
# Build stage
#
FROM maven:3 AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package

#
# Package stage
#
FROM openjdk:17-jre
COPY --from=build /home/app/target/itemsandusers-0.5.1.jar /usr/local/lib/itemsandusers.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/usr/local/lib/itemsandusers.jar"]