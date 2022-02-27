import React, { Component } from 'react';
import { Routes } from 'react-router';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Layout>
    );
  }
}
