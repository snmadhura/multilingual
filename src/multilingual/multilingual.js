import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider, FormattedMessage} from 'react-intl';
 
class Multilingual extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name       : 'Eric',
            unreadCount: 1000,
        };
    }
 
    render() {
        const {name, unreadCount} = this.state;
 this.setState()
        return (
            <p>
                <FormattedMessageaaaaa
                    id="welcome"
                    defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
                      one {message}
                      other {messages}
                    }`}
                    values={{name: <b>{name}</b>, unreadCount}}
                />
            </p>
        );
    }
}
 

export default Multilingual;