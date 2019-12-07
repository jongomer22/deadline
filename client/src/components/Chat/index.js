import React from 'react';
import socketIOClient from "socket.io-client";
import API from "../../utils/API";
import { Card, CardHeader, CardBody, CardFooter, Input, InputGroup, Button, ListGroup, ListGroupItem, InputGroupAddon, Form } from 'reactstrap';
import './style.css';



export default class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            response: 0,
            endpoint: "https://regulate.herokuapp.com/",
            chatHistory: [],
            projectId: "",
            name: "",
        };


    }



    componentDidMount() {
        const { endpoint } = this.state;
        //Very simply connect to the socket
        const socket = socketIOClient(endpoint);
        socket.on('chat message', data => this.onMessageReceived(data));

        const projectId = this.props.projectid;


        this.setState({ projectId: projectId });

        API.getUsr().then(res => {
            if (res.data.user) {
                this.setState({ name: res.data.user.userName })
            }

        });
        this.getChatHistory(projectId);

    }

    getChatHistory(id) {
        API.getChat(id)
            .then(res => {
                this.setState({ chatHistory: res.data });
                this.scrollChatToBottom();
                console.log(res);
            });

    };

    addChatHistory() {
        const msg = this.state.message;
        const projectId = this.state.projectId;
        const name = this.state.name;
        API.saveChat({
            projectId: projectId,
            message: msg,
            name: name,
        });
    }

    handleInputChange = event => {
        this.setState({ message: event.target.value })
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.emit('chat message', this.state.message);
        this.addChatHistory();
        this.setState({ message: "" });
    };

    onMessageReceived() {
        const id = this.state.projectId;

        this.getChatHistory(id);
    }

    scrollChatToBottom = () => {
        this.panel.scrollTo(0, this.panel.scrollHeight)
    }



    render() {
        return (
            <Card projectid={this.props.projectid} className="chat">
                <CardHeader>{this.props.chatname}</CardHeader>
                <CardBody className="chatWindow" innerRef={(panel) => { this.panel = panel; }}>
                    <ListGroup>
                        {this.state.chatHistory.map(msg => (
                            <ListGroupItem className="border-0" key={msg._id}>{msg.name}: {msg.message}</ListGroupItem>
                        )

                        )}
                    </ListGroup>
                </CardBody>
                <CardFooter>
                    <Form>
                        <InputGroup>
                            <Input
                                placeholder="Type to chat!"
                                value={this.state.message}
                                onChange={this.handleInputChange}
                            />
                            <InputGroupAddon addonType="append">
                                <Button
                                    type="submit"
                                    color="success"
                                    onClick={this.handleFormSubmit}
                                >
                                    Enter
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Form>
                </CardFooter>
            </Card>

        )
    }
}