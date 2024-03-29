/***********************************************************************************
Imports question manager, summary generator, answer piping and previous link history
************************************************************************************/
import '@ons/prototype-kit/src/helpers/index.js';

document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.querySelector('form.search__form');
    const searchInput = document.querySelector('#nav-search');
  
    searchForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const searchTerm = searchInput.value.trim();
  
      if (searchTerm) {
        const searchURL = 'https://www.ons.gov.uk/search?q=' + encodeURIComponent(searchTerm);
        console.log('Search Term:', searchTerm);
        console.log('Search URL:', searchURL);
  
        searchForm.action = searchURL;

        searchForm.submit();
      }
    });
  });

  function handleScroll() {
    const scrollPosition = window.scrollY;
  
    // Iterate through each section
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;
      const navLink = document.querySelector(`.ons-toc .ons-list__link[href="#${section.id}"]`);
  
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        // Section is in the viewport
        navLink.classList.add("ons-toc__link-active");
      } else {
        // Section is not in the viewport
        navLink.classList.remove("ons-toc__link-active");
      }
    });
  }
  
  // Get all sections with an 'id' attribute
  const sections = document.querySelectorAll('section[id]');
  
  // Listen for scroll events
  window.addEventListener('scroll', handleScroll);
  
  // Trigger the function once to set initial state
  handleScroll();
  