import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/layout.scss';
import PublicRoutes from './routes/public.routes';
import MainContainerLayout from './components/layout/main-container.layout';
import LeftNavLayout from './components/layout/left-nav/left-nav.layout';
import MainContentLayout from './components/layout/main-content.layout';
import FooterLayout from './components/layout/footer/footer.layout';
import HeaderLayout from './components/layout/header/header.layout';
import LayoutProvider from './hooks/layout/layout.provider';
import UserProvider from './hooks/user/user.provider';

function App(props) {
  return (
    <LayoutProvider>
      <MainContainerLayout>
        <UserProvider>
          <HeaderLayout />
          <LeftNavLayout/>
          <MainContentLayout>
            <PublicRoutes/>
          </MainContentLayout>
        </UserProvider>
        <FooterLayout/>
      </MainContainerLayout>
    </LayoutProvider>
  );
}

export default App;
