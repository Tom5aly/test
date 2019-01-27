import React, { Component } from "react";
import Recipe from "./commbonent/recpie/recpie";
import RecipeList from "./commbonent/recipeserch/recipeList";
import RecipeDetails from "./commbonent/recpieDetails/recipeDetails";
import { recipes } from "./tempList";
import "./App.css";

class App extends Component {
  state = {
    recipes: recipes,
    url:
      "https://www.food2fork.com/api/search?key=c67cda111a9b47aefa4a7d558be46701"
  };
  // async getRecipes() {
  //   try {
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();

  //     this.setState({
  //       recipes: jsonData.recipes
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // componentDidMount() {
  //   this.getRecipes();
  // }

  render() {
    // console.log(this.state.recipes);

    return (
      <React.Fragment>
        <RecipeList recipes={this.state.recipes} />

        <RecipeDetails />
      </React.Fragment>
    );
  }
}

export default App;
