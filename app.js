import { foodData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {  

  let fiberGoal = 0; // Initialize fiber goal
  let totalFiberConsumed = 0; // Track total fiber consumed

  // Handle setting the fiber goal
  const form = document.getElementById('fiber-goal-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page

    const fiberGoalInput = document.getElementById('fiber-goal');
    const inputGoal = parseFloat(fiberGoalInput.value); // Get the entered fiber goal

    if (isNaN(inputGoal) || inputGoal <= 0) {
      alert('Please enter a valid fiber goal.');
    } else {
      fiberGoal = inputGoal; // Set the fiber goal
      updateRemainingFiber(); // Update the display for remaining fiber
    }
  });

  // Update the remaining fiber display
  function updateRemainingFiber() {
    const remainingFiber = fiberGoal - totalFiberConsumed;
    document.getElementById('remaining-fiber').querySelector('span').textContent = remainingFiber.toFixed(2);

    if (remainingFiber <= 0) {
      alert('Congratulations! You have met your fiber goal.');
    }
  }

  // Dynamically generate food tables
  const foodByType = foodData.reduce((acc, food) => {
    if (!acc[food["Food Type"]]) {
      acc[food["Food Type"]] = [];
    }
    acc[food["Food Type"]].push(food);
    return acc;
  }, {});

  const tablesContainer = document.getElementById('food-tables-container');
  Object.keys(foodByType).forEach((foodType) => {
    const foods = foodByType[foodType];

    // Create section and table
    const section = document.createElement('div');
    section.classList.add('food-section');

    const header = document.createElement('h2');
    header.textContent = foodType;
    section.appendChild(header);

    const table = document.createElement('table');
    table.classList.add('food-tables-container');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Food</th>
          <th>Typical Serving Size (g)</th>
          <th>Fiber Per Serving (g)</th>
          <th>Source</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        ${foods
          .map(
            (food) => `
        <tr>
          <td>${food["Food"]}</td>
          <td>${food["Typical serving size (grams)"]}</td>
          <td>${food["Fiber Per Serving"].toFixed(1)}</td>
          <td>${food["Source"]}</td>
          <td><button class="add-serving" data-fiber="${food["Fiber Per Serving"]}">Add Serving</button></td>
        </tr>
      `
          )
          .join('')}
      </tbody>
    `;
    section.appendChild(table);
    tablesContainer.appendChild(section);
  });

  // Add event listeners to the "Add Serving" buttons
  document.querySelectorAll('.add-serving').forEach((button) => {
    button.addEventListener('click', (event) => {
      if (fiberGoal <= 0) {
        alert('Please set your daily fiber goal before adding foods.');
        return;
      }

      const fiberPerServing = parseFloat(event.target.getAttribute('data-fiber'));
      totalFiberConsumed += fiberPerServing;

      // Update the fiber consumed list
      const foodName =
        event.target.closest('tr').querySelector('td:first-child').textContent;
      const listItem = document.createElement('li');
listItem.innerHTML = `
  ${foodName} - Fiber: ${fiberPerServing.toFixed(1)}g
  <button class="remove-serving" data-fiber="${fiberPerServing}">Remove</button>
`;
      document.getElementById('consumed-list').appendChild(listItem);

      // Add event listener for remove button
      listItem.querySelector('.remove-serving').addEventListener('click', (event) => {
        const fiberRemoved = parseFloat(event.target.getAttribute('data-fiber'));
        totalFiberConsumed -= fiberRemoved;

        // Remove the list item
        event.target.closest('li').remove();
        updateRemainingFiber();
      });

      updateRemainingFiber();
    });
  });
});
