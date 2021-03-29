import React from 'react';
import Message from './components/Mesasge'
import AnkerLink from './components/AnkerLink'
import './assets/styles/App.scss'


function App() {
  return (
    <div className="app">
      <div className="container">
      <div className="hero">
        <h1 className="title">React</h1>
        <Message message="this a little nifty template."></Message>
      </div>
      <h2>Included modules</h2>
      <dl>
        <dt>node-sass</dt>
        <dd>
          <AnkerLink url="https://github.com/sass/node-sass"></AnkerLink>
        </dd>
        <dt>husky</dt>
        <dd>
          <AnkerLink url="https://typicode.github.io/husky/#/"></AnkerLink>
        </dd>
        <dt>lint-staged</dt>
        <dd>
          <AnkerLink url="https://github.com/okonet/lint-staged"></AnkerLink>
        </dd>
        <dt>prettier</dt>
        <dd>
          <AnkerLink url="https://prettier.io/"></AnkerLink>
        </dd>
      </dl>
      </div>
    </div>
  );
}

export default App;
