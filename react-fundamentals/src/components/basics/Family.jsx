import React, { cloneElement } from 'react'

export default (props) => {

    return (
        <div>
            {
            // React.cloneElement(props.children, props) - usado quando é apenas um elemento

            // para vários elementos:
            props.children.map((child, i) => {
                return cloneElement(child, { ...props, key: i})
            })}
        </div>
    )
}