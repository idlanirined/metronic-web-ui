import React from "react"; 
import {
    BrowserRouter as Router,
    Switch,
    Route, 
    Redirect
} from "react-router-dom"; 
import Home from "../containers/Home";
import Login from "../containers/Login"; 
import Constant from "../library/Constants";

export default function BasicExample() {
    return ( 
            <Router basename={"/metronic"}>
                <Switch>
                    <Route exact path="/">
                        <Redirect
                            to={{
                                pathname: "/dashboard"
                            }}
                        />
                    </Route>
                    <Route path="/login" component={Login} />
                    <PrivateRoute path="/"><Home /></PrivateRoute>
                </Switch>
            </Router> 
    );
}

function PrivateRoute({ children, ...rest }) {
    const logged = localStorage.getItem(Constant.ACCESS_TOKEN) !== null ? true : false
    return (
        <Route
            {...rest}
            render={({ location }) =>
                logged ? (
                    children
                ) :
                    (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}