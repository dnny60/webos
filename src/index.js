import React from 'react';
import { render} from 'react-dom';
import Router from './components/Router';


import './css/style.css';
{/* if i want to alter css just change the path */}


render(<Router/>, document.querySelector('#main'));