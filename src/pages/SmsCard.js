import React, {Component} from 'react';



class SmsCard extends Component {

    
    
    render(){
        // console.log(this.props.sms)
        return(
        <div className ='smsCard'>
            <h5>Number:</h5>
            <p>{this.props.sms.phone}</p>
            <h5>Text:</h5>
            <p>{this.props.sms.text}</p>
        </div>
        )
    }
}

export default SmsCard;