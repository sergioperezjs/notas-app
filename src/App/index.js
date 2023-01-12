import React from 'react';
import { AppUI } from './AppUI';
import { NotasProvider } from '../NotasContext';


function App() {
  return (
    <NotasProvider>
      <AppUI/>
    </NotasProvider>
  );
}

export default App;
