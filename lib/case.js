import React from 'react'
import PropTypes from 'prop-types';
const Case = ({ when, component: Component }) => {
    if(Component) {
        if(typeof Component === 'function') return <Component />  //如果是组件
        else return Component  //如果是jsx
    } else {
        return null
    }
}

Case.prototype = {
    when: PropTypes.any.isRequired
}
export default Case