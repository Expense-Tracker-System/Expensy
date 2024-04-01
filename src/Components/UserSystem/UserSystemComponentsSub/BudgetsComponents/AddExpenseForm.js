const AddExpenseForm = () => {
  return (
    <div className="form-wrapper">
      <h2 className="h3">Add New Expense</h2>
      <div className="expense-inputs">
        <div className="grid-xs">
          <label htmlFor="newExpense">Expense Name</label>
          <input
            type="text"
            name="newExpense"
            id="newExpense"
            placeholder="e.g. ,Coffee"
            required
          />
          <div className="grid-xs">
            <label htmlFor="newExpenseAmount">Amount</label>
            <input
              type="number"
              step="0.01"
              inputMode="decimal"
              name="newExpenseAmount"
              id="newExpenseAmount"
              placeholder="e.g. , $50"
              required
            />
          </div>
          <div className="grid-xs">
            <label htmlFor="newExpenseAmount">Budget Name</label>
            <input
              type="number"
              name="newExpenseAmount"
              id="newExpenseAmount"
              placeholder=""
              required
            />
          </div>
          <button type="submit" className="btn btn--dark">
            <span>Add Expense</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddExpenseForm;
