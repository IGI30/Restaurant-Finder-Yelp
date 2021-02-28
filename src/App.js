import React, { useEffect } from 'react';
import Axios from 'axios';
import store from './store/store';
import { addRestaurants } from './actions/restaurants';
import RestaurantsList from './components/RestaurantsList';

const App = () => {
    const url = "http://localhost:3030/restaurants";

    const getData = () => {
        // const result = await Axios.get(url);
        Axios.get(url).then(response => {
            // console.log(response.data);
            store.dispatch(addRestaurants(response.data.businesses));
        });

        // console.log(result.data.businesses);
    }

    useEffect(() => {
        getData();
    })

    return (
        <div>
            <Navbar>
                <NavItem icon="IGI" />
                <li className="nav-item-head">
                    <h2 onClick={getData}>Restaurant Finder</h2>
                </li>
            </Navbar>
            <RestaurantsList />
        </div>
    )
}

function Navbar(props) {
    return (
        <nav className="m-navbar">
            <ul className="m-navbar-nav">
                { props.children }
            </ul>
        </nav>
    );
}

function NavItem(props) {
    return (
        <li className="nav-item">
            <a href="#" className="icon-button">
                { props.icon }
            </a>
        </li>
    );
}

export default App
