import "./App.css";
import Person from "./components/Person";
import phoneBook from "./data/data";

function App() {
  return (
    <>
      {phoneBook.map((person) => (
        <Person
          key={person.name}
          avatar={person.avatar}
          name={person.name}
          phoneNumbers={person.phoneNumbers}
          addresses={person.addresses}
          emails={person.emails}
        />
      ))}
    </>
  );
}

export default App;
