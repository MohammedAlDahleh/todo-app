import './app.css';
import {BrowserRouter as Router,Route,Routes,} from "react-router-dom";
import React from 'react';
import ToDo from './components/todo/todo';
import Settings from './context/settings';
import UserForm from './hooks/form';
import Login from './components/auth/login';
import Login,{ LoginContext } from './components/auth/context';

import { When } from 'react-if';
export default function App() {
  return (
    <div className="App">
      <Login></Login>
      <Settings>
        <Routes>
          <Route path="/todo-app" element={<ToDo />} />
          <Route path="/userForm" element={<UserForm />} />
        </Routes>
      </Settings>
      <LoginContext/>
    </div>
  );
}
