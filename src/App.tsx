import Form from './Components/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowTable from './Components/ShowTable';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Form />} />
                <Route path="/form" element={<Form />} />
                <Route path="/datatable" element={<ShowTable />} />
            </Routes>
        </Router>
    );
}

export default App;
