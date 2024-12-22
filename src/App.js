import {v4 as uuidv4} from 'uuid';

import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import Title from "./components/Title";
import AboutPage from './pages/AboutPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutLinkIcon from './components/AboutLinkIcon';
import {Link} from 'react-router-dom';
import {FeedbackProvider} from './context/FeedbackContext';

function App() {

  return (
    <FeedbackProvider>

    <Router>
       <Title bgColor='rgba(0,0,0,0.4)'textColor='#ff6a95'/>
       <div className="container">

        <Routes>

          <Route exact path='/' element={
            <>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />
            </>
          }>
            
          </Route>

          <Route path='/about' element={<AboutPage/>}/>

        </Routes>




        </div>
        <Link to='/about'><AboutLinkIcon/></Link>
    </Router>

  </FeedbackProvider>
  );
}

export default App;
