# FullStack

## fronted

### navbar

- vite + react
- tailwind css
- mui packages and icons
- npm i heroicons
- npm install @headlessui/react
- npm install @heroicons/react
- npm uninstall @heroicons/react
- npm uninstall heroicons
- Navbar <https://tailwindui.com/components/ecommerce/components/store-navigation>

### carousel

- npm i react-alice-carousel
- carousel <https://maxmarinich.github.io/react-alice-carousel/>

### HomeCaroselCart

- use responsive carosel

### HomeCaroselCard

- use responsive carosel

### Product

- ProductCard
- react ui component <https://tailwindui.com/components/ecommerce/components/category-filters>
- box shadow <https://getcssscan.com/css-box-shadow-examples> for card
- mui radio button for filters <https://mui.com/material-ui/react-radio-button/>
- copy `<FormControl>`
- remove div inside section.options.map
- and paste in single filter
- and arrange properly
- give filters text and icon from mui icon <https://mui.com/material-ui/material-icons/?query=filter&selected=FilterList>
- mobile menu remain change checkbox to radio button
- for location need  npm i react-router-dom

### ProductDetails

- use tailwind ui component <https://tailwindui.com/components/ecommerce/components/product-overviews>
- Image gallery and product info make in one section two display in two columns
- Reviews use mui rating <https://mui.com/material-ui/react-rating/> use only readonly
- remove color part
- arrange all necessary
- Add to cart use mui button
- for recent review and rating using ProductReviewCard include another section
- use linearProgress for rating <https://mui.com/material-ui/react-progress/#linear>
- implement similar products

### Cart

- CartItem

### Checkout Page

- use mui component  stepper <https://mui.com/material-ui/react-stepper/>
- remove skip , reset
- After refreshing page it can be stay in delivery address or any tab in checkout page so use searchParams for that
- store as a query parameter
- remove next button

### order history

- use Grid
- OrderCard
- for deliver icon use mui icon import AdjustIcon from '@mui/icons-material/Adjust' from <https://mui.com/material-ui/material-icons/>
- OrderDetails

### Router Setup

- Routes folder in src

### tailwind

- sx
- space-x-
- sticky
- xs

- for ₹ symbol use ctrl+alt+4

## backend

### ecommerce API

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

## connecting fronted to backend

- src/Auth
- Login, RegistrationForm , AuthModal
- AuthModal use mui modal <https://mui.com/material-ui/react-modal/#system-BasicModal.js>
- redux is need to integrate with API and manage states
- axios to fetch API
- npm i redux redux-thunk react-redux axios
- state folder for redux management
- combine whole application in provider so that store will be accessible in main.jsx so that from any component we can access store

### redux Setup

- create store.js in State folder
- apiConfig file in config folder to store base url and other apis
- create Auth folder in that
  - actionType .js for all action types
  - action.js for all action
  - reducers.js authreducers that pass as auth to store.js

- implement this in Registration , Login, and then navigation
- now start product api implementation

- mui pagination <https://mui.com/material-ui/react-pagination/>

## payment gateway

- razorpay <https://razorpay.com/>
- create account and sign in
- go to dashboard <https://dashboard.razorpay.com/app/dashboard>
- get merchant id nad API key from dashboard
- backend setup <https://npmjs.com/package/razorpay?activeTab=readme>

## Admin Panel

- src/Admin/components/Admin
