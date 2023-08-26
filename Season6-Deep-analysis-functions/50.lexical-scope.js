const appNamr = "NO-APP";

function outer() {
    console.log(appName);
    if (true) {
        const userEmail = "userTest@.com";
    }

    function inner() {
        const userRole = "Teacher";
        console.log(userRole, "inner func");
    }
    console.log(userEmail);

    inner();
}

function testFun() {
    console.log(userRole);
}

outer();