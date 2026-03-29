import React, { Suspense, useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

const fetchData = async () => {
  const res = await fetch('/data.json');
  return res.json();
}
const digitalToolsData = fetchData(); 

const App = () => {
  const [selectProduct, setSelectProduct] = useState([]);

  return (
    <div>
      <Header selectProduct={selectProduct}/>
      <Suspense fallback={<p>Data Loading...</p>}>
        <Main digitalToolsData={digitalToolsData} selectProduct={selectProduct} setSelectProduct={setSelectProduct}/>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
