import './App.css'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Slide from './components/Slider'
import TypeOfgame from './components/TypeOfgame'

function App() {
  return (
    <div>
      <Navigation/>
      <div className='ml-5 mr-5 mt-28'>
        <Slide/>
      </div>
      <TypeOfgame/>
      <Footer/>
    </div>
  )
}

export default App
