import "./App.css";
import Student from "./components/Student";

function App() {
  return (
    <>
      <Student name="Alice Smith" age="101" isStudent={true} />
      <Student name="Bob Johnson" age="102" isStudent={false} />
      <Student name="Charlie Brown" age={52} isStudent={true} />
      <Student />
      <Student />
      <Student />
      <Student />
    </>
  );
}

export default App;
