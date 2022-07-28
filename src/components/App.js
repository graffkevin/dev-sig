import './App.css';
import React from 'react';
import NavigationTool from './navigation/Navigation';
import RouterProvider from './routerProvider';

//import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

function App() {
  
  return (
      <div className="App">
        <NavigationTool />
        <RouterProvider />
      </div>
  );
  
}

export default App;
