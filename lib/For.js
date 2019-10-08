import React from 'react'
import PropTypes from 'prop-types'
const For = ({ data, children, DefaultComponent }) => {
    //如果只包含一个函数
    if (typeof children === 'function') {
        if(Array.isArray(data)) {
            return (
                <>
                    {
                        data.map(children)
                    }
                </>
            )
        } else {
            return (
                <>
                    {
                        Object.entries(data).map(children)
                    }
                </>
            )
        }
    } else {
        if (data) {
            const el = Array.from(children)
            el.shift()
            if(Array.isArray(data)) {  //如果是数组
                return (
                    <>
                        {
                            data.map(children[0])
                        }
                        {
                            el
                        }
                    </>
                )
            } else { //如果是对象
                return (
                    <>
                        {
                            Object.entries(data).map(children[0])
                        }
                        {
                            el
                        }
                    </>
                )
            }
        } else {
            if(typeof DefaultComponent === 'undefined') return null
            else if(typeof DefaultComponent === 'function') return <DefaultComponent />  //如果是组件
            else return DefaultComponent  //如果是jsx
        }
    }
}
For.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]).isRequired
}

export default For