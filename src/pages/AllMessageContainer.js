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
    }
}


export default AllMessageContainer