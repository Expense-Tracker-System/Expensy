import React, { useState } from "react";
import "../../../../Styles/UserStyle/SubComponentsStyle/ReportStyle/Report.css";
import "../../../../Styles/UserStyle/MainComponentsStyle/TopSectionMain.css";
import SideBar from "../../UserSystemComponentsMain/UserSideBar";

function Report() {
  const [isOpen, setIsOpen] = useState(true);
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
          className="report-container w-100"
          style={{ marginLeft: isOpen ? "250px" : "50px", width: "80%" }}
        >
          <div className="row">
            <div className="col top-section-main py-3">
              <h1 className="top-section-main-title px-3">Report</h1>
            </div>
          </div>
          <div className="row">
            <div className="col report-wrapper">
              <div className="">
                <h1>This is Report</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Report;
