import logo from "./logo.svg";
import "./App.css";
import { Signnin } from "./Login-form/Signnin";
import { Routes, Route, Router, Switch } from "react-router-dom";
import { LogInSuccessfull } from "./Login-form/LogInSuccessfull";
import Dashb from "./Login-form/Dashboard/Dashb";
import Teacher from "./Login-form/Dashboard/Teacher";
import Student from "./Login-form/Dashboard/Student";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signnin />} />
      <Route path="/logInSuccess" element={<LogInSuccessfull />}>
        <Route index element={<Dashb />} />
        <Route path="dashboard" element={<Dashb />} />
        <Route path="teacher" element={<Teacher />} />
        <Route path="student" element={<Student />} />
      </Route>
    </Routes>
  );
}

export default App;
