var userAge = prompt("Please enter your age");

function validateAge() {
    const age = document.getElementById('age').value;

    if (isNaN(age) || age < 0 || age > 200) {
        alert("Please enter a valid age between 0 and 200.");
        return false;
    }

    return true;
}