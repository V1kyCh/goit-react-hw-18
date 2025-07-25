import './App.css';
import { Header } from './pages/Header/Header';
import ReviewsWidget from './pages/ReviewsWidget/ReviewsWidget';
import ContactBook from './pages/ContactBook/ContactBook';
import { useState } from 'react';

import { ReviewsProvider } from './context/ReviewsContext';
import { ContactProvider } from './context/ContactContext';

function App() {
  const [whatPage, setWhatPage] = useState('Reviews widget')

  const handleChangePage = (e) => {
    setWhatPage(e.target.textContent.trim())
  }
  return (
    <div className="App">
      <Header changePage={handleChangePage} />
      {whatPage === 'Reviews widget' ? <ReviewsProvider><ReviewsWidget /> </ReviewsProvider> : <ContactProvider><ContactBook /></ContactProvider>}
    </div>
  );
}

export default App;
