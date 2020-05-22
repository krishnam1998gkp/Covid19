import React,{Component} from 'react';
import './chatbot.styles.scss';
class Chatbot extends Component{

    render(){
        return(
            <div className="section-chatbot">
                <a target="blank" class="chatbot" href="https://integrations.eu-gb.assistant.watson.cloud.ibm.com/web/public/27a40348-ccac-46b8-9fad-0f89319cca30">
                    Let's talk</a>
            </div>
        )
    }

}

export default Chatbot;