function GetTime(){
    const currentTime = new Date();
// Format time in 24-hour format
    const formattedTime24 = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    }).format(currentTime);

    // Format time in 12-hour format
    const formattedTime12 = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    }).format(currentTime);
    return [formattedTime24,formattedTime12]
}
setInterval(()=>{
    time = GetTime()
    console.log('Formatted time in 24-hour format:', time[0]);
    console.log('Formatted time in 12-hour format:', time[1]);
},1000)

