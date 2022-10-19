import GlobalStyle from './assets/styles/global';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './assets/styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle/>
        <h1>MyContactsd</h1>
    </ThemeProvider>
  );
}

export default App;
