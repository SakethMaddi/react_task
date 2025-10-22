import Header from './components/header/header'
import Banner from './components/banner/banner'
import Footer from './components/footer/footer'
import React from 'react'

class App extends React.Component{
  render(){
    return <>
    <Header/>
    <Banner/>
    <Footer/>
  </>

  }
}

export default App