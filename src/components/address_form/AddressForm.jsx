import React, { Component } from 'react';

export default class AddressForm extends Component {
    state = {
        address: ""
    }

    onChange(event) {
        this.setState({
            address: event.target.value
        })
        console.log(this.state.address)
    }

    render() {
        return (
            <form id='address-form'>
                <input id='address-input' placeholder='Type in an address' onChange={event => this.onChange(event)} />
            </form>
        )
    }
}