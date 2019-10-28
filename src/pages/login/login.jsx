import React, { Component } from 'react';
import mixin, { padStr } from '@/utils/mixin';
import { connect } from "react-redux"
import { is, fromJS } from 'immutable';
import axios from "@/api/api"
import logo from '@/images/logo.png';
import "./login.scss"
@mixin({padStr})
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentWillMount(){
        axios.getStatus()
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
    render() {
        return (
            <div className="login-body-wrap">
                <div className="login-logo-img">
                    <img src={logo} alt=""/>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) { // 将state映射到props
    return {
        user : state.user
    }
}
function mapDispatchToProps(dispatch) {

}
export default connect(mapStateToProps,mapDispatchToProps)(Login)