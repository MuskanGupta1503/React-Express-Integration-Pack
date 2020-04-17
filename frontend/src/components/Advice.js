import React from 'react';
import { checkPropTypes } from 'prop-types';

class Advice extends React.Component {
    state = {
        advice: 'nothing'
    }
    render(){
    return(
        <div> Advice: {this.state.advice} </div>
    )
    }
}

export default Advice;