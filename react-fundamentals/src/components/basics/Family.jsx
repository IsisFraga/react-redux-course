/* eslint-disable import/no-anonymous-default-export */
import React, { cloneElement } from 'react'

const Family = props => {

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

export default Family