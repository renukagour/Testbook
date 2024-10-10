# backend

## ecommerce API

- npm init -y
- npm i express
- npm i bcrypt cors dotenv jsonwebtoken mongoose nodemon razorpay
- make src folder and create index.js
- in package.json and dev in script  add "dev": "nodemon src/server.js" and "start": "node src/server.js"
- this ids for testing purpose
- npm run dev - to start server
- Database connection

---

### errors may be possible

- in cart.service findUserCart user :userId instead of user:user
- carteItemService findCartItemById
- productService use of category instead of categories in getAllProducts in populate & where clause
- productService use of dicountedPrice instead of discountedPrice
- review service in getAllProducts no  use of const product = await productService.findProductById(productId); this line but still included
- review controller res,req instead of req,res
- same for rating controller

---

### Steps

- models creation
- services
- controllers
- routes
- include in index.js

- AuthController for login and signUp
- userController for all methods like getAllUsers, getUserIdFromToken

#### Services

- user
- carts
- cartItem
- order
- product
- rating
- review
- payment

#### Controller

- auth
- user
- adminOrder
- cart
- cartItem
- order
- product
- review
- rating

#### Middleware

- before going to routes we need some middleware to connect the controller together
- authenticate

#### Routes

- auth
- user
- adminOrder
- cart
- cartItem
- order
- adminProduct
- product - for user
- review
- rating

---

### API's

- use <http://localhost:5000/auth/signup> to insert or create
- use <http://localhost:5000/auth/signin> to login
- <http://localhost:5000/api/users/profile> to get all users by token
  - get token from login and paste in Auth -> Bearer Token -> and hit
- <http://localhost:5000/api/users> to get all users
- while creating product must give key as Authorization and value as token in header section of postman
use <http://localhost:5000/api/admin/product> to add product
- <http://localhost:5000/api/cart>/api/cart to get cart
- add carItem to cart
- create order
- remove cart item {{myecom}}/api/cart_item/6ce9071a1dda0e37247d987 here last part is id of cart items in cart by get cart and copy the id of cartItems
- same for update cart item
- get product by id
