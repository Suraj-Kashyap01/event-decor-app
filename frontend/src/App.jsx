import React from 'react'
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Product from './products/Product.jsx';
import FAQ from './FAQ/FAQ.jsx';
import AnnouncementBar from './Announcement/Announcement.jsx';
import Footer from './Footer/Footer.jsx';

const App = () => {
  return (
    <div>
      <Header/>
      <AnnouncementBar/>
      <Main/>
      <Product/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default App