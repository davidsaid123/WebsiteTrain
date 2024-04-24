import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TrainingModules from './components/TrainingModules';
import TrainingVideo from './components/TrainingVideo';
import QuizPage from './components/QuizPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/modules" element={<TrainingModules />} />
        <Route path="/modules/:id" element={<TrainingVideo />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
      </Routes>
    </Router>
  );
}

export default App;
