const input = document.getElementById("input");

function reverseString(str) {
  return str.split("").reverse().join("");
}
function check() {
  const value = input.value;
  const revers = reverseString(value);

  if (value === revers) {
    alert(value + " is palindrome");
  } else {
    alert(value + " is not palindrome");
  }
  input.value = "";
}
