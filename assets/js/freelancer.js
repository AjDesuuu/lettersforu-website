(function() {
  "use strict"; // Start of use strict

  var envelopeWrappers = document.querySelectorAll('.custom-envelope-wrapper');

  envelopeWrappers.forEach(function(wrapper) {
    wrapper.parentElement.addEventListener('click', function(event) {
      // Prevent the default action of the anchor tag
      event.preventDefault();

      // Trigger the envelope opening animation
      wrapper.classList.add('open-envelope');

      // Get the corresponding modal ID from the anchor tag's dataset
      var modalId = this.getAttribute('data-modal');

      // Wait for the envelope animation to complete before showing the modal
      setTimeout(function() {
        // Select the modal using the modalId
        var myModal = document.querySelector(modalId);
        var modalInstance = new bootstrap.Modal(myModal);

        // Show the modal
        modalInstance.show();

        // Close the envelope when the modal is hidden
        myModal.addEventListener('hidden.bs.modal', function() {
          wrapper.classList.remove('open-envelope');
        });
      }, 1100); // Adjust this timeout based on the envelope animation duration
    });
  });

  // Scroll to top functionality
  var scrollToTop = document.querySelector('.scroll-to-top');
  if (scrollToTop) {
    window.addEventListener('scroll', function() {
      var scrollDistance = window.pageYOffset;
      scrollToTop.style.display = scrollDistance > 100 ? 'block' : 'none';
    });
  }

  // Navbar shrink behavior
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

})();
