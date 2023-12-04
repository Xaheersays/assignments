/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime() {
    let startTime = new Date();
    let sum = 0;
    for (let i = 0; i < 100; i++) {
        sum += i;
    }
    let endTime = new Date();
    let timeDifference = calculateTimeDifference(startTime, endTime);
    console.log(`Time Difference for sum of 100: ${timeDifference.seconds} seconds`);

    startTime = new Date();
    sum = 0;
    for (let i = 0; i < 100000; i++) {
        sum += i;
    }
    endTime = new Date();
    timeDifference = calculateTimeDifference(startTime, endTime);
    console.log(`Time Difference for sum of 100000: ${timeDifference.seconds} seconds`);

    startTime = new Date();
    sum = 0;
    for (let i = 0; i < 1000000000; i++) {
        sum += i;
    }
    endTime = new Date();
    timeDifference = calculateTimeDifference(startTime, endTime);
    console.log(`Time Difference for sum of 1000000000: ${timeDifference.seconds} seconds`);
}

function calculateTimeDifference(startDate, endDate) {
    // Calculate the time difference in seconds
    const timeDifference = (endDate - startDate) / 1000;

    return { seconds: timeDifference };
}
calculateTime();


