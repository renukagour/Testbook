// Importing necessary modules
const express = require('express');
const cors=require('cors'); //to get in data backend to frontend
// Creating an instance of Express
const app = express();


// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// Sample data
const books = [
    {
        bookId: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        description: "A novel about the serious issues of rape and racial inequality, told from the perspective of a young girl.",
        price: 9.99
    },
    {
        bookId: 2,
        title: "1984",
        author: "George Orwell",
        description: "A dystopian novel set in a totalitarian society ruled by Big Brother.",
        price: 8.99
    },
    {
        bookId: 3,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        description: "A romantic novel that critiques the British landed gentry at the end of the 18th century.",
        price: 10.99
    },
    {
        bookId: 4,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        description: "A story about the young and mysterious millionaire Jay Gatsby and his obsession with the beautiful Daisy Buchanan.",
        price: 7.99
    },
    {
        bookId: 5,
        title: "Moby-Dick",
        author: "Herman Melville",
        description: "A narrative of the adventures of the wandering sailor Ishmael and his voyage on the whaleship Pequod.",
        price: 11.99
    },
    {
        bookId: 6,
        title: "War and Peace",
        author: "Leo Tolstoy",
        description: "A historical novel that chronicles the French invasion of Russia and its impact on Tsarist society.",
        price: 12.99
    },
    {
        bookId: 7,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        description: "A story about a few days in the life of a troubled teenage boy, Holden Caulfield.",
        price: 6.99
    },
    {
        bookId: 8,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        description: "A fantasy novel and children's book about the adventures of hobbit Bilbo Baggins.",
        price: 8.49
    },
    {
        bookId: 9,
        title: "Brave New World",
        author: "Aldous Huxley",
        description: "A dystopian novel set in a futuristic world where society is engineered for maximum stability.",
        price: 9.49
    },
    {
        bookId: 10,
        title: "The Odyssey",
        author: "Homer",
        description: "An epic poem that follows the hero Odysseus as he journeys home after the fall of Troy.",
        price: 10.49
    }
];

app.get('/', (req, res) => {
    res.send('<h2>Hello World</h2>');
});

// Route to get all books  
app.get('/books', (req, res) => {
    res.json(books);
});

// Route to get a specific book by ID
app.get('/books/:id', (req, res) => { //here id given name
    const bookId = parseInt(req.params.id);
    const book = books.find(book=>book.bookId===bookId); //bookId is in array inside find book is variable
    if(book){
        res.json(book);
    }else{
        res.status(404).send('Book not found');
    }

});


// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
