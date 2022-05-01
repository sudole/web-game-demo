import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home';
import Game01 from './pages/Game01';
import { Layout } from './components/Layout';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/game01" element={<Game01/>} />
        </Routes>
      </Layout>
    );
  }
}
