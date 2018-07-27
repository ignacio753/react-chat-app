import { connect } from 'react-redux'
import MessagesListComponent from '../components/MessagesList'
import { addMessage } from '../actions'


export const MessagesList = connect(state => ({
    messages: state.messages
}), {})(MessagesListComponent)
