import { combineReducers } from 'redux';

import loads from './reducers/loads.js';
import vendors from './reducers/vendors.js';
import blogs from './reducers/blogs.js';

export default combineReducers({
    loads,
    vendors,
    blogs
});