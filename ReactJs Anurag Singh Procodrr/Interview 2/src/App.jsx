// * Lecture video link : https://youtu.be/MPY-SU1VzRI?si=_NOgqZVvgJfS2WEI

import './App.css';
import { useReducer, useState } from 'react';
import { useRef } from 'react';


// export default function ClickCounter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => {
//         setCount(count + 1);
//         setCount(count + 1);
//         console.log(count);
//       }}>
//         Increment
//       </button>
//     </div>
//   );
// }

// TODO : when i click on increment button then count will be 1 in frontend side but if i see in console it will be 0 why ? 

// * Ans :- because of The console log executes before the actual state, That's why you see the old value in the console and the new value in the UI.

// ---------------------------------------------------------------------------

// TODO : if i duplicate the setCount then what happen in forntend side and in console 
// * Ans :- nothing change it will same as before 

// ---------------------------------------------------------------------------

// export default function ClickCounter() {
//   const [count, setCount] = useState(0);
//   const timeRef = useRef();

//   const startInterval = () => {
//     if (!timeRef.current) {
//       timeRef.current = setInterval(() => {
//         setCount(count + 1);
//         console.log(count);
//       }, 1000);
//     }
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button
//         onClick={startInterval}
//       >
//         Increment
//       </button>
//     </div >
//   );
// }

// ---------------------------------------------------------------------------

// TODO : correction in above code 

// export default function ClickCounter() {
//   const [count, setCount] = useState(0);
//   const timeRef = useRef();

//   const startInterval = () => {
//     if (!timeRef.current) {
//       timeRef.current = setInterval(() => {
//         setCount((prev) => prev + 1);
//         console.log(count);
//       }, 1000);
//     }
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button
//         onClick={startInterval}
//       >
//         Increment
//       </button>
//     </div >
//   );
// }

// ---------------------------------------------------------------------------

// TODO : what will be the output 

// export default function ClickCounter() {
//   const countRef = useRef(0);
//   const [countState, setCountState] = useState(0);

//   return (
//     <div>
//       <p>CountRef : {countRef.current}</p>
//       <button onClick={() => countRef.current += 1}>
//         Increment Ref
//       </button>

//       <p>CountState : {countState}</p>

//       <button onClick={() => setCountState(countState + 1)}>
//         Increment State
//       </button>
//     </div>
//   );
// }

// TODO : make a expense tracker having a input field name and input field amount the amount should be added to the total amount and total amount should be displayed on the screen in the form of table 

export default function ExpenseTracker() {
  const [expenseName, setExpenseName] = useState(''); // store the current expense name input
  const [expenseAmount, setExpenseAmount] = useState(''); // stores the current expense amount input
  const [expenses, setExpenses] = useState([]); // stores an array of expense objects

  const handleAddExpense = () => {
    if (expenseName.trim() === "" || isNaN(expenseAmount) || parseFloat(expenseAmount) <= 0) {
      alert("Please enter a valid expense name & positive numeric amount."); // alert the user for invalid input
      return; // stop execution if input is invalid
    }

    // create a new expense object
    const newExpense = {
      id: expenses.length + 1, // generate a simple Id(in a real app, use a UUID or database ID)
      name: expenseName, // store the expense name
      amount: parseFloat(expenseAmount) // store the expense amount (converted to a number)
    };

    // update the expenses array with the new expense
    setExpenses([...expenses, newExpense]); // use the spread operator to create a new array

    // clear the input fields for the next entry
    setExpenseName('');
    setExpenseAmount('');
  };

  const handleDeleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  // function to calculate the total expense amount
  const calculateTotalExpense = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0); // use reduce to sum the amounts
  };

  return (
    <div>
      <h2>Expense Tracker</h2>

      <div>
        <label htmlFor="expenseName">Expense Name : </label>
        <input
          type="text"
          id='expenseName'
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          placeholder='Enter expense name'
          required
        />
      </div>

      <div>
        <label htmlFor="expenseName">Expense Amount : </label>
        <input
          type="number"
          id='expenseAmount'
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(e.target.value)}
          required
        />
      </div>

      <button onClick={handleAddExpense}>Add</button>

      {
        expenses.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Serial No. </th>
                <th>Expense Name </th>
                <th>Expense Amount </th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {
                expenses.map((expense) => (
                  <tr key={expense.id}>
                    <td>{expense.id}</td>
                    <td>{expense.name}</td>
                    <td>{expense.amount}</td>
                    <td>
                      <button onClick={() => handleDeleteExpense(expense.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              }

              <tr>
                <td colSpan="3">Total Expenses : </td>
                <td>{calculateTotalExpense()}</td>
              </tr>
            </tbody>
          </table>
        )
      }
    </div>
  );
}