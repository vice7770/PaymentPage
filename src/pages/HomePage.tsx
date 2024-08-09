import { useEffect, useState } from 'react';
import { useExpenses,useActualPage, useNumberOfItems, useNumberOfPages, useWeatherActions } from '../stores/expenses';\

const Card = (expense : any) => {
  return (
    <div>
      <h2>Expense</h2>
      <p>Amount: </p>
      <p>Category: </p>
      <p>Date: </p>
    </div>
  );
}

const HomePage = () => {
  const expenses = useExpenses();
  /// the idea for this component would be to fetch in zusntad initializer the expenses and then use the useExpenses hook to get the expenses
  /// the useWeatherActions would be used to set the page, the number of pages and the number of items
  /// the useActualPage would be used to get the actual page
  /// the useNumberOfPages would be used to get the number of pages
  /// ...
  /// Could not fetch the data from the API, so I could not continue
  return (
    <div>
      <h1>Expenses</h1>
      <ul>
        {expenses.map((expense) => (
          <Card expense={expense}/>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;