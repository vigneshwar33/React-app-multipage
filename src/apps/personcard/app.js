import React, {PropTypes} from 'react';
import { render } from 'react-dom';
import PersonCard from './components/personcard';

render(
    <PersonCard />,
    document.getElementById('app')
);