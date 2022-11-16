import React, {} from 'react'
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
// import FeedbackData from './data/FeedbackData';
import AboutPage from './pages/AboutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutIconLink from './components/shared/AboutIconLink';
import {FeedbackProvider} from './context/FeedbackContext'



function App(){

    // const [feedback, setFeedback] = useState(FeedbackData)
 
    // const addFeedback = (newFeedback)=>{
    //     newFeedback.id = uuidv4()
    //     setFeedback([newFeedback, ...feedback])
    // }

    // const deleteFeedback = (id) =>{
    //     console.log("App", id)
    //     setFeedback(feedback.filter( feed => feed.id !== id))
    // } 




    return(
        <FeedbackProvider>
            <Router> 
                <Header />
                <div className="container">
                <Routes>
                        <Route exact path='/' element={
                            <>
                                <FeedbackForm /> 
                                <FeedbackStats />
                                <FeedbackList />
                                <AboutIconLink />
                            </>
                        } />
                        <Route exact path='/about' element={<AboutPage />} />
                </Routes>
                </div>
            </Router>
        </FeedbackProvider>

    )
}


export default App; 