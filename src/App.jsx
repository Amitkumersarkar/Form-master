
import './App.css'
import HookForm from './components/HookForm/HookForm'
import RefForm from './components/RefForm/RefForm'
import ReuseableFrom from './components/ReuseableFrom/ReuseableFrom'
// import SimpleForm from './components/SimpleForm/SimpleForm'
import StateFulForm from './components/StateFulForm/StateFulForm'

function App() {

  return (
    <div>
      <h2>Fill-Up The Form</h2>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFulForm></StateFulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableFrom formTitle={'Sign Up'}></ReuseableFrom>
      <ReuseableFrom formTitle={'Profile UpDates'} submitBtnText='Update'></ReuseableFrom>
    </div >
  )
}

export default App
