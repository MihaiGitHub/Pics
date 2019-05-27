import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            spans: 0
        };

        this.imageRef = React.createRef();
    }

    componentDidMount(){
        // Add event listener to make sure image is loaded before getting the height
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    // Function to determine the space each image should take up
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        // 10px is row height; 1 for rounding up; Math.ceil for capping it's value
        const spans = Math.ceil(height / 10);

        this.setState({ spans });
    }

    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img 
                    ref={this.imageRef}
                    alt={description} 
                    src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;