import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    }

    // Use => function as alternative instead of bind(this) 
    onFormSubmit = (event) => {
        // Prevent page refresh on enter
        event.preventDefault();


    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(e) => this.setState({ term: e.target.value})} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;