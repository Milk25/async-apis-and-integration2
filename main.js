// Task 1: Countdown Timer
function startCountdown(durationInSeconds) {
    let remainingTime = durationInSeconds;
    const timerInterval = setInterval(() => {
        console.log(`Time left: ${remainingTime} seconds`);
        remainingTime--;
  
        if (remainingTime < 0) {
            clearInterval(timerInterval);
            console.log('Countdown finished!');
        }
    }, 1000);
  }
  
  // Example usage:
  startCountdown(10);
  
  // Task 2: Delayed Notification
  function showDelayedNotification(message, delayInMilliseconds) {
    setTimeout(() => {
        console.log(`Notification: ${message}`);
    }, delayInMilliseconds);
  }
  
  // Example usage:
  showDelayedNotification('This is your delayed notification!', 3000);
  
  // Task 3: Repeat Notification
  function startRepeatingNotification(message, intervalInMilliseconds) {
    const notificationInterval = setInterval(() => {
        const userWantsToDismiss = confirm(message);
        if (userWantsToDismiss) {
            clearInterval(notificationInterval);
            console.log('Notifications stopped by user.');
        }
    }, intervalInMilliseconds);
  }
  
  // Example usage:
  startRepeatingNotification('Do you want to stop receiving this notification?', 5000);
  