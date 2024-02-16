import React, { useState } from "react";
import "../../../../Styles/UserStyle/SubComponentsStyle/OrganizationStyle/Organization.css";
import "../../../../Styles/UserStyle/MainComponentsStyle/TopSectionMain.css";
import MyCalendar from "../OrganizationComponents/Calender";
import SideBar from "../../UserSystemComponentsMain/UserSideBar";
function Organization() {
  const [isOpen, setIsOpen] = useState(true); // Sidebar is initially open
  return (
    <div>
      <main
        className="col px-4 w-100"
        style={{ marginLeft: isOpen ? "260px " : "62px", width: "110%" }}
      >
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </main>
      <div
        className="userdashboard-container container-fluid  px-0  position-scroll"
        style={{ marginLeft: isOpen ? "250px" : "50px",width:'80%' }}
      >
        <section className="h-100 ">
          <div className="organization-container w-100">
            <div className="row">
              <div className="col top-section-main py-3">
                <h1 className="top-section-main-title px-3">Reminders</h1>
              </div>
            </div>
            <div className="row" style={{padding:"10px"}}>
              <div className="col organization-wrapper" style={{width:'350px !important'}}>
                <MyCalendar />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Organization;
