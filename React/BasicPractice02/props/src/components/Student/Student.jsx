import PropTypes from "prop-types";

const Student = ({ name = "Guest", age = 0, isStudent = false }) => {
  return (
    <div>
      <h1>Student Name: {name}</h1>
      <h2>Student: {isStudent ? "Yes" : "No"}</h2>
      <h2>Age: {age}</h2>
    </div>
  );
};

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

export default Student;
