import React, { Component } from 'react'
import Axios from 'axios';


class Home extends Component {
    state = {
        posts: [ ]
    }
    componentDidMount(){
        Axios.get('https://pokeapi.co/api/v2/pokemon')
        .then((res) => {
            console.log(res)
            this.setState({
                posts: res.data.results.slice(0,25)
            })
        })
    }

    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.name}>
                        <div className="card-content">
                            <span className="card-title">{post.name}</span>
                            <p>{post.url}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        )
        return (
            <div className="App container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}
export default Home;