import './App.css';
import Categories from './components/categories';
import Footer from './components/footer';
import Header from './components/header';
import { CssBaseline } from '@material-ui/core';
function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Categories />
      <Footer />
    </>
  );
}

export default App;
