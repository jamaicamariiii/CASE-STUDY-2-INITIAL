import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Component/Dashboard'; 
import './App.css'; // Import the CSS file

function App() {
    return( 
        <BrowserRouter>
            <Routes>
                
                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;