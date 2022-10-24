import GlobalStyle from '../../assets/styles/global';
import { ThemeProvider } from 'styled-components';
import { Container } from './style';
import defaultTheme from '../../assets/styles/themes/default';
import ContactsList from '../ContactsList';
import Header from '../Header';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle/>
        <Container>
            <GlobalStyle/>
            <Header/>
            <ContactsList/>
        </Container>
    </ThemeProvider>
  );
}

export default App;
