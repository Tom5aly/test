import React, { Component } from "react";

export default class recpie extends Component {
  render() {
    const {
      image_url,
      publisher,
      source_url,
      recipe_id,
      title
    } = this.props.recipe;

    return (
      <React.Fragment>
        <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
          <div className="card">
            <img
              src={image_url}
              alt="recipe-pic"
              className="img-card-top"
              style={{ height: "14rem" }}
            />
            <div
              className="card-body text-capitalize"
              style={{ height: "6rem" }}
            >
              <h6>{title}</h6>
              <h6 className="text-font">By:{publisher}</h6>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-primary text-capitalize">
                info
              </button>
              <a
                href={source_url}
                target="_blank"
                role="button"
                rel="noopener noreferrer"
                className="btn btn-success mx-2 text-capitalize"
              >
                read more
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
