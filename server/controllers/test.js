// function getLastDateOfNextMonth() {
//     // Get the current date
//     const currentDate = new Date(2024, 1, 31);
  
//     // Calculate the next month
//     const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
  
//     // Move one day back from the first day of the next month to get the last day of the current month
//     const lastDayOfCurrentMonth = new Date(nextMonth - 1);
  
//     // Return the last day of the next month
//     return lastDayOfCurrentMonth;
//   }
  
//   // Example usage
//   const lastDateOfNextMonth = getLastDateOfNextMonth();
//   console.log(lastDateOfNextMonth);

// function getLastDateOfNextMonth() {
//     // Get the current date
//     const currentDate = new Date(2024, 1, 15);
  
//     // Calculate the next month
//     const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 1);
  
//     // Move one day back from the first day of the next month
//     const lastDayOfMonth = new Date(nextMonth - 1);
  
//     // Set the date to the last day of the month
//     lastDayOfMonth.setDate(getDaysInMonth(lastDayOfMonth.getMonth(), lastDayOfMonth.getFullYear()));
  
//     // Return the last day of the next month
//     return lastDayOfMonth;
//   }
  
//   // Helper function to get the number of days in a month
//   function getDaysInMonth(month, year) {
//     return new Date(year, month + 1, 0).getDate();
//   }
  
//   // Example usage
//   const lastDateOfNextMonth = getLastDateOfNextMonth();
//   console.log(lastDateOfNextMonth);
  
function GFG_Fun() {
    let date = new Date();
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 2, 0);
    console.log("First day=" + firstDay)
    console.log("Last day = " + lastDay);
}
GFG_Fun()