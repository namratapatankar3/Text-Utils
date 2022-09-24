import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [setMode, changeMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if (setMode === 'dark') {
      changeMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils- light Mode'
    }
    else {
      changeMode('dark')
      document.body.style.backgroundColor = '#212850'
      showAlert("dark  mode has been enabled", "success")
      document.title = 'TextUtils- Dark Mode'
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={setMode} toggle={toggleMode} />
        <Alerts alrt={alert} />
        <div className='container'>
          <Routes>
            <Route exact path="/" element={<TextForm seeAlert={showAlert} heading="Uppercase Convertor, Lowercase Convertor, Word Counter, Character Counter, Voicemaker" mode={setMode} />} >
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
