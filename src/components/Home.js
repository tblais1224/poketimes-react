import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'


class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        Axios.get('https://pokeapi.co/api/v2/pokemon')
            .then((res) => {
                console.log(res)
                this.setState({
                    posts: res.data.results.slice(0, 20)
                })
            })
    }

    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.name}>
                        <img src={Pokeball} alt="Pokeball"/>
                        <div className="card-content">
                            <Link to={'/' + post.name}>
                                <span className="card-title red-text">{post.name}</span>
                            </Link>
                            
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">No posts yet</div>
            )
        return (
            <div className="App container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}
export default Home;