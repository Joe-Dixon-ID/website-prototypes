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

  document.addEventListener("DOMContentLoaded", function () {
    const tocItems = document.querySelectorAll('.ons-list__item');
    const sections = document.querySelectorAll('section');

    function updateActiveSection() {
      let current = '';

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          current = section.getAttribute('id');
        }
      });

      tocItems.forEach(item => {
        item.classList.remove('active');

        if (item.querySelector('a').getAttribute('href').substring(1) === current) {
          item.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', updateActiveSection);
    window.addEventListener('resize', updateActiveSection);
  });
  
  