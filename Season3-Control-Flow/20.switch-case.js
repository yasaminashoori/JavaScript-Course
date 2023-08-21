const role = "ADMIN";
switch (role) {
    case "ADMIN": {
        console.log("the user role is admin.");
        break; // don't check other cases
    }
    case "MERCHANT": {
        console.log("the user role is merchant.");
        break;
    }
    case "TEACHER": {
        console.log("the user role is teacher.");
        break;
    }
    default:
        console.log("Unknown user role!");
        break;
}
