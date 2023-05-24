const searchInput = document.getElementById('search-input');
const suggestionsBox = document.getElementById('suggestions-box');

searchInput.addEventListener('input', showSuggestions);

function showSuggestions() {
  suggestionsBox.innerHTML = '';

  const query = searchInput.value.trim();
  const regex = new RegExp(query, 'i'); // Create case-insensitive regex from search query

  if (query !== '') {
    const relevantSuggestions = suggestions.filter((suggestion) => regex.test(suggestion));

    relevantSuggestions.forEach((suggestion) => {
      const suggestionItem = document.createElement('div');
      suggestionItem.classList.add('form-check');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = '1';
      checkbox.name = suggestion;
      checkbox.id = option.label; // Assuming option is accessible here
      checkbox.onclick = function () {
        Features.handleOptionStateChange(this.id, true);
      };
      checkbox.classList.add('form-check-input');

      // Check if the checkbox is already checked on the page
      const existingCheckbox = document.getElementById(option['label']); // Assuming option is accessible here
      if (existingCheckbox && existingCheckbox.checked) {
        checkbox.checked = true;
      }

      const label = document.createElement('label');
      label.classList.add('form-check-label', 'ms-2');
      label.htmlFor = option['label']; // Assuming option is accessible here
      label.textContent = suggestion.replace(/enable/i, "");

      suggestionItem.appendChild(checkbox);
      suggestionItem.appendChild(label);

      suggestionsBox.appendChild(suggestionItem);
    });

    suggestionsBox.classList.add('show');
  } else {
    suggestionsBox.classList.remove('show');
  }
}