import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
    state = {
        name: null
    }
    componentDidMount() {
        let name = this.props.match.params.post_name;
        axios.get('https://pokeapi.co/api/v2/pokemon/' + name)
            .then(res => {
                this.setState({
                    post: res.data
                })
                console.log(res)
            })
    }
    render() {

        const post = this.state.post ? (
            <div className="post">
                <img src={this.state.post.sprites.front_default} alt=""/>
                <img src={this.state.post.sprites.back_default} alt=""/>
                <img src={this.state.post.sprites.front_shiny} alt=""/>
                <img src={this.state.post.sprites.back_shiny} alt=""/>
                <h4 className="center">{this.state.post.name}</h4>
                <h5>Type:</h5>
                {this.state.post.types.map((type, index) => { return <p key={index}>{type.type.name}</p> ;})}
                <h5>Abilities:</h5>
                {this.state.post.abilities.map((ability, index) => { return <p key={index}>{ability.ability.name}</p> ;})}
                <h5>Moves:</h5>
                {this.state.post.moves.map((move, index) => { return <p key={index}>{move.move.name}</p> ;})}
            </div>
        ) : (
                <div className="center">Loading post...</div>
            )

        return (
            <div className="container">
                {post}
            </div>
        )
    }
}

export default Post