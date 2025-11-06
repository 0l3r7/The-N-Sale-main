import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero.jsx';
import Todo from "./components/TodoLists/Todo.jsx";
import Quiz from "./QuizMe/Quiz.jsx";

function App() {
  return (
    <Router basename="/The-N-Sale">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
