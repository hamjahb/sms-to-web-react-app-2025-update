import React, {Component} from 'react';



class SmsCard extends Component {

    
    
    render(){
        console.log(this.props.sms)

        
        return(
        <div className ='smsCard'>
            <h3>Number:</h3>
            <p>{this.props.sms.phone}</p>
            <h3>Text:</h3>
            <p>{this.props.sms.text}</p>
        </div>
        )
    }
}

export default SmsCard;