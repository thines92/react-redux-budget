import React from "react";
import { Field, reduxForm } from "redux-form";

class AddCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      source: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  renderInput = (props) => {
    console.log(props);
    return (
      <div className="field">
        <label>{props.label}</label>
        <input {...props.input} autoComplete="off" />
      </div>
    );
  };

  onSubmit = ({ type, source }) => {
    this.props.addCategory(type, source);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <h4 className="ui dividing header">Add Category</h4>
          <div className="field">
            <div className="two fields">
              <div className="field">
                <Field name="type" component={this.renderInput} label="Type" />
              </div>
              <div className="field">
                  <Field name="source" component={this.renderInput} label="Source" />
              </div>
            </div>
          </div>

          <button className="ui button primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "addCategory",
})(AddCategory);
