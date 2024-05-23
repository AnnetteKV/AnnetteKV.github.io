window.addEventListener('load', function () {
  let preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});




    
document.addEventListener('DOMContentLoaded', function() {
  var lastVisitTime = localStorage.getItem('lastVisitTime');

  if (!lastVisitTime) {
    lastVisitTime = new Date().getTime();
    localStorage.setItem('lastVisitTime', lastVisitTime);
  }

  function updateTimer() {
    var currentTime = new Date().getTime();
    
    var elapsedTimeInSeconds = Math.floor((currentTime - lastVisitTime) / 1000);
    

    var hours = Math.floor(elapsedTimeInSeconds / 3600);
    var minutes = Math.floor((elapsedTimeInSeconds % 3600) / 60);
    var seconds = elapsedTimeInSeconds % 60;
    
    var formattedTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    
    document.getElementById('timer').textContent = formattedTime;
  }

  function pad(num) {
    return (num < 10 ? "0" : "") + num;
  }

  updateTimer();

  setInterval(updateTimer, 1000);

  window.addEventListener('beforeunload', function() {
    localStorage.setItem('lastVisitTime', new Date().getTime());
  });
});

// document.addEventListener('DOMContentLoaded', () => {
//   const contentDiv = document.querySelector('.content');
//   const navLinks = document.querySelectorAll('.nav-link');
//   const loadingOverlay = document.querySelector('.loading-overlay');

//   const showLoadingOverlay = () => {
//     loadingOverlay.style.opacity = '1';
//   };

//   const hideLoadingOverlay = () => {
//     loadingOverlay.style.opacity = '0';
//   };

//   const loadPage = (url) => {
//     showLoadingOverlay();

//     fetch(url)
//       .then(response => response.text())
//       .then(html => {
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(html, 'text/html');
//         const newContent = doc.querySelector('.content').innerHTML;

//         contentDiv.classList.add('fade-out');
//         contentDiv.innerHTML = newContent;
//         document.title = doc.title;

//         setTimeout(() => {
//           contentDiv.classList.remove('fade-out');
//           history.pushState({}, '', url);
//           hideLoadingOverlay();
//         }, 500);
//       });
//   };

//   navLinks.forEach(el => {
//     el.addEventListener('click', (e) => {
//       e.preventDefault();
//       const url = e.currentTarget.getAttribute('href');
//       showLoadingOverlay();
//       loadPage(url);
//     });
//   });

//   loadPage(window.location.pathname);

//   window.addEventListener('popstate', () => {
//     loadPage(window.location.pathname);
//   });
// });

// // Добавляем обработчик события для скрытия preloader
// document.onreadystatechange = function () {
//   if (document.readyState === 'complete') {
//     const preloader = document.getElementById('preloader');
//     preloader.style.display = 'none';
//   }
// };
