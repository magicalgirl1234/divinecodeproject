import React, { useState } from 'react';
import CommentBox from './components/CommentBox';
import CommentSlider from './components/CommentSlider';
import { BrowserRouter,Route,Routes ,Redirect} from 'react-router-dom';
import { Home } from './components/Home';
function App() {
    return(
        <Routes>
            <Route exact path='/' element={Home}/>
            <Route exact path='/signn' element={SignIn}/>
            <Redirect to='/' />
        </Routes>
    )
}

export default App;
