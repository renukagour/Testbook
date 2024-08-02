# JWT

## steps

1. npm i mongoose hbs express bcrypt dotenv jsonwebtoken

## HBS

- handlebars
- it is like ejs helps to show data on fronted

## notes

- before run we need to specify that which engine have to use
- we need to specify where views folder is
- we need to specify where partials folder is

### bcrypt

- when you are storing a password through form the password in the database wil be save as it is
- for that we need to use bcrypt
- bcrypt is a hashing algorithm
- bcrypt converts password to hash

### jsonwebtoken(jwt)

- it is used to generate token
- when you want to login you need to generate token
- when your login on some website you observer that next time when you visit the website you don't need to login again
- this can be achieved by token
- the token is generated and set in the cookie
- so it can be used further in the website
- it is happen in same device
- ttl - time to live

### .env

- it is used to store secret key
- u can access it using process.env.SECRET_KEY
- on the basis of secret key u can generate token
- we need to tell that we are using this file in app.js
- so use dotenv
  - require('dotenv').config();

### Additional

- when your entering password and username
- check
- jwt generate token and it is send to browser and it is stored in local storage
- it is called **authentication**
- next term is **authorization**
- it is used to authorize user
- when your are purchasing some products jwt send token and check it is premium subscription or not
- example is if your done payment web server send token and verify that it is user that made payment
-**cookie** after some time you need to login again
- there is certain limit to store token in cookie
- cookies store all the data about that website that when you logged in etc.
