import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../../App.css';

export default class PhonebookPerson extends Component {

render() {
    const { id, name, phone } = this.props.detail;
    return ((name) ?
    <tr>
    <td>{name}</td>
    <td>{phone}</td>
    <td><button onClick={this.props.delDetails.bind(this, id)} className='button deleteBtn'>DELETE</button></td>              
    </tr> 
    : <tr></tr>
        
    );
    }
}

//PropTypes
PhonebookPerson.proTotype = {
    detail: PropTypes.object.isRequired,
    delDetails: PropTypes.func.isRequired,
}
