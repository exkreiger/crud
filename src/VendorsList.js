import React from 'react';
import PropTypes from 'prop-types';

export default function VendorsList({ vendors }) {
    const emptyMessage = (
        <p>There are no vendors in the collection</p>
    )
    const vendorsList = (
        <p>List of vendors</p>
    )
    return(
        <div>
            {vendors.length === 0 ? emptyMessage : vendorsList}
        </div>
    );
}

VendorsList.propTypes = {
    vendors: PropTypes.array.isRequired
}