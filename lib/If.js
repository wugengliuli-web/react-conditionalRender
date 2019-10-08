import React from 'react'
import PropTypes from 'prop-types';
const If = ({when, children, DefaultComponent}) => {
    if(when) {
        //如果有子元素
        if(children) return children
        else return null
    } else {
        //如果未定义
        if(typeof DefaultComponent === 'undefined') {
            return null
        } else if(typeof DefaultComponent === 'function'){
            //如果是组件
            return <DefaultComponent />
        } else {
            //如果是jsx
            return DefaultComponent
        }
    }
}

If.propTypes = {
    when: PropTypes.any.isRequired
}

export default If