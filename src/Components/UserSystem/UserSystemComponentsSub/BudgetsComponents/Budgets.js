import React from "react";
// import {ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import "../../../../Styles/UserStyle/SubComponentsStyle/BudgetStyle/Budgets.css";
import "../../../../Styles/UserStyle/MainComponentsStyle/TopSectionMain.css";
import Nav from "./Nav";
import AddBudgetForm from "./AddBudgetForm";
import AddExpenseForm from "./AddExpenseForm";

function Budgets() {
  return (
    <section className="h-100 w-100">
      <div className="layout">
        <Nav />
        <div className="grid-sm">
          <div className="grid-lg">
            <div className="flex-lg">
              <AddBudgetForm />
              <AddExpenseForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Budgets;
