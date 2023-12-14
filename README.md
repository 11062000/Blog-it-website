# Blog-It
A blogging application for sharing information via Blogs.

1. A website that provides the feature of creating, deleting, updating and accessing Blogs.
2. Basic functionalities like Login, Register, Like, comment(with all crud operations), save a post.
3. Includes Sections like popularPost, savedPost, userPost, notifications.
4. Includes Profile Section with all recent activities and update profile and password features.

Other Features:
1. Pagination and React Infinite Scroll bar is used for fetching data in chunks from database.
2. Validation for each input.
3. Authorization and Authentication of a user
4. Password Encryption


Tech Stack: MERN
1. React for frontend
2. Express for building Restful API
3. MongoDB as database
4. Nodejs for Backend
5. Multer for Uploading Files
6. express-validator for Validation
7. jsonwebtokens for Authentication and Authorization
8. Bcryptjs for Encrypting important details and passwords.



## Some tips for better handling of the project
### It is clearly understood that hardcoded values are not to be used in code. However, for the better ease of development these variables are hardcoded:
1. Port address (/index.js)
2. JWT token key (/controller/auth-controller.js)
3. Mongodb uri (/db/connect.js) - needs to be changed according to the local mongodb address

Tools needed to install:
1. NPM
2. Node
3. MongoDB