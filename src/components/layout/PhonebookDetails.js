import React, { Component } from 'react';
import PhonebookPerson from './PhonebookPerson';
import PropTypes from 'prop-types';


export class PhonebookDetails extends Component {

  render() {
    return this.props.details.map(detail => (
        <PhonebookPerson key={detail.id} detail={detail} delDetails={this.props.delDetails}/>
    ))
  }
}

//PropTypes
PhonebookDetails.proTotype = {
    details: PropTypes.array.isRequired,
    delDetails: PropTypes.func.isRequired,
}

export default PhonebookDetails
