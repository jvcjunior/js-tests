import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import Data from './mock/data';

var app = 
ReactDOM.render(
    <Form formData={Data} />,
    document.querySelector('.root')
);