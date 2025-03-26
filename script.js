document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // Get the value of the 'count' cookie
  let visitCount = parseInt(getCookie('count')) || 0;

  // Increment the count
  visitCount++;

  // Update the cookie with the new count
  setCookie('count', visitCount, 7); // Cookie expires in 7 days

  // Display the count on the webpage
  let counterElement = document.createElement('p');
  counterElement.textContent = `You have visited this page ${visitCount} times.`;
  document.body.appendChild(counterElement);
});
