import { useEffect, useState } from 'react';
import { useExpenses,useActualPage, useNumberOfItems, useNumberOfPages, useWeatherActions } from '../stores/expenses';
const HomePage = () => {
  const expenses = useExpenses();
  
  return (
    <div>
      <h1>Expenses</h1>
      
    </div>
  );
};

export default HomePage;