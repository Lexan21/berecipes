import React from 'react'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import CssBaseline from '@mui/material/CssBaseline';




const App = () => {
    return (
        <div className="body">
            <CssBaseline />
            <Header />
            <Main />
            <Footer />

        </div>
    )
}

export default App
