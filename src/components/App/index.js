import GlobalStyle from '../../assets/styles/global';
import { ThemeProvider } from 'styled-components';
import { Container } from './style';
import defaultTheme from '../../assets/styles/themes/default';
import Header from '../Header';
import Routes from '../../Routes';
import { BrowserRouter } from 'react-router-dom'

import ToastContainer from '../Toast/ToastContainer';

function App() {
  return (
    <BrowserRouter>

     <ThemeProvider theme={defaultTheme}>
        <GlobalStyle/>
        <ToastContainer/>

        <Container>
            <GlobalStyle/>
            <Header/>
            <Routes/>
        </Container>

    </ThemeProvider>

    </BrowserRouter>
  );
}

export default App;
