import Animation from "../Animation/Animation";
import NavBar from "../NavBar/NavBar";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <NavBar />
      <Animation />
      <div className="contact-container">
        <h5>Contact</h5>
        <div>
          Thank you for your interest in reaching out to us.
          <br /> Whether you have questions, ideas to share or need assistance,
          we're here to help.
          <br /> Please direct your inquiries to the appropriate email address
          listed below for prompt assistance:
        </div>
        <br />
        <h5>General Inquiries and Ideas Submission: </h5>
        <div>
          For general inquiries or if you have innovative ideas you'd like to
          share with us, please email us at EDC Workforce{" "}
          <a href="mailto:edc.workforce@edenred.com">
            edc.workforce@edenred.com
          </a>
          <br /> We welcome your suggestions and feedback.
        </div>
        <br />
        <h5>Human Resources</h5>
        <div>
          If you wish to reach out to your HR business partner please contact
          our HR department at EDC HR{" "}
          <a href="mailto:hr.edc@edenred.com">hr.edc@edenred.com</a>
        </div>
        <br />
        <h5>Report Bugs and Technical Issues: </h5>
        <div>
          Encountered a bug or technical issue while using our website or
          services? <br /> Please let us know by emailing EDC Workforce{" "}
          <a href="mailto:edc.workforce@edenred.com ">
            edc.workforce@edenred.com{" "}
          </a>
          <br /> Your detailed reports help us improve our platform for
          everyone.
          <br /> We strive to respond to all inquiries promptly.
        </div>
      </div>
    </>
  );
};

export default Contact;
