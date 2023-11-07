import { TitleComponents } from "../../ReusableComponents/TitleComponents";
import "./contact.scss";

function Contact() {
  return (
    <div id="contact-page" className="contact-me-section">
      <div className="form-div">
        <TitleComponents titleText={"Contact Me"} />
        <p className="contact-me-para">
          {`Got any questions for me? Then feel free to contact me. I'll reach out
        as soon as possible`}
        </p>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Contact;
