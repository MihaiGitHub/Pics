import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = {
        images: []
    }

    // Callback function invoked in Child component
    // async allows to use async await syntax
    onSearchSubmit = async (term) => {
        const response = await axios
            .get('https://api.unsplash.com/search/photos', {
                params: { query: term },
                headers: {
                    Authorization: 'Client-ID ff8bb662d583b86b0fc76d88ab91cef5a46908721a9a5d1c0e43568daf424c3a'
                }
            });

        this.setState({
            images: response.data.results
        })
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;