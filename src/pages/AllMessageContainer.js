import React, {Component} from 'react';
import SmsCard from './SmsCard'


class AllMessageContainer extends Component {
    render() {
        // console.log (this.props.smsList)
        const cardRender = this.props.smsList.map((sms) => {
            return (
                <SmsCard sms={sms}/>
            )
        })

        // show empty if no sms
        return(
            cardRender? cardRender: null
            
        )
        return (
            <h1>{this.props.smsList}</h1>
        )
    }

}


export default AllMessageContainer