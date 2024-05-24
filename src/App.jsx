
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Work from './pages/Work';
import Error from './components/Error';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path="/:id" element={<Work />} />
        <Route path="/*" element={<Error />} />
      </Routes>
  );
}

export default App;
