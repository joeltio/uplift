import React from "react";
import CSSModules from "react-css-modules";

import styles from "./chat.css";

import Message from "../../components/Message/Message";

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                chats: [
                    ["left", "Hi, this is your therapist, Mr Halden.\nHow may I be of your assistance?"],
                    ["right", "Hi"],
                    ["right", "I have been feeling down lately, and need someone to talk to."],
                    ["left", "Sure, I'm glad to help. What do you want to talk about?"],
                    ["right", "I am depressed because of my studies in school"],
                    ["left", "What is it about studies that is bothering you?"]
                ].map((e, i) =>
                    <Message key={i} side={e[0]}>{e[1]}</Message>)
        }
    }

    addMessage(msg) {
        var i = this.state.chats.length;
        var e = <Message key={i} side="right">{msg}</Message>;
        var newArray = this.state.chats;
        newArray.push(e);
        this.setState({chats: newArray});
    }

    sendMessage(e) {
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        if (keyCode == "13") {
            var input = e.target.value;
            this.addMessage(input);
            e.target.value = "";
        }
    }

    sendMessageClick(e) {
        var input = document.getElementById("message-in");
        this.addMessage(input.value);
        input.value = "";
    }


    render() {
        return (
            <div styleName="chat-page">
                <div styleName="top-header">
                    <h1>Nick Halden</h1>
                </div>
                <div styleName="chat-content">
                {this.state.chats}
                </div>
                <div styleName="bottom-header">
                    <input id="message-in" onKeyPress={this.sendMessage.bind(this)} placeholder="Talk..." styleName="message-input" type="text" />
                    <button onClick={this.sendMessageClick.bind(this)} styleName="message-send">Send</button>
                </div>
            </div>
        );
    }
}

export default CSSModules(Chat, styles);