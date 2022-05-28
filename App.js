import './App.css';
import { Button, TextField, createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import DataColle from './pages/Data-collection-page/Data-collection';

let theme = createTheme({
  palette: {
    primary: {
      main: '#ebd834',
    },
    secondary: {
      main: '#34eb55',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<DataColle />}>
        </Route>
      </Routes>
      </BrowserRouter>
   
    </ThemeProvider>
  );
}

export default App;
