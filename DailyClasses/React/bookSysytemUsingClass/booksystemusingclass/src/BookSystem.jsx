import React, { Component } from 'react'
import './BookSystem.css'

export default class BookSystem extends Component {
    state = {
        books: [],
        title: '',
        author: '',
        cost: '',
        rating: '',
        description: '',
        category: '',
        searchQuery:'',
        selectedCategory:'All'

    }

    addBook = (e) => {
        e.preventDefault();
        console.log(this.state);
        const newBook = {
            id: Date.now(),
            title: this.state.title,
            author: this.state.author,
            cost: this.state.cost,
            rating: this.state.rating,
            description: this.state.description,
            author: this.state.author,
            category: this.state.category
        };
        this.setState((prevState) => ({
            books: [...prevState.books, newBook],
           title: '',
            author: '',
            cost: '',
            description: '',
            rating: '',
            category: '',
            


        }))
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSearch=(e)=>{
        this.setState({searchQuery:e.target.value})
    }
    render() {
        const { books, title, author, cost, description, category, rating,searchQuery, selectedCategory} = this.state;
        const filterNovels=books.filter(book=>
            (selectedCategory==='All' || book.category===selectedCategory) &&
            (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        return (
            <>
                <div className="container">
                    <div className="main">
                        <h1>Novel Management System</h1>

                        {/* drop down */}
                        <div className='heading_enterBookdetails'>
                            <h3>Enter Book Details</h3>
                        </div>
                        <form onSubmit={this.addBook}>
                            <div className="formData">


                                <div className="drop_down">
                                    <select className='select_cat' name="category" onChange={this.handleChange}>
                                        <option value="">Select category</option>
                                        <option value="Fiction">Fiction</option>
                                        <option value="Non-Fiction">Non-Fiction</option>
                                        <option value="Romantic">Comedy</option>
                                        <option value="Romantic">Romatic</option>
                                        <option value="Romantic">Thriller</option>
                                        <option value="Romantic">Action</option>
                                    </select>


                                </div>

                                <div className="title">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" name='title' onChange={this.handleChange} />
                                </div>


                                {/* author */}
                                <div className="author">
                                    <label htmlFor="author">Author</label>
                                    <input type="text" name='author' onChange={this.handleChange} />
                                </div>


                                {/*  cost*/}
                                <div className="cost">
                                    <label htmlFor="cost">Cost</label>
                                    <input type="text" name='cost' onChange={this.handleChange} />
                                </div>


                                {/* rating */}
                                <div className="rating">
                                    <label htmlFor="rating">Rating</label>
                                    <input type="text" name='rating' onChange={this.handleChange} />
                                </div>

                                {/* description */}
                                <div className="description">
                                    <label htmlFor="description">Description</label>
                                    <input type="text" name='description' onChange={this.handleChange} />
                                </div>
                            </div>

                            {/* button */}
                            <div className="btn">
                                <button className="btn_add" >Add Book</button>
                            </div>
                        </form>
                        <div className="search_filter">
                            <div className="user_search">
                                <input type="text" placeholder='Search by title or author' value={searchQuery} onChange={this.handleSearch}/>
                            </div>
                            <div className="filter">
                                <select className='select_cat'>
                                    <option value="">Select Filter</option>
                                    <option value="Fiction">Fiction</option>
                                    <option value="Non-Fiction">Non-Fiction</option>
                                    <option value="Romantic">Comedy</option>
                                    <option value="Romantic">Romatic</option>
                                    <option value="Romantic">Thriller</option>
                                    <option value="Romantic">Action</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Display novels */}
                    <div className="display_data">
                        <h2>Novel List</h2>
                        <div className="display_novels">
                        {filterNovels.map(book =>
                            <div className='display_novel_list'>
                               <div className="list_inside">
                               <h4>Title: {book.title}</h4>
                                <p>Author: {book.author}</p>
                                <p>Coat: ${book.cost}</p>
                                <p>Rating: {book.rating} ⭐️</p>
                                <p>{book.description}</p>
                                <p>{book.category}</p>
                               </div>
                               </div>
                          
                        )}
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
