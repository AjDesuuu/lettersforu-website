(function() {
  "use strict"; // Start of use strict

  var scrollToTop = document.querySelector('.scroll-to-top');
  
  if (scrollToTop) {
    window.addEventListener('scroll', function() {
      var scrollDistance = window.pageYOffset;
      scrollToTop.style.display = scrollDistance > 100 ? 'block' : 'none';
    });
  }

  var mainNav = document.querySelector('#mainNav');

  if (mainNav) {
    var navbarCollapse = mainNav.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      var collapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
      navbarCollapse.querySelectorAll('a').forEach(item => {
        item.addEventListener('click', function() {
          collapse.hide();
        });
      });
    }

    var collapseNavbar = function() {
      var scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body).scrollTop;
      if (scrollTop > 100) {
        mainNav.classList.add("navbar-shrink");
      } else {
        mainNav.classList.remove("navbar-shrink");
      }
    };
    collapseNavbar();
    document.addEventListener("scroll", collapseNavbar);
  }

  // Handle modal opening and closing without animation
  var modals = document.querySelectorAll('.modal');

  modals.forEach(function(modal) {
    var modalContent = modal.querySelector('.modal-content');

    // Opening animation
    modal.addEventListener('show.bs.modal', function() {
      modalContent.style.animation = 'modalFadeIn 0.5s forwards';
    });

    // Closing without animation
    modal.addEventListener('hide.bs.modal', function(e) {
      e.preventDefault(); // Prevent immediate closure to handle the animation
      modalContent.style.animation = ''; // Remove animation for closing

      // Hide the modal immediately
      var modalInstance = bootstrap.Modal.getInstance(modal);
      modalInstance.hide();
    });
  });

})(); // End of use strict
