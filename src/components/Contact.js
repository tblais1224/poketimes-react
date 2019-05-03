import React from 'react'


const Contact = (props) => {
    //programmatic redirect
    setTimeout(() => {
        props.history.push('/about');
    }, 2000)
    
    return (
        <div className="App container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate consectetur tempore, sunt veniam sed aliquid laudantium magnam iste? Placeat ipsam, cum nemo sunt hic possimus repellat velit odio aut enim.</p>
        </div>
    )
}

export default Contact;