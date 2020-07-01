import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';

class SmsCard extends Component {
    render(){
        // console.log(this.props.sms)
        return(
            <Card bg={'light'} className="mb-2">
                <Card.Body>
                    <Card.Title> {this.props.sms.phone}</Card.Title>
                    <Card.Text>{this.props.sms.text}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default SmsCard;