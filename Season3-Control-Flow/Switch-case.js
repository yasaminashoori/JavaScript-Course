const role = "ADMIN";
switch (role) {
    case "ADMIN": {
        console.log("the uder role is admin.");
        break;
    }
    case "MERCHANT": {
        console.log("the uder role is merchant.");
        break;
    }
    case "TEACHER": {
        console.log("the uder role is teacher.");
        break;
    }
    default:
        console.log("Unknown user role!");
        break;
}

