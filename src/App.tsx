import NavigationBar from './components/NavigationBar';
import MainPage from './pages/MainPageInfo';
import ContactsPage from './pages/ContactsPage.tsx';
import { LanguageContextProvider } from './context/LanguageContext.tsx';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <>
      <LanguageContextProvider>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<ContactsPage />} />
        </Routes>
        <Footer />
      </LanguageContextProvider>
    </>
  );
}

export default App;
