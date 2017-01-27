import React from "react";

import { Navigation } from "./";

function App(props) {
    return (
        <div className="app">
            <Navigation />

            { props.children }
        </div>
    );
}

export default App;