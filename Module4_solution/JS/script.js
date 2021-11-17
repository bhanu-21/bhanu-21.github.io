var names = new Array();
names[0] = "Candy";
names[1] = "Bhanu";
names[2] = "Jason";
names[3] = "Paul";
names[4] = "Harry";
names[5] = "Jack";
names[6] = "Joe";
names[7] = "Smith";
names[8] = "Prince";
names[9] = "Jennifer";

for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === 'J' || names[i].charAt(0) === 'j') {
        console.log("Goodbye " + names[i]);
    }

    else {
        console.log("Hello " + names[i]);
    }
}