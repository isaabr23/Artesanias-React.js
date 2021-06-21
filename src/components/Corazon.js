import React, { useState } from 'react'

export const Corazon = () => {

    const [like, setLike] = useState(false);
    const heart = () => setLike((value) => !value);

    return (
        <>
            {like ? (
                <i
                className="fa fa-heart col-heart"
                aria-hidden="true"
                onClick={heart}
                ></i>
            ) : (
                <i className="fa fa-heart" aria-hidden="true" onClick={heart}></i>
            )}
        </>
    )
}
