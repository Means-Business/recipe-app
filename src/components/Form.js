import React from 'react';
import './Form.css';

const Form = props => (
  <form onSubmit={props.getRecipe}>
    <div className="form-row">
      <div className="form-group col-12 col-md-4">
        <input
          className="form-control"
          type="number"
          name="count"
          placeholder="items?"
        />
      </div>

      <div className="form-group col-12 col-md-6">
        <input
          className="form-control"
          type="text"
          name="recipeName"
          placeholder="What kind of meat?"
        />
      </div>
      <div className="form-group col-12 col-md-2">
        <button className="btn btn-primary form__button">Search</button>
      </div>
    </div>
  </form>
);

export default Form;
