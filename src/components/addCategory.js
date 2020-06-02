import React from "react";
import { Field, reduxForm } from "redux-form";

class AddCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      source: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    console.log("e", e.target);
    e.preventDefault();
    console.log("props", this.props);
    this.props.addCategory(this.state.type, this.state.source);

    this.setState({
      type: "",
      source: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
          <h4 className="ui dividing header">Add Category</h4>
          <div className="field">
            <div className="two fields">
              <div className="field">
                <input
                  type="text"
                  name="type"
                  value={this.state.type}
                  placeholder="Type"
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  name="source"
                  value={this.state.source}
                  placeholder="Source"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="ui button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
    form: 'addCategory'
})(AddCategory);
