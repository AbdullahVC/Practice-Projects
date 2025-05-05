import { useState } from "react";
function MyComponent() {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(0);
  const [isStupid, setIsStupid] = useState(false);

  const sayIt = () => {
    setName("Slim Shady");
  };

  const sayItAge = () => {
    setAge(age + 0.5);
  };

  const sayItStupid = () => {
    setIsStupid(!isStupid);
  };

  return (
    <div>
      <p>My Name is {name}</p>
      <button onClick={sayIt}>Say It</button>

      <p>My Age is {age}</p>
      <button onClick={sayItAge}>Grow Me</button>

      <p>Are you stupid {isStupid ? "Yeaaah ma'am" : "nope"}</p>
      <button onClick={sayItStupid}>Make me Stupid</button>
    </div>
  );
}

export default MyComponent;
