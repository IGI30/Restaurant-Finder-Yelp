import React from 'react';
import { connect } from 'react-redux';
import Restaurant from './Restaurant';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

const RestaurantsList = (props) => {
    return (
        // <Grid container spacing={3} justify="center" alignItems="center">

        <Container fluid="md mt-2 mb-5">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    {
                        props.isLoading ? (
                            <div className="text-center mt-5"><Spinner animation="border" variant="light" /></div>
                        ) : (
                            props.restaurants && props.restaurants.length > 0 && 
                            props.restaurants.map((restaurant) => <Restaurant key={restaurant.id} {...restaurant} /> )
                        )
                    }
                </Col>
            </Row>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants,
        isLoading: state.isLoading
    };
};

export default connect(mapStateToProps)(RestaurantsList);