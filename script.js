document.addEventListener('DOMContentLoaded', function () {
    const weeksContainer = document.getElementById('weeksContainer');
    const datePicker = document.getElementById('datePicker');
    
    // Define the start date (Year 1, Week 1 - January 1st)
    const startDate = new Date('2024-01-01');  // Adjust for your specific start date
    
    // Function to generate 260 weeks of Bible study
    function generateWeeks() {
      for (let i = 0; i < 260; i++) {
        const weekStart = new Date(startDate);
        weekStart.setDate(weekStart.getDate() + (i * 7));  // Each week is 7 days apart
  
        const weekCard = document.createElement('div');
        weekCard.classList.add('week-card');
        weekCard.id = `week-${i + 1}`;
  
        const weekNumber = document.createElement('h3');
        weekNumber.innerText = `Week ${i + 1}: ${weekStart.toDateString()}`;
  
        const reflectionArea = document.createElement('textarea');
        reflectionArea.placeholder = `Write your thoughts for this week (Week ${i + 1})`;
  
        weekCard.appendChild(weekNumber);
        weekCard.appendChild(reflectionArea);
        weeksContainer.appendChild(weekCard);
      }
    }
  
    // Function to calculate the current week based on the selected date
    function scrollToSelectedWeek() {
      const selectedDate = new Date(datePicker.value);
      if (selectedDate) {
        const diffInTime = selectedDate - startDate;
        const selectedWeekIndex = Math.floor(diffInTime / (1000 * 3600 * 24 * 7));  // Convert time difference to weeks
        
        if (selectedWeekIndex >= 0 && selectedWeekIndex < 260) {
          const targetWeek = document.getElementById(`week-${selectedWeekIndex + 1}`);
          if (targetWeek) {
            targetWeek.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }
  
    // Event listener for date selection
    datePicker.addEventListener('change', scrollToSelectedWeek);
  
    // Initial setup
    generateWeeks();
    datePicker.value = new Date().toISOString().split('T')[0];  // Default to today's date
    scrollToSelectedWeek();
  });
  