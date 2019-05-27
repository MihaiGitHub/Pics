import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
    // Key is assigned to root element that is rendered
    const images = props.images.map((image) => {
        return (
            <div key={image.id}>
                <ImageCard image={image} />
            </div>
        );
    });

    return <div className="image-list">{images}</div>;
};

export default ImageList;