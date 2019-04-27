import React from 'react';
import './App.css';

import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY = '44d744111e17df1ceb1928f02c515224';

class App extends React.Component {
  state = {
    count: '',
    recipes: []
  };
  getRecipe = async e => {
    const count = e.target.elements.count.value;
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20${recipeName}&count=${count}`
    );

    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    this.setState({ count: count });
    console.log(data);
    console.log(this.state.recipes);
    console.log(this.state.count);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
