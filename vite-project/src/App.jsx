import './App.scss'
import HeroSection from './components/HeroSection/HeroSection'
import Footer from './components/Footer/Footer'
import Below from './components/Manage/Manage'
import Feedback from './components/Feedback/Feedback'
import Features from './components/Features/Features'


function App() {
  return (
    <div className="app-wrapper">
      <HeroSection/>
      <Features/>
      <div className='desktop-view'>
        <Feedback/>
        <Below/> 
      </div>
      <Footer/>
    </div>
  )
}

export default App
