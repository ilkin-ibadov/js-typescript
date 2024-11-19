// Basic Types
var isActive = true;
var count = 42;
var username = "TypeScript";
var ids = [1, 2, 3];
var tuple = [1, "TypeScript"];
// Enum
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["User"] = "User";
    Role["Guest"] = "Guest";
})(Role || (Role = {}));
// Function that accepts a role as a parameter
function getPermissions(role) {
    switch (role) {
        case Role.Admin:
            return "Has full access to the system.";
        case Role.User:
            return "Has limited access to the system.";
        case Role.Guest:
            return "Has minimal access to the system.";
        default:
            return "Unknown role.";
    }
}
// Example usage
var adminPermissions = getPermissions(Role.Admin); // Returns: "Has full access to the system."
var userPermissions = getPermissions(Role.User); // Returns: "Has limited access to the system."
var guestPermissions = getPermissions(Role.Guest); // Returns: "Has minimal access to the system."
// Function that takes a User object as a parameter
function greetUser(user) {
    return "Hello, ".concat(user.name, "! You are logged in as ").concat(user.role, ".");
}
// Example usage
var adminUser = {
    id: 1,
    name: "Alice",
    role: Role.Admin,
    age: 30,
};
// Class with Access Modifiers
var Person = /** @class */ (function () {
    function Person(name, dob, ssn) {
        this.name = name;
        this.dob = dob;
        this.ssn = ssn;
    }
    Person.prototype.greet = function () {
        return "Hello, my name is ".concat(this.name);
    };
    return Person;
}());
// Generics
function identity(arg) {
    return arg;
}
var numberIdentity = identity(5);
var stringIdentity = identity("Hello");
var myShape = {
    x: 10,
    y: 20,
    radius: 15,
};
var todo = {
    title: "Learn TypeScript",
    description: "Practice TypeScript features",
    completed: false,
};
// todo.completed = true; // Error: Cannot assign to 'completed' because it is a read-only property.
// // Async/Await with Promises
// async function fetchData(): Promise<string> {
//     return new Promise((resolve) => setTimeout(() => resolve("Data fetched!"), 1000));
// }
// (async () => {
//     const data = await fetchData();
//     console.log(data);
// })();
// const getUserData = async (): Promise<User[]> => {
//     try {
//         const response = await fetch("")
//         const data = response.json()
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// }
var div = document.getElementById("div");
