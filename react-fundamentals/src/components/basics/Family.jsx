import React, { cloneElement } from 'react'

export default props => {

    return (
        <div>
            {
            // React.cloneElement(props.children, props) - usado quando é apenas um elemento

            // para vários elementos:
            React.Children.map(props.children, child => {
                return cloneElement(child, props)
            })}
        </div>
    )
}