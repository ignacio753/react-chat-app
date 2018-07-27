import { connect } from 'react-redux'
import SidebarComponent from '../components/Sidebar'
import { addMessage } from '../actions'


export const Sidebar = connect(state => ({
    users: state.users
}), {})(SidebarComponent)
