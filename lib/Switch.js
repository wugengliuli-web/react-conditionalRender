import React from 'react'
import PropTypes from 'prop-types';

//value条件渲染的判断
//DefaultComponent默认组件
const Switch = ({ value, DefaultComponent, children }) => {
    let comp = null
    children.some(v => {
        if(v.props.when === value) {
            comp = v
            return true
        }
    })
    if(comp) {
        return comp
    } else if(DefaultComponent) {
        if(typeof DefaultComponent === 'function') return <DefaultComponent />  //如果是组件
        else return DefaultComponent  //如果是jsx
    } else {
        return null
    }
}
Switch.prototype = {
    value: PropTypes.any.isRequired
}

export default Switch