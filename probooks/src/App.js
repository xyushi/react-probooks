import React from 'react';
import SearchBooks from './components/SearchComponent';
import ListBooks from './components/HomeComponent';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class BooksApp extends React.Component {


	render() {
		return(
			<Router>
				<Switch>
					<Route exact path="/" component={ListBooks}/>
					<Route exact path="/search" component={SearchBooks}/>
				</Switch>
			</Router>
		)
	}
}

export default BooksApp;