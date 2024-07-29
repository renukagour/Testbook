const express = require('express');
const app = express();


// 1st way to use middleware

// const reqFilter = (req, res, next) => {
//     if (!req.query.age) {
//         res.send("<h1>please provide age</h1>")
//     }
//     // else if(req.query.age<18){
//     //     res.send("you are not eligible")
//     // }
//     else {
//         next();
//     }
// }


// to use query
// app.use(reqFilter);

// app.get('/', (req, res) => {
//     res.send("<h1>Hello from home page</h1>");
// })
// app.get('/about', (req, res) => {
//     res.send("<h1>Hello from About page</h1>");
// })
// app.use(reqFilter); //where from you want to use you add there , here about page can be accessible
// app.get('/contact', (req, res) => {
//     res.send("<h1>Hello from Contact page</h1>");
// })
// app.get('*', (req, res) => {
//     // res.status(404);
//     res.send("<h2>Error page</h2>");
// });

// 2nd way

const route = express.Router();
const reqFilter = require('./middlewareLogic');
route.use(reqFilter);
// app.use('/',route); //for all //1st way

// use above to access
// http://localhost:3600/?age=20
app.get('/', (req, res) => {
    res.send("<h1>Hello from home page</h1>");
})
app.get('/about', (req, res) => {
    res.send("<h1>Hello from About page</h1>");
})

app.get('/contact', (req, res) => {
    res.send("<h1>Hello from Contact page</h1>");
})

// 2nd way
// app.get('/contact',reqFilter,(req,res)=>{
//     res.send("<h1>Hello from Contact page</h1>");
// })
// route.get('/contact',(req,res)=>{
//     res.send("<h1>Hello from Contact page</h1>");
// })
// route.get('/contact/data',(req,res)=>{
//     res.send("<h1>Hello from Contact page</h1>");
// })
// route.get('/contact/datafile',(req,res)=>{
//     res.send("<h1>Hello from Contact page</h1>");
// })
// route.get('/contact/dataimg',(req,res)=>{
//     res.send("<h1>Hello from Contact page</h1>");
// })

// always use above error page
// app.use('/',route); // it will shows that it will not for error page
app.use('/contact',route); //it will shows that all /contact page can be accessible if age provided
//   show error for about of route.get 
// if you are using above not relevance of using route.get
app.get('*', (req, res) => {
    // res.status(404);
    res.send("<h2>Error page</h2>");
});


//if you want to use for specific url not need to remember that where to add so use route
// app.use('/', route); //2nd way purpose this shows error page for contact
app.listen(3600, () => {
    console.log("server is running on port 3600");
})