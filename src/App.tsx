import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import MainContainer from './containers/main'

const App: React.FC = () => {
    return (
        <>
        <Header />
        <MainContainer/>
        <Footer/>
        </>
    )
}

export default App