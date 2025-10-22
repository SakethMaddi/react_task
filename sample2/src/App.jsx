import Header  from './header/header'
import Banner from './sections/banner'
import Footer from './footer/footer'
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
