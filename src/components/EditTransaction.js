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

    onSubmit = (props) => {
        console.log('onSubmit', props);
        this.props.editTransaction();
    }

    render(props) {
        console.log('props', this)
        return (
            <div>
                <form
                    className="ui form"
                    onSubmit={this.props.handleSubmit(
                        this.onSubmit(this)
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

// export default reduxForm({
//     form: 'editTransaction'
// })(EditTransaction);

export default EditTransaction;
