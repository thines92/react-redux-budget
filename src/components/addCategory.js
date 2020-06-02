import React from 'react'

class AddCategory extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            income: '',
            source: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        console.log('e', e.target)
        e.preventDefault();
        console.log('props', this.props)
        this.props.addTransaction(this.state.income, this.state.source)
        
        this.setState({
            income: '',
            source: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" name="income" value={this.state.income} onChange={this.handleChange} />
                    <input type="text" name="source" value={this.state.source} onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddCategory;