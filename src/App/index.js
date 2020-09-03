import React from 'react';
import './App.css';

import AppLayout from './AppLayout';
import WelcomeMessage from './WelcomeMessage';
import AppBar from './AppBar';
import { AppProvider } from './AppProvider';

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar />
        <WelcomeMessage />
      </AppProvider>
    </AppLayout>
  );
}

export default App;
