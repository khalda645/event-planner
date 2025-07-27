import React from "react";

//informative help page
function Help() {
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto", lineHeight: "1.6" }}>
      <h2>Help</h2>

      <section>
        <h3>App Navigation</h3>
        <p>As you can see, there is a navigation header at the top of your screen. This will allow you to switch to other pages of this appliation seamlessly, just click the relevant label to see!</p>
      </section>

      <section>
        <h3>Registration</h3>
        <p> To create an account, just input your name, email, username, password. If you have any trouble doing so, please email us at eventmanagementapp@gmail.com </p>
      </section>

      <section>
        <h3>Login</h3>
        <p>
          Once you input your email and password, you should be directed to the site where you can click one of the header links to your desired section. You can view all upcoming events you have registered on the dashboard. If this is blank add an event at the Manage Events page which you can navigate to through the header.</p>
      </section>

      <section>
        <h3>Event Management</h3>
        <p>
          To add an event, simply title it, set a date and input a location, time and description of the event. If your plans fall through, click the delete button to remove the event from your list. It couldn't be more straightforward! </p>
      </section>

      <p style={{ marginTop: "2rem" }}>
       If you have any questions, contact us at <strong>[eventmanagementapp@gmail.com]</strong>
      </p>
    </div>
  );
}

export default Help;
