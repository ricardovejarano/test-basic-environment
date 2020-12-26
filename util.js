const colors = {
    green: "\x1b[32m",
    red: "\x1b[31m"
}

const successMessage = (message) => {
    console.log(colors.green, message);
}

const errorMessage = (message) => {
    console.log(colors.red, message)
}

export { successMessage, errorMessage };