import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';

class LoadsPage extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path ="/" component={ App } />
                    </div>
                </Router>
                <div>
                    <h1>Loads</h1>
                </div>
            </div>
        )
    }
}

export default LoadsPage;