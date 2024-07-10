import React from "react";
import "./Contact.css";
import images from "../../constants/images";
import { Formik } from "formik";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = (values, { setSubmitting }) => {
    emailjs
      .send(
        "service_8tle0so",
        "template_muy7p2u",
        {
          to_name: "gestuslidemaster123@outlook.com",
          from_name: values.name,
          message: values.address,
          reply_to: values.email,
          from_email: values.email,
        },
        "UAqRFqumX00HRxzhW"
      )
      .then((response) => {
        alert("Email sent successfully!");
        // console.log('SUCCESS!', response.status, response.text);
        setSubmitting(false);
      })
      .catch((error) => {
        alert("Failed to send email. Please try again later.");
        console.error("FAILED...", error);
        setSubmitting(false);
      });
  };

  return (
    <section className="contact section-p-top bg-black" id="contact">
      <div className="container">
        <div className="contact-content grid text-center">
          <div className="contact-left">
            <div className="section-t">
              <h3>Get in Touch</h3>
              <p className="text">Interested in our project? Let's Connect</p>
            </div>

            <Formik
              initialValues={{ name: "", email: "", address: "" }}
              validate={(values) => {
                const errors = {};

                if (!values.name) {
                  errors.name = "Name is required";
                } else if (!/^[A-Za-z\s]*$/.test(values.name)) {
                  errors.name = "Invalid name format";
                }

                if (!values.email) {
                  errors.email = "Email is required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }

                if (!values.address) {
                  errors.address = "Address is required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                sendEmail(values, { setSubmitting });
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-elem">
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className="form-control"
                      placeholder="Enter your name"
                    />
                    <span className="form-control-text">
                      {errors.name && touched.name && errors.name}
                    </span>
                  </div>

                  <div className="form-elem">
                    <input
                      type="text"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="form-control"
                      placeholder="abc123@gmail.com"
                    />
                    <span className="form-control-text">
                      {errors.email && touched.email && errors.email}
                    </span>
                  </div>

                  <div className="form-elem">
                    <input
                      type="text"
                      name="address"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                      className="form-control"
                      placeholder="Type your message..."
                    />
                    <span className="form-control-text">
                      {errors.address && touched.address && errors.address}
                    </span>
                  </div>

                  <div className="flex flex-start">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="submit-btn"
                    >
                      contact us
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>

          <div className="contact-right">
            <img src={images.Phone} alt="" className="bouncing-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
