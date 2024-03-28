import {
  Routes,
  Route,
} from 'react-router-dom'
import {HomePage} from './components/HomePage'
import customHistory from './utils/browserHistory';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { useEffect } from 'react';


const App = () => {
  useEffect(() => {}, [])

  return (
    <HistoryRouter history={customHistory}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
    </HistoryRouter>
  );
}

export default App
