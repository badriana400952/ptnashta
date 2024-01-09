
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import EditMahasiswa from "./component/EditMahasiswa";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<EditMahasiswa />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
