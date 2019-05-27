import './ImageList.css';
import React from 'react';

const ImageList = props => {
    // Key is assigned to root element that is rendered
    const images = props.images.map(({ description, id, urls}) => {
        return (
            <div key={id}>
                <img alt={description} src={urls.regular} />
            </div>
        );
    });

    return <div className="image-list">{images}</div>;
};

export default ImageList;