import React from 'react';
import { Provider } from 'react-redux';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ReactDOM from 'react-dom';
// import Router from './router';

// Redux
import { store } from './services/redux/store';

import './configuration/icons/css/unicons.css';

function App() {
  return (
    <Provider store={store}>
      {/* <ReportCtxtProvider>
      <ThemeProvider>
        <LanguageProvider>
          <BlanketCtxtProvider>
            <MenuCtxtProvider>
              <DashboardProvider>
                <Router />
              </DashboardProvider>
            </MenuCtxtProvider>
          </BlanketCtxtProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ReportCtxtProvider> */}
      <Home />
    </Provider>
  );
}

export default App;
