// Form Validation
function validateForm() {
    const form = document.forms[0];
    const email = form["email"].value;
    const name = form["firstName"].value;
    const message = form["message"].value;

    if (email === "" || name === "" || message === "") {
        alert("All fields marked as required must be filled out.");
        return false;
    }
    return true;
}
