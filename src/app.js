import React from 'react';
import ToDo from './components/todo/todo';
import Settings from './components/context/settings/context';
import '@blueprintjs/core/lib/css/blueprint.css';

export default class App extends React.Component {
  render() {
    return (
     
      <Settings>
        <ToDo />
      </Settings>
    );
  }
}