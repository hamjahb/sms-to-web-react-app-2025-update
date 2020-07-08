import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';

class SmsCard extends Component {
    timeSince(date) {
        let seconds = Math.floor(((new Date().getTime()/1000) - date)),
        interval = Math.floor(seconds / 31536000);
        
        if (interval > 1) return interval + "y ago";
        
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) return interval + "m ago";
        
        interval = Math.floor(seconds / 86400);
        if (interval >= 1) return interval + "Days ago";
        
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) return interval + "Hours ago";
        
        interval = Math.floor(seconds / 60);
        if (interval > 1) return interval + "m ago";
        
        return Math.floor(seconds) + "s ago";
      }


    render(){
        // console.log(this.props.sms)
        return(
            <Card bg={'light'} className="mb-2">
                <Card.Body>
                    <Card.Title> {this.props.sms.phone}</Card.Title>
                    <Card.Text>{this.props.sms.text}</Card.Text>
                    <Card.Footer className="text-muted">{this.timeSince(this.props.sms.timeStamp)}</Card.Footer>
                </Card.Body>
            </Card>
        )
    }
}

export default SmsCard;