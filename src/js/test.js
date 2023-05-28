window.addEventListener('load', function() {
    setTimeout(function() {
      window.scrollTo(0, 1);
    }, 0);
  });

  
  window.addEventListener('resize', function() {
    if (window.innerHeight === window.outerHeight) {
      console.log('Панель навигации скрыта');
    } else {
      console.log('Панель навигации не скрыта');
    }
  });
  