import React from 'react'

const FamilyMember = props => {

    return (
        <div>
            {props.name} <strong>{props.lastName}</strong>
        </div>
    )
}

export default FamilyMember