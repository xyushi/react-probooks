import React from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import BookComponent from './BookComponent';
import { getAll } from '../BooksAPI';
class ListBooks extends React.Component {
	movebook = this.movebook.bind(this); //passing arguments based on user selection

	state = {
		books: []
	};

	separator(status) { //this function helps the user to store/shown the book in particular shelf
		return this.state.books.filter(book => book.shelf === status);
	}

	//for finding the information of books from BooksAPI
	getbooks() {
		
		getAll().then(data => {
			this.setState({
				books: data
			});
		});
	}
	
	componentDidMount() { //helps to rendered all the data of books to the DOM
		this.getbooks();
	}

	//Based on the user selection we need to move the books to read, like or dislike.
	movebook(e) {
		let paretn = e.target.parentNode.parentNode.nextElementSibling;
		let m = this.state.books.filter(book => book.title === paretn.innerText);
		m[0].shelf = e.target.value;
		this.setState({
			books:this.state.books
		});
	}

	render() {
		const currentlyReading = this.separator('currentlyReading');
		const wantToRead = this.separator('wantToRead');
		const read = this.separator('read');
		return (
			<>
				<div className="list-books">
					<Title heading="ProBook" />
					<div className="list-books-content">
						<div>
							<BookComponent
								title="Reading"
								books={currentlyReading}
								movebook={this.movebook}
							/>
							<BookComponent
								title="Like"
								books={wantToRead}
								movebook={this.movebook}
							/>
							<BookComponent
								title="Dislike"
								books={read}
								movebook={this.movebook}
							/>
						</div>
					</div>
					<div className="open-search">
						<Link to="/search">
							<button>Add a book</button>
						</Link>
					</div>
				</div>
			</>
		);
	}
}

export default ListBooks;