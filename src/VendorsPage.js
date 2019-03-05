import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import VendorsList from './VendorsList.js';
import { connect } from 'react-redux';


class VendorsPage extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path ="/" component={ App } />
                    </div>
                </Router>
                <div>
                    <h1>Vendors</h1>
                </div>
                <VendorsList vendors={this.props.vendors} />
            </div>
        )
    }
}

VendorsPage.propTypes = {
    vendors: PropTypes.array.isRequired
}

function mapStateToProps(state){
    return{
        vendors: state.vendors
    }
}

export default connect(mapStateToProps)(VendorsPage);