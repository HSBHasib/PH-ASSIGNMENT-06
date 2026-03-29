import React, { Suspense } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

const fetchData = async () => {
  const res = await fetch('/data.json');
  return res.json();
}

const digitalToolsData = fetchData(); 

const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<p>Data Loading...</p>}>
        <Main digitalToolsData={digitalToolsData}/>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
