import { Form } from "react-router-dom";
import "./Contact.css";

/* ========= ACTION FUNCTION ========= */

export const contactData = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    console.log("Form Data :", data);

    return null;
  } catch (error) {
    console.log(error.message);
  }
};

/* ========= COMPONENT ========= */

export const Contact = () => {
  return (
    <section className="contact-section">

      <h2 className="section-common--heading">
        Contact Us
      </h2>

      <p className="section-common--subheading">
        Get in touch with us. We are always here to help you.
      </p>

      <div className="section-contact">

        <div className="contact-content">

          {/* ✅ action removed (best practice) */}
          <Form method="POST">

            <div className="form-grid">

              <div className="form-control">
                <label htmlFor="username">
                  Full Name
                </label>

                <input
                  type="text"
                  name="username"
                  id="username"
                  required
                  autoComplete="off"
                  placeholder="Enter full name"
                />
              </div>

              <div className="form-control">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  autoComplete="off"
                  placeholder="abc@email.com"
                />
              </div>

            </div>

            <div className="form-control">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                name="message"
                id="message"
                rows="8"
                placeholder="We are always here to help you..."
              ></textarea>
            </div>

            <div className="btn-area">
              <button
                type="submit"
                className="contact-btn"
              >
                Send Message
              </button>
            </div>

          </Form>

        </div>

      </div>

    </section>
  );
};