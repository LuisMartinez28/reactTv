import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import routerMap from './config';
function CustomRoute(props: iRouterViewProps) {
    let path: string = props.location.pathname;
    props.beforeEnter && props.beforeEnter(path);
    // '/'-> '/home
    if (path === '/') return <Redirect to="/react-movie/home" />;
    // if can match
    let matchRoute: any = routerMap.find((item) => {
        let url = item.path;
        // /movies/:id -> \\/movies\\/[^/+]
        url = url.replace(/(:.+)/g, '[^/]+').replace(/\//g, '\\/');
        return new RegExp(`${url}(\\/|\\/)?$`, 'gi').test(path);
    });
    if (matchRoute) {
        return <Route exact={!matchRoute.hasChild} path={matchRoute.path} component={matchRoute.component} />;
    }
    return <Redirect to="/404" />;
}

export const RouterView: React.FC<iRouterViewProps> = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <CustomRoute {...props} />
            </Switch>
        </BrowserRouter>
    );
};
