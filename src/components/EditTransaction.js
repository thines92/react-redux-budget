import React from "react";
import { Field, reduxForm } from 'redux-form'

class EditTransaction extends React.Component {
    render(props) {
        console.log('props', props)
        return (
            <div>
                <form
                    className="ui form"
                    onSubmit={this.props.handleSubmit(
                        this.props.onSubmit(props)
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
