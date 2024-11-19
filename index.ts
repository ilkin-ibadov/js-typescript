// Basic Types
let isActive: boolean = true;
let count: number = 42;
let username: string = "TypeScript";
let ids: number[] = [1, 2, 3];
let tuple: [number, string] = [1, "TypeScript"];

// Enum
enum Role {
    Admin = "Admin",
    User = "User",
    Guest = "Guest",
}

// Function that accepts a role as a parameter
function getPermissions(role: Role): string {
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
const adminPermissions = getPermissions(Role.Admin); // Returns: "Has full access to the system."
const userPermissions = getPermissions(Role.User);   // Returns: "Has limited access to the system."
const guestPermissions = getPermissions(Role.Guest); // Returns: "Has minimal access to the system."

// Interface
interface User {
    id: number;
    name: string;
    role: Role;
    age?: number; // Optional property
}


// Function that takes a User object as a parameter
function greetUser(user: User): string {
    return `Hello, ${user.name}! You are logged in as ${user.role}.`;
}

// Example usage
const adminUser: User = {
    id: 1,
    name: "Alice",
    role: Role.Admin,
    age: 30,
};

// Class with Access Modifiers
class Person {
    private ssn: string;
    protected dob: Date;
    public name: string;

    constructor(name: string, dob: Date, ssn: string) {
        this.name = name;
        this.dob = dob;
        this.ssn = ssn;
    }

    greet(): string {
        return `Hello, my name is ${this.name}`;
    }
}

// Generics
function identity<T>(arg: T): T {
    return arg;
}

const numberIdentity = identity<number>(5);
const stringIdentity = identity<string>("Hello");

// Advanced Types: Union, Intersection, and Type Aliases
type Point = {
    x: number;
    y: number;
};

type Circle = {
    radius: number;
};

type Shape = Point & Circle; // Intersection Type

const myShape: Shape = {
    x: 10,
    y: 20,
    radius: 15,
};

// Utility Types
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type PartialTodo = Partial<Todo>;
type ReadonlyTodo = Readonly<Todo>;

const todo: ReadonlyTodo = {
    title: "Learn TypeScript",
    description: "Practice TypeScript features",
    completed: false,
};

// todo.completed = true; // Error: Cannot assign to 'completed' because it is a read-only property.

const getUserData = async (): Promise<User[]> => {
        const response = await fetch("url")
        const data = response.json()
        return data
}