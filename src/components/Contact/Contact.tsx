import NavBar from "../NavBar/NavBar";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <NavBar />
      <h5>Contact</h5>
      <div>
        Thank you for your interest in reaching out to us.
        <br /> Whether you have questions, ideas to share or need assistance,
        we're here to help.
        <br /> Please direct your inquiries to the appropriate email address
        listed below for prompt assistance:
      </div>
      <h5>General Inquiries and Ideas Submission: </h5>
      <div>
        For general inquiries or if you have innovative ideas you'd like to
        share with us, please email us at EDC Workforce
        edc.workforce@edenred.com
        <br /> We welcome your suggestions and feedback.
      </div>
      <h5>Human Resources</h5>
      <div>
        If you wish to reach out to your HR business partner please contact our
        HR department at EDC HR hr.edc@edenred.com
      </div>
      <h5>Report Bugs and Technical Issues: </h5>
      <div>
        Encountered a bug or technical issue while using our website or
        services? <br /> Please let us know by emailing EDC Workforce
        edc.workforce@edenred.com <br /> Your detailed reports help us improve
        our platform for everyone.
        <br /> We strive to respond to all inquiries promptly.
      </div>
    </>
  );
};

export default Contact;
