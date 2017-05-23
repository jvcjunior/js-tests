import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main'


//export MONGO_URL=mongodb://jvcjunior:sudeste1591@ds149481.mlab.com:49481/react-graphql-relay
const MONGO_URL = 'mongodb://jvcjunior:sudeste1591@ds149481.mlab.com:49481/react-graphql-relay'
ReactDOM.render(<Main />, document.getElementById('react'));