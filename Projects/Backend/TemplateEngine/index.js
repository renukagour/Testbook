const express = require('express');
const app = express();
const port = 3500;
const path = require('path');

//set ejs in express
app.set('view engine','ejs');  //use ejs, pug or hbs
app.use(express.urlencoded({extended:true})) //parse the url
// coming to front data from back

const products=[
    {id:1,name:'Product 1',price:10},
    {id:2,name:'Product 2',price:20},
    {id:3,name:'Product 3',price:30},

]

const novels = [
    { nId: 1, nName: 'To Kill a Mockingbird', price: 20, desc: 'Harper Lee\'s classic novel set in the American South during the 1930s.', summary: 'A lawyer defends a black man falsely accused of raping a white woman, addressing themes of racial injustice and moral growth.' },
    { nId: 2, nName: '1984', price: 15, desc: 'George Orwell\'s dystopian novel exploring the dangers of totalitarianism.', summary: 'In a totalitarian society, a man struggles against a government that controls every aspect of life, emphasizing surveillance and the manipulation of truth.' },
    { nId: 3, nName: 'Pride and Prejudice', price: 18, desc: 'Jane Austen\'s romantic novel set among the British landed gentry.', summary: 'Elizabeth Bennet navigates societal expectations, love, and class in Regency-era England, offering a witty commentary on manners and marriage.' },
    { nId: 4, nName: 'One Hundred Years of Solitude', price: 25, desc: 'Gabriel García Márquez\'s magical realist novel spanning seven generations.', summary: 'The Buendía family experiences love, war, and the supernatural in the fictional town of Macondo, blending fantasy with historical events.' },
    { nId: 5, nName: 'The Great Gatsby', price: 22, desc: 'F. Scott Fitzgerald\'s exploration of the American Dream during the Roaring Twenties.', summary: 'Jay Gatsby\'s pursuit of wealth and lost love is observed by Nick Carraway, revealing the decadence and disillusionment of the Jazz Age.' }
];


//if you want to send data to an external file we need to import or require this file 
// but in case of template engine we don't need to import or require this file
// there is specific method called render
// render is used to send data to an external file
// render in root directory i.e. tempalteengine folder search for views folde 
// and inside views folder search for index.ejs

app.get('/',(req,res)=>{
    //  res.render('index') // search for public/index.ejs instead u can use only render(" ") also
    res.render("home");

})

app.get('/products',(req,res)=>{
    res.render('index', {products});
 
 })
app.get('/novels',(req,res)=>{
   res.render('novels', {novels});

})

// get novel 1 2 3 etc
app.get('/novels/:id',(req,res)=>{
    const novelsId=parseInt(req.params.id);
    const novel=novels.find(nov=>nov.nId===novelsId);
    res.render('novelDetails', {novel});
})

// fill in studentaForm data 

app.get('/studentForm',(req,res)=>{
    res.render('studentForm');
})
// to fill the student data render in info.js
app.post('/submit',(req,res)=>{
    console.log(req.body);
    const {name,age,grade}=req.body;
    // const name=req.body.name;
    res.render('info',{name,age,grade});
})

app.get('/info',(req,res)=>{
    res.render('info');
})
app.listen(port,()=>{
    console.log(`server is running at port number ${port}`);
})
