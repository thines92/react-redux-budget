import React from 'react'

class AddCategory extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            type: '',
            source: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        console.log('e', e.target)
        e.preventDefault();
        console.log('props', this.props)
        this.props.addCategory(this.state.type, this.state.source)

        this.setState({
            type: '',
            source: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)} className="ui form">
                    <h4 className="ui dividing header">Add Category</h4>
                    <div className="field">
                        <div className="two fields">
                            <div className="field">
                                <label>type</label>
                                <input type="text" name="type" value={this.state.type} placeholder="type" onChange={this.handleChange} />
                            </div>
                            <div className="field">
                                <label>Source</label>
                                <input type="text" name="source" value={this.state.source} onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="ui button">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddCategory;