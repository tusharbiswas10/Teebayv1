To solve this project, I first started by setting up the basic structure of the project, which included creating the necessary folders, installing the required dependencies, and setting up the initial files.

I created a schema for the product, which included the necessary fields like name, description, and price, and defined a mutation to create a new product. I also created a query to get all products and get a single product by ID.

Next, I created the server-side code for the project, which included setting up a GraphQL server using the Apollo server library, defining the necessary resolvers to handle the queries and mutations defined in the schema, and setting up authentication using JSON Web Tokens (JWT).

I also created endpoints for user authentication using Express and JWT. The endpoints include user registration and user login, which return a JWT token upon successful authentication.

I used Prisma as the ORM and database tool, which allowed me to define the database schema using the Prisma schema file and generate the necessary database queries and models.

I then created the client-side code, which includes using Apollo Client to connect to the server and retrieve data from the GraphQL server. The client-side code also handles user authentication by storing the JWT token in local storage and sending it with each request to the server.

I documented the project by creating a README file that includes information on how to set up the project, including installing dependencies, setting up the environment variables, and starting the server and client. I also documented the available endpoints, the payload for each endpoint, and any corner cases that are worth noting.

To understand  how to run this project, tech stacks, usage and endpoints please check Readme.md file.