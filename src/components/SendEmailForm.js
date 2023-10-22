import React, {Component} from 'react';

class SendEmailForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            message: ''
        }
        this.emailInput = React.createRef();
        this.messaegeText = React.createRef();
    }

    handleChangeEmailInput = e => this.setState({...this.state, email: e.target.value});


    handleChangeMessageText = e => this.setState({...this.state, message: e.target.value})

    handleOnClickSend = () => {
        alert(`Sending email from ${this.state.email} with message ${this.state.message}`)
        this.setState({email: '', message: ''})
        this.emailInput.current.value = '';
        this.messaegeText.current.value = ''
    }


    render() {
        return (

            <div className={'container w-50'}>
                <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control w-50"
                        id="emailInput"
                        placeholder="name@example.com"
                        onChange={this.handleChangeEmailInput}
                        ref={this.emailInput}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="messageText" className="form-label">Example textarea</label>
                    <textarea
                        className="form-control"
                        id="messageText"
                        rows="6"
                        onChange={this.handleChangeMessageText}
                        ref={this.messaegeText}>
                    </textarea>
                </div>
                <button type="submit"
                        className="nav-item btn btn-danger border border-light rounded-pill mx-1 my-3 common-btn"
                        onClick={this.handleOnClickSend}>
                    Send
                </button>
            </div>
        )
            ;
    }
}

export default SendEmailForm;