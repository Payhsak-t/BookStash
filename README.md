
## Book App (BookStash) - A Case Study

## Problem Statement
Build a system to search for a Book, view details of book, add book to favourite/recommendation by user.

## Requirements
The application needs to fetch boks data by registering with the following API link and get API Key required to call the API.
https://googleapis.com/books
	-Example API:
https://www.googleapis.com/books/v1/volumes?q=+inauthor:khaled&maxResults=12
	- A frontend where the user can register/login to the application. The login page should have a link for registration using which the user
	should be able to register. On Successful registration the user should be taken to the login page.
	- Proper navigation links for all the pages should be
	available within pages
	- Error handling should be implemented across pages.
	Appropriate messages should be displayed for the same. Success
	messages should be displayed for the User Registration.
	- Logout feature should be implemented.
	
	
*User can add a book to favourite/recommend list and should be able to view the favourite/global recommendation list.*

## Modules
### UI (User interface) - should be able to
1. List globally recommended books with *pagination*
2. View or open a book from the list
3. Search for a book by its title, by the author name or the genre
4. Add a  book into favourite/global recommendation list
5. View favourite/global recommendation articles with *pagination*
6. View bookmarked articles *pagination*
7. View books by genres (History, Fiction, Non- Fiction etc) with *pagination*
8. UI should be appealing and user friendly.

### AuthenticationService - should be able to manage user accounts
### FavoriteService - should be able to store all the favourite books for a specific user
### RecommendService - should be able to store all the recommended books for all users
### CommentService -  should be able to store all the favourite books for a specific user
### RatingService -  should be able to store all the user ratings for a book
### GoogleApiService - should fetch all the data for books from Google API

## Tech Stack
    Back End
     - Spring Framework(Spring Boot)
    Databases
     - MySQL, MongoDB
    Front End
      - Angular
      - HTML
      - CSS
      - Bootstrap
      - TypeScript
      - JavaScript
- Docker, Docker Compose

## Flow of Modules
### Building frontend
1. Register/Login.
2. Show search results for user entered keyword - populating from external API.
3. Show book details - populating from external API.
4. Build a view to show favorite/global recommendation books.
5. Add Pagination for favorite/global recommendation books.
6. Search for a book by any keyword.
7. Display Books by Genre
	for example - History, Fiction, Non- Fiction
8. Create a view for  Display Books by Genre.
9. Add Pagintaion for Display Books by Genres.
10. Create a view to Display details of book
11. Display preview for a book in viwer canvas format
12. Display comments for a book.


- Using Services to populate these data in views
- Stitching these views using Routes and Guards
- Unit Tests should be created for the Components and Services
- E2E scripts using protractor should be created for the functional flows
- Implement CI - continuous Integration (use,.gitlab-ci.yml)
- Dockerize the frontend (create dockerfile,docker-compose.yml and get it executed through docker compose)

### Note: FrontEnd and all the backend services should be dockerized
and run through docker-compose

### Building the UserService
- Creating a server in Spring Boot to facilitate user registration and login with MySQL as backend. Upon login, JWT token has to be generated. 	It has to be used in the Filters set in other services.
- Unit Testing of the entire code which involves the positive and negative scenarios.
- Implement continuous Integration CI ( use .gitlab-ci.yml).
- Dockerize the UserService (create dockerfile, docker-compose.yml and get it executed through docker compose).

### Building the favorite Service
- Building a server in Spring Boot to facilitate CRUD operation over favorite books stored in MongoDB. JWT Filter should be
  applied for all the API calls of the favorite service. JWT token should be used to authorize the user access to all the resources.
- Write Unit Test Cases and get it executed.
- Implement CI - continuous Integration ( use .gitlab-ci.yml).
- Dockerize the favorite Service(create dockerfile and update the docker-compose.yml).

### Building the comment Service
- Building a server in Spring Boot to facilitate CRUD operation over the comments on books stored in MongoDB. JWT Filter should be
  applied for all the API calls of the comment service. JWT token should be used to authorize the user access to all the resources.
- Write Unit Test Cases and get it executed.
- Implement CI - continuous Integration ( use .gitlab-ci.yml).
- Dockerize the comment Service(create dockerfile and update the docker-compose.yml).

### Building the recommend Service
- Building a server in Spring Boot to facilitate CRUD operation over recommended books stored in MongoDB. JWT Filter should be
  applied for all the API calls of the recommend service. JWT token should be used to authorize the user access to all the resources.
- Write Unit Test Cases and get it executed.
- Implement CI - continuous Integration ( use .gitlab-ci.yml).
- Dockerize the recommend Service(create dockerfile and update the docker-compose.yml).

### Building the rating Service
- Building a server in Spring Boot to facilitate CRUD operation over favorite books stored in MongoDB. JWT Filter should be
  applied for all the API calls of the rating service. JWT token should be used to authorize the user access to all the resources.
- Write Unit Test Cases and get it executed.
- Implement CI - continuous Integration ( use .gitlab-ci.yml).
- Dockerize the rating Service(create dockerfile and update the docker-compose.yml).

### Demonstrate the entire application
1. Make sure all the functionalities are implemented.
2. Make sure both the UI (Component and Services) and server side (For all layers) codes are unit tested.
3. All the Services are up and running using docker (Dockercompose should be used for running them)
4. E2E tests should be executed and shown.

