import './App.css'
import { FirstSection } from './Sections/FirstSection'
import { FourthSection } from './Sections/FourthSection'
import { Header } from './Sections/Header'
import { SecondSection } from './Sections/SecondSection'
import { ThirdSection } from './Sections/ThirdSerction'

function App() {

  return (
    <div className="bg-neutral-200">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  )
}

export default App
