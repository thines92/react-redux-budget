import React from 'react';

class Transaction extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            income: '',
            source: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event)
        this.setState({
            income: event.target.income,
            source: event.target.source
        })
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.income || ''} onChange={this.handleChange} />
                    <input type="text" value={this.state.source || ''} onChange={this.handleChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Transaction;