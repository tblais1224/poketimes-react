import React from 'react'


const  Rainbow = (WrappedComponent) => {

    const colors = ['red', 'blue', 'green', 'purple', 'pink', 'yellow', 'orange']
    //gets and random number between 0 and 6 for the index of color
    const randomColor = colors[Math.floor(Math.random()*6)];
    //sets color class for text
    const className = randomColor + "-text";

    return (props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow

