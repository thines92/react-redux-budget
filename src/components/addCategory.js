import React from 'react'
import { Field, reduxForm } from 'redux-form'

class AddCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "",
      source: "",
    };
  }

  renderError({ error, touched }) {
    if (error && touched) {
      return <div className="ui error message">{error}</div>;
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
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
                <Field
                  name="source"
                  component={this.renderInput}
                  label="Source"
                />
              </div>
            </div>
          </div>

          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.type) {
    errors.type = "Enter a title";
  }

  if (!formValues.source) {
    errors.source = "Enter a source";
  }

  return errors;
};

export default reduxForm({
  form: "addCategory",
  validate: validate,
})(AddCategory);
