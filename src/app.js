import './app.css';
import React from 'react';
import ToDo from './components/todo/todo';
import Settings from './context/settings';
// import UserForm from './hooks/form';
import Auth from './components/auth/context';

export default function App() {
  return (
    <div className="App">
      <Auth>
        <Settings>
          <ToDo />
        </Settings>
      </Auth>
    </div>
  );
}
