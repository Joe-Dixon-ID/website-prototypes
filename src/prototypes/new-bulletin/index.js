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
  
  