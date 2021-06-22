import React from 'react'

export const Tabla = ({arte}) => {
    
    return (
        <div className="flextot">
            <ul className="listatot">
                <li>- {arte.id}x</li>
            </ul>
            <ul className="listatot">
                <li>{arte.name}</li>
            </ul>
            <ul className="listatot">
                <li>$ {arte.precio} </li>
            </ul>
        </div>
    )
}
