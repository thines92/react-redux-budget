import React from "react";
import { Field, reduxForm } from 'redux-form'

class EditTransaction extends React.Component {

    renderInput = ({ input, label, meta }) => {
        console.log(label);
        const className = `field ${meta.error && meta.touched ? "error" : ""}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {/* {this.renderError(meta)} */}
            </div>
        );
    };

    onSubmit = (values) => {
        console.log('onSubmit', values);
        this.props.editTransaction({
            id: this.props.transaction.id,
            type: values.type,
            source: values.source
        });
        this.props.setViewState()
    }

    render(props) {
        console.log('props', this)
        return (
            <div>
                <form
                    className="ui form"
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

export default reduxForm({
    form: 'editTransaction'
})(EditTransaction);
