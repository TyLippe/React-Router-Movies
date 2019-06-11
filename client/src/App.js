import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    if(savedList.findIndex(test => test.id === movie.id) !== -1) {return}
    
    else {
    savedList.push(movie);
    this.setState({ savedList });
    }
  };

  render() {
    return (
      <div>
        <h1>Movie List</h1>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" 
        render={props => <MovieList {...props} />}
        />
        <Route path="/movies/:id"
        render={props => <Movie {...props} 
        addToSavedList={this.addToSavedList} />}
        />
      </div>
    );
  }
}
