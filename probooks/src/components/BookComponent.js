import React from 'react';

//This section basically focus on main component of Book 
const BookComponent = props => {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{props.title}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{props.books.map(book => (
						<li key={book.id}>
							<Book book={book} movebook={props.movebook} />
						</li>
					))}
				</ol>
			</div>
		</div>
	);
};

//This section focus on book shelf, title of book and author name
const Book = props => {
	return (
		<div className="book">
			<div className="book-top">
				<div
					className="book-cover"
					style={{
						width: 150,
						height: 200,
						backgroundImage: `url(${props.book.imageLinks.thumbnail})`
					}}
				/>
				<div className="book-shelf-changer">
					<List movebook={props.movebook} rstate={props.book.shelf} />
				</div>
			</div>
			<div className="book-title">{props.book.title}</div>
			<div className="book-authors">{props.book.authors}</div>
		</div>
	);
};

//This section helps the user to move wherever they want
const List = props => {
	return(
		<select onChange={props.movebook} value={props.rstate}>
			<option value="move" disabled>
				Move to...
			</option>
			<option value="currentlyReading">Reading</option>
			<option value="wantToRead">Like &#128077;</option>
			<option value="read">Dislike &#128078;</option>
			<option value="none">Delete &#128544;</option>
		</select>
	);
};

export default BookComponent;