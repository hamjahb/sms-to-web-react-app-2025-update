import React, {Component} from 'react';



class SmsCard extends Component {

    
    
    render(){
        console.log(this.props.sms)

        
        return(
        <div className ='smsCard'>
            <h2>Number:</h2>
            <p>{this.props.sms.phone}</p>
            <h2>Text:</h2>
            <p>{this.props.sms.text}</p>
        </div>
        )
    }
}

export default SmsCard;