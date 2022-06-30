import React from 'react'
// import { withRouter, useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

const RouteChangeTracker = () => {
    const history = createBrowserHistory();

    console.log('wwww ', history);
    history.listen((data) => {
        console.log('dddd ',data);
    })
    history.listen((location, action) => {
        console.log('location ',location);
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
    });

    return <div></div>;
};

export default RouteChangeTracker;