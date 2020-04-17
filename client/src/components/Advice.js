import React from 'react';
import { checkPropTypes } from 'prop-types';
import axios from 'axios'

class Advice extends React.Component {
    state = {
        advice: 'nothing'
    }

    componentDidMount(){
        axios.get('/advice')
            .then(req => {
                console.log(req.data);
            }).catch(err => {
                console.log(err);
            })
    }

    render(){
    return(
        <div> Advice: {this.state.advice} </div>
    )
    }
}

export default Advice;