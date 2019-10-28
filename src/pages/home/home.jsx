import React, { Component } from 'react';
import mixin, { padStr } from '@/utils/mixin';
import { connect } from "react-redux"
import { is, fromJS } from 'immutable';
import axios from "@/api/api"
@mixin({padStr})
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentWillMount(){
        axios.getStatus().then((v) => {
            console.log(v)
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
    render() {
        return (
            <div>
                这是首页
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
export default connect(mapStateToProps,mapDispatchToProps)(Home)