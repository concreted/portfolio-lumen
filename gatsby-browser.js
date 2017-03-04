import ReactGA from 'react-ga'
import {config} from 'config'

ReactGA.initialize(config.googleAnalyticsId);

exports.onRouteUpdate = (state, page, pages) => {
  ReactGA.pageview(state.pathname);
};

exports.modifyRoutes = routes => {
    // Redirect all routes without trailing slash to route + trailing slash
    const redirects = routes.childRoutes.map(route => {
        return {
            path: `/${route.path.split('/')[1]}`,
            onEnter: (nextState, replace) => replace(route.path)
        }
    });
    // The last route handles 'undefined', so we need to place the redirects before that.
    const childRoutesLength = routes.childRoutes.length;
    const childRoutesButLast = routes.childRoutes.slice(0, childRoutesLength - 1);
    const childRoutesLast = routes.childRoutes[childRoutesLength - 1];
    routes.childRoutes = childRoutesButLast.concat(redirects).concat([childRoutesLast]);
    return routes;
};
