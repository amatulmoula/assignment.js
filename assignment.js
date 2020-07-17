                //feetToMile
function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
var sokinaFeet = feetToMile(333);
console.log(sokinaFeet);
var jorinaFeet = feetToMile(222)
console.log(jorinaFeet);

                        //woodCalculator
function woodCalculator(chair, table, bed) {
    var chairwood = chair * 1;
    var tablewood = table * 3;
    var bedwood = bed * 5;
    var totalWood = chairwood + tablewood + bedwood;
    return totalWood;
}
var woodresult = woodCalculator(11, 12, 6)
console.log(woodresult);



                            //brickCalculator
function brickCalculator(Bricks_Needed) {
    const oneFeet = 1000;
    var buildingFloor = 25;
    if (buildingFloor >= 1 && buildingFloor <= 10) {
        var bricksNeeded = 15 * oneFeet;

    } else if (buildingFloor >= 11 && buildingFloor <= 20) {
        var bricksNeeded = 12 * oneFeet;

    } else {
        var bricksNeeded = 10 * oneFeet;
    }
    return bricksNeeded;
}
var totalbrickCount = brickCalculator()
console.log(totalbrickCount)
                        //tinyFriends
function tinyFriends(names) {
    var min = names[0];



    for (var i = 0; i < names.length; i++) {
        var element = names[i];
        if (element.length < min.length) {
            min = element;
        }
    }
    return min;
}

var chotoNam = tinyFriends(['Jamil', 'Karim', 'Jamal', 'Jim', 'Priya']);
console.log(chotoNam);
