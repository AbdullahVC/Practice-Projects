import "./Person.style.css";
import ListDisplay from "../ListDisplay";+-

const Person = ({ avatar, name, phoneNumbers, addresses, emails }) => {
  return (
    <div className="person">
      <div className="left-container">
        <img src={avatar} alt={`${name}'s avatar`} />
      </div>
      <div className="right-container">
        <h1>{name}</h1>
        <ListDisplay title="Phone Numbers" data={phoneNumbers} field="number" />
        <ListDisplay title="Addresses" data={addresses} field="address" />
        <ListDisplay title="Emails" data={emails} field="email" />
      </div>
    </div>
  );
};

export default Person;
