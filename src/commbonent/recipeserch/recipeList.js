import React, { Component } from "react";
import Recipe from "../recpie/recpie";

export default class recipesearch extends Component {
  render() {
    const { recipes } = this.props;
    console.log(recipes);

    return (
      <React.Fragment>
        <div className="container my-5">
          {/* title */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text.font">recipe list</h1>
            </div>
          </div>
          {/* end title */}
        </div>
        <Recipe />
      </React.Fragment>
    );
  }
}
