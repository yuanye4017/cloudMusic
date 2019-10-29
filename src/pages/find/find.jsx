import React, { Component } from 'react';
import mixin, { padStr } from '@/utils/mixin';
import { is, fromJS } from 'immutable';

@mixin({padStr})
class Find extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
    render() {
        return (
            <div>
                我是发现组件哦
            </div>
        )
    }
}
export default Find