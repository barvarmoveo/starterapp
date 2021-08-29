import React from "react";
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import './HeaderApp.scss';



export function _HeaderApp(props: any) {
    let history = useHistory();

    return (
        <header className="app-header flex align-center space-between">
            <div className="logo flex align-center">
                Starter App
            </div>
            <div className="navigate-container flex space-between">
                <button className="secondary-page-btn flex align-center" onClick={() => history.push("/SecondaryPage")}>Secondary</button>
                <button className="home-page-btn flex align-center" onClick={() => history.push("/")}>Home Page</button>
            </div>
        </header>
    )
}


export const HeaderApp = withRouter(_HeaderApp)

