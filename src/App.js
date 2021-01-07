import React, { Component } from 'react';
import CardList from './cardList';
import SearchBox from './searchBox';
import {robots} from './robots'

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield:'' 
        };
    }
    onSearchChange = (event) => {        
        this.setState({searchfield: event.target.value})
    }
    render(){
        const filterrobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filterrobots} />
                </div>
        );
    }
    
}

export default App;