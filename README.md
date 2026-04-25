# CS-465

Architecture

•	Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

•	Why did the backend use a NoSQL MongoDB database?

  Initially Express HTML was used to build a static web page. We quickly integrated handlebar templates to express for reuse and dynamic content. Then JSON was used to replace the HTML which improved the flexibility of the web page. While JSON almost acted like a database, it wasn’t one. MongoDB was added and Express was now being used as an API to handle endpoints and communicating between the database and the webpage, which was now being run by an SPA. This SPA was run using angular and allows for updates to take place dynamically, only updating the new information as opposed to having to reload the entire page. The MongoDB was used with the project because of how it handles schemas and works well with the APIs design. MongoDB also runs efficiently and allows for scalability in case future expansion occurs. 

Functionality

•	How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

•	Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

  JSON is only a data format, meaning that it doesn’t have the ability to write functions or contain logic. JSON excels in data communication and is often use to transmit data between the server and database, just as it did in this project as it allows the Angular frontend and Express backend to communicate. JavaScript on the other hand is a programming language and contains logic that allows the program to run. In our project, JavaScript was used in the frontend (handling buttons and other user interactions) and backend (handling requests and interactions). JavaScript and JSON work together to form effective communication
  
Testing

•	Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

  In this program, methods for request and retrieval include GET, POST, PUT, and DELETE. They involve retrieving one or multiple trips through the frontend and interacting with them through the backend. Trips could be retrieved to then be added, updated, or deleted. The endpoints describe where those retrieval requests are sent and are seen with the pathways that could look like /api/trip/:tripcode in our program. Of course, we don’t want just anyone to be able to have the authorization to do this, so security measures were put in pace that ensured the user was logged in with an appropriate admin account to make changes. As far as testing, Postman was a valuable tool used to help ensure appropriate input as well and making sure the endpoints were correct. Though using Postman required the appropriate tokens to validate authorization before testing could even be run.
  
Reflection

•	How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

  This course was yet another introduction for me to something I had no experience with. I feel there was a substantial amount of information conveyed in this course, yet it was presented in a straight forward manor in blocks that helped with comprehension. Most of the recent courses I’ve taken, I’ve noticed a similar trend. I typically am able to understand the logic and the coding without too much trouble, but tend to get easily confused when it comes to multiple software interacting with one another and having to understand where the logic belongs. This course in particular gave me more experience with exactly that. Dozens of files, separate software, and multiple languages coming together to create a finished project. I have by no means mastered it, but was able to learn new skills and develop them during this course. Another point that cannot be overlooked is simple introduction to tools I have never used before. Postman, MongoDB compass, and VSCode were all new to me, and having some experience with them will undoubtedly be beneficial in my career.
