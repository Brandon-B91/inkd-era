import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";

const Contact = ({ location }) => {
  return (
    <div>
      <Layout>
        <SEO
          title="Inkd era Contact"
          description="Contact page for Ink'd Era"
          pathname={location.pathname}
        ></SEO>
        <div className="full-page text-light">
          <h1>Want to get in touch with us?</h1>
          <h2>Heres how!</h2>
          <p>
            Of course you can always reach out to us on social media or thruough
            our E-mail address. We would love to hear from you for general
            feedback, suggestion, concerns or even to comment on something of
            course for order status as well!
          </p>
          <ul className="contact-ul text-center mt-4">
            <li>
              <a
                href="http://instagram.com/Inkd_era"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram"
              >
                <i className="fab fa-instagram fa-2x text-light"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Inkd_era"
                target="_blank"
                rel="noopener noreferrer"
                className="twitter"
              >
                <i className="fab fa-twitter fa-2x text-light"></i>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/Inkd_era"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook"
              >
                <i className="fab fa-facebook-f fa-2x text-light"></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:customerservice@Inkdera.com"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram"
              >
                <i className="fas fa-envelope fa-2x text-light"></i>
              </a>
            </li>
            <li></li>
          </ul>
          <h4 className="mt-4">
            {" "}
            Something a little more complicated? fill out this form!{" "}
          </h4>
          <form
            name="Contact Form"
            method="POST"
            data-netlify="true"
            action="/Thanks"
            className="contact-form mt-4"
          >
            <input type="hidden" name="form-name" value="Contact Form" />
            <div>
              <label className="mr-3">
                Your Name:<span className="text-danger">&#42;</span>
              </label>
              <input type="name" />
            </div>
            <div>
              <label className="mr-3">
                Your Email:<span className="text-danger">&#42;</span>
              </label>
              <input type="email" name="email" />
            </div>
            <div>
              <label className="mr-4">
                Message:<span className="text-danger">&#42;</span>
              </label>
              <textarea name="message" />
            </div>
            <button
              type="submit"
              className="btn btn-danger mt-3"
              style={{ width: "50%", margin: "0 auto" }}
            >
              Send
            </button>
            <p
              className="mt-2"
              style={{ fontSize: "12px", marginRight: "50%" }}
            >
              {" "}
              <span className="text-danger">&#42; </span> indicates required
            </p>
          </form>

          <p>Please allow 24-48 hours for a response to any inquires made.</p>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
