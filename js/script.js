const mass = [2, 3, "text"];

function first(massive, callback) {
    summ = [];
    for (key in massive) {
        summ[key] = callback(massive[key])
    };



    return summ;
};

massSecond = first(mass, function(massive) {
    if (typeof massive === "number") {
        massive = massive ** 2;
    };



    return massive;
});





console.log(mass,massSecond);
