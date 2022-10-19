import GlobalStyle from '../../assets/styles/global';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../assets/styles/themes/default';
import { Container } from './style';
import Header from '../Header';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle/>
        <Header/>
    </ThemeProvider>
  );
}

export default App;
