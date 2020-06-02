import React from "react";
import { Field, reduxForm } from 'redux-form'

class EditTransaction extends React.Component {

    renderError({ error, touched }) {
        if (error && touched) {
          return <div className="ui error message">{error}</div>;
        }
      }
      
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? "error" : ""}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = (values) => {
        this.props.editTransaction({
            id: this.props.transaction.id,
            type: values.type,
            source: values.source
        });
        this.props.setViewState()
    }

    render() {
        return (
            <div>
                <form
                    className="ui form error"
                    onSubmit={this.props.handleSubmit(
                        this.onSubmit
                    )}
                >
                    <div className="field">
                        <Field
                            name="type"
                            component={this.renderInput}
                            label="Type"
                        />
                    </div>
                    <div className="field">
                        <Field
                            name="source"
                            component={this.renderInput}
                            label="Source"
                        />
                    </div>
                    <button className="ui button primary">Save</button>
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
    form: 'editTransaction',
    validate: validate
})(EditTransaction);
