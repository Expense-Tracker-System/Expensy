import React, { useState }from "react";
import "../../../../Styles/UserStyle/SubComponentsStyle/NotificationsStyle/Notifications.css";
import "../../../../Styles/UserStyle/MainComponentsStyle/TopSectionMain.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
function Notifications() {

    const [notification, setNotification] = useState(true);

  const handleSave = () => {
    // save the changes to the server or local storage
    alert('Changes saved');
  };

  const handleCancel = () => {
    // discard the changes and go back to the previous page
    window.history.back();
  };
  return (
    <div className="notifications-container w-100">
      <div className="row">
        <div className="col top-section-main py-3">
          <h1
            className="top-section-main-title px-3"
            style={{ marginLeft: "500px" }}
          >
            Notifications
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col notification-wrapper">
          <div >
            <Container className="mt-5">
              <Row>
                <Col sm={4} className="mx-auto">
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search Notification"
                      className="me-4 rounded-pill"
                      aria-label="Search"
                    />
                    <Button className="rounded-pill" variant="outline-primary">
                      Search
                    </Button>

                    
                  </Form>
                </Col>
              </Row>

            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
