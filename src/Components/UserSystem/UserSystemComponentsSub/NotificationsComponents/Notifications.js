import React, { useState } from "react";
import "../../../../Styles/UserStyle/SubComponentsStyle/NotificationsStyle/Notifications.css";
import "../../../../Styles/UserStyle/MainComponentsStyle/TopSectionMain.css";
import SideBar from "../../UserSystemComponentsMain/UserSideBar";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";
import { Form, useFetcher } from "react-router-dom"

function Notifications() {

    const [isOpen, setIsOpen] = useState(true);

    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === "submitting"
  
    const formRef = useRef();
    const focusRef = useRef();
  
    useEffect(() => {
      if (!isSubmitting) {
        formRef.current.reset()
        focusRef.current.focus()
      }
    }, [isSubmitting])
  return (
    <div>
      <main
        className="col px-4 w-100"
        style={{ marginLeft: isOpen ? "260px " : "62px", width: "110%" }}
      >
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </main>
      <section className="h-100 w-100">
        <div
          className="notifications-container w-100"
          style={{ marginLeft: isOpen ? "250px" : "50px", width: "80%" }}
        >
          <div className="row">
            <div className="col top-section-main py-3">
              <h1 className="top-section-main-title px-3">Notifications</h1>
            </div>
          </div>
          <div className="row">
            <div className="col notification-wrapper">
              <div className="budgets">
              <div className="form-wrapper">
      <h2 className="h3">
        Create budget
      </h2>
      
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="e.g., Groceries"
            required
            ref={focusRef}
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Amount</label>
          <input
            type="number"
            step="0.01"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="e.g., $350"
            required
            inputMode="decimal"
          />
        </div>
        <input type="hidden" name="_action" value="createBudget" />
        <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
          {
            isSubmitting ? <span>Submitting…</span> : (
              <>
                <span>Create budget</span>
                <CurrencyDollarIcon width={20} />
              </>
            )
          }
        </button>
    </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Notifications;
