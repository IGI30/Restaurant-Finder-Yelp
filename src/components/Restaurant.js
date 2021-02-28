import React from 'react';
import { Card, Media, Image, Button } from 'react-bootstrap';
import { renderCategories, renderList } from '../util/RenderList';
import Rating from 'react-rating';

const Restaurant = ({ id, name, image_url, rating, review_count, categories, location, transactions, is_closed }) => {
    const location_display = location.display_address.map((loc, i) => 
        <li key={i} className="text-right">{loc}</li>
    )

    return (
        <Media className="align-items-stretch mt-5">
            <Image className="card-img" src={image_url} alt={name} rounded />

            <Media.Body className="ml-4 d-flex flex-column">
                <div className="d-flex">
                    <div className="media-left">
                        <h5>{ name }</h5>
                        <div className="rating-root mt-2">
                            <Rating fractions="2" initialRating={rating} emptySymbol="fa fa-star-o fa-2x" 
                                fullSymbol="fa fa-star fa-2x" className="beauty-stars" readonly />
                            <div className="text-details-secondary ml-2">{review_count}</div>
                        </div>
                        <div className="text-details-secondary mt-2">
                            {renderCategories(categories)}
                        </div>
                    </div>
                    <div className="media-right">
                        <ul className="text-details-secondary">{location_display}</ul>
                    </div>
                </div>
                <div className="order-root bd-highlight mt-auto text-capitalize text-details-secondary
                    d-flex flex-row justify-content-between align-items-center">
                    {
                        is_closed 
                        ? <Button variant="secondary" disabled>Closed</Button> 
                        : <Button variant="light">Start Order</Button> 
                    }
                    
                    { transactions.length > 0 &&
                        <div>Offers { renderList(transactions) }</div>
                    }
                </div>
            </Media.Body>
        </Media>
    );
};

export default Restaurant;