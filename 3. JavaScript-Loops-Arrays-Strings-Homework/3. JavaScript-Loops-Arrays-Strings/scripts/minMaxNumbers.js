function findMinAndMax(nums) {
    Array.max = function (array) {
        return Math.max.apply(Math, array);
    };
    Array.min = function (array) {
        return Math.min.apply(Math, array);
    };
    console.log("Min -> %s", Array.min(nums));
    console.log("Max -> %s", Array.max(nums));
}
findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);