import { Routes,Route } from "react-router-dom"


function App() {
  return (
    <>
      <div className='flex bg-green-300'>
        <Routes>
          <Route path="/" element={<h1>Home</h1>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
