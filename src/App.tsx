import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <main className=''>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
