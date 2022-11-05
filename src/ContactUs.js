import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Countries from "react-select-country";

export default function About() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setcountry] = useState("");
  const [role, setRole] = useState("");
  const [travel, settravel] = useState("");
  const [tour, settour] = useState("");
  const [online, setonline] = useState("");
  const [b2c, setb2c] = useState("");
  const [corporate, setcorporate] = useState("");
  const [agree_recive, setagree_recive] = useState("");
  const [agree_store, setagree_store] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios(
        "https://booking.emkanfinances.net/api/contact/create",
        {
          method: "POST",
          data: {
            first_name: firstName,
            last_name: lastName,
            email: email,
            mobile: mobileNumber,
            company: companyName,
            country: country,
            role: role,
          },
          headers: {
            "content-type": "multipart/form-data",
          },
        }
      );
      if (res.status === 200) {
        window.location.href = "/";
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };
  return (
    <div>
      <Header />
      <div className="wide-father">
        <div className="Services text-center d-column align-items-center pb-lg-5">
          <h3 className="fw-bold pt-5 mt-lg-5">Let's Start a Conversation</h3>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="contact-info col-lg-4 mt-sm-5 mt-md-5 mt-lg-0">
              <h4 className="mb-4">CONTACT INFORMATION</h4>

              <div className="contact-soc">
                <i className="fa-solid fa-envelope"></i> E-mail:
                hello@bravoo.travel
                <br />
                <i className="fa-brands fa-facebook"></i> Facebook:
                https://facebook.com/bravooiq
                <br />
                <i className="fa-brands fa-instagram"></i> Instagram:
                https://instagram.com/bravoo.travel
              </div>
            </div>
            <div className="col-lg-6 " style={{ marginBottom: "2rem" }}>
              <form
                action=""
                className="form-contact mt-sm-5 mt-lg-0 row"
                onSubmit={handleSubmit}
                style={{ color: "var(--yellow-color)" }}
              >
                <div className="mb-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-3">
                  <label for="f-name" className="m-100 mb-1">
                    First Name :
                  </label>
                  <input
                    type="text"
                    id="f-name"
                    onChange={(e) => setfirstName(e.target.value)}
                    value={firstName}
                    required
                    className=" custom-input col-lg-4 w-100 pt-2 pb-2 ps-2"
                    placeholder="First Name...."
                  />
                </div>
                <div className="mb-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <label for="l-name" className="m-100 mb-1">
                    Last Name :
                  </label>
                  <input
                    type="text"
                    id="l-name"
                    onChange={(e) => setlastName(e.target.value)}
                    value={lastName}
                    required
                    className=" custom-input col-lg-4 w-100 pt-2 pb-2 ps-2"
                    placeholder="Last Name...."
                  />
                </div>
                <div className="mb-3 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <label for="email" className="m-100 mb-1">
                    Enter Your Email :
                  </label>
                  <input
                    placeholder="Email...."
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    className=" custom-input col-lg-4 w-100 pt-2 pb-2 ps-2"
                  />
                </div>
                <div className="mb-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <label className="m-100 mb-1 " for="number">
                    Phone Number
                  </label>
                  <input
                    placeholder="Mobile...."
                    type="number"
                    id="number"
                    onChange={(e) => setmobileNumber(e.target.value)}
                    value={mobileNumber}
                    required
                    className=" custom-input col-lg-4 w-100 pt-2 pb-2 ps-2"
                  />
                </div>
                <div className="mb-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <label for="company" className="m-100 mb-1">
                    Company Name
                  </label>
                  <input
                    placeholder="Company Name.... "
                    type="text"
                    id="company"
                    onChange={(e) => setCompanyName(e.target.value)}
                    value={companyName}
                    required
                    className=" custom-input col-lg-4 w-100 pt-2 pb-2 ps-2"
                  />
                </div>
                <div className="mb-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <label for="country" className="m-100 mb-1">
                    Country
                  </label>
                  <Countries
                    name="country"
                    empty=" select country..."
                    onChange={(e) => setcountry(e.target.value)}
                    className=" custom-input col-lg-4 w-100 pt-2 pb-2 ps-2"
                    style={{ color: "gray", fontSize: "13px" }}
                    required
                  />
                </div>
                <div className="mb-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                  <label for="role" className="m-100 mb-1">
                    Role
                  </label>
                  <select
                    className=" custom-input col-lg-4 w-100 pt-2 pb-2 ps-2"
                    onChange={(e) => setRole(e.target.value)}
                    value={role}
                    placeholder="Selcet"
                    style={{ color: "gray", fontSize: "13px" }}
                    required
                  >
                    <option value="" disabled selected>
                      Role in company...
                    </option>
                    <option value={"CEO/Owner"}>CEO/Owner</option>
                    <option value={"VP/Director"}>VP/Director</option>
                    <option value={"CTO/IT Manager"}>CTO/IT Manager</option>
                    <option value={"Business Development Manager"}>
                      Business Development Manager
                    </option>
                    <option value={"Sales Manager"}>Sales Manager</option>
                    <option value={"Marketing Manager"}>
                      Marketing Manager
                    </option>
                    <option value={"Assistant Manager"}>
                      Assistant Manager
                    </option>
                    <option value={"Travel Agent"}>Travel Agent</option>
                    <option value={"External Advisor"}>External Advisor</option>
                  </select>
                </div>
                <div
                  className="col-12 check-boxes"
                  style={{ fontSize: "13px" }}
                >
                  <span className="form-title">Software Type</span>
                  <br />

                  <input
                    className="checkBox"
                    type="checkbox"
                    id="software1"
                    name="software1"
                    value="Travel ERP software"
                    style={{ marginTop: "15px" }}
                  />
                  <label className="checkBoxLabel" for="software1">
                    Travel ERP software
                  </label>
                  <br />

                  <input
                    className="checkBox"
                    type="checkbox"
                    id="software2"
                    name="software2"
                    value="Tour operator solution"
                  />
                  <label className="checkBoxLabel" for="software2">
                    Tour operator solution
                  </label>
                  <br />

                  <input
                    className="checkBox"
                    type="checkbox"
                    id="software3"
                    name="software3"
                    value="Online booking system"
                  />
                  <label className="checkBoxLabel" for="software3">
                    Online booking system
                  </label>
                  <br />

                  <input
                    className="checkBox"
                    type="checkbox"
                    id="software4"
                    name="software4"
                    value="B2C online selling platform"
                  />
                  <label className="checkBoxLabel" for="software4">
                    B2C online selling platform
                  </label>
                  <br />

                  <input
                    className="checkBox"
                    type="checkbox"
                    id="software5"
                    name="software5"
                    value="Corporate Self Booking Tool"
                  />
                  <label className="checkBoxLabel" for="software5">
                    Corporate Self Booking Tool
                  </label>
                  <br />

                  <p className="parag">
                    From time to time, we would like to contact you about our
                    products and services, as well as other content that may be
                    of interest to you. If you consent to us contacting you for
                    this purpose, please tick below to say how you would like us
                    to contact you :
                  </p>

                  <input
                    className="checkBox"
                    type="checkbox"
                    id="agreerecieve"
                    name="agreerecieve"
                    value="I agree to receive other communications from Bravoo"
                  />
                  <label className="checkBoxLabel" for="agreerecieve">
                    I agree to receive other communications from Bravoo.
                  </label>
                  <br />

                  <p className="parag">
                    By clicking submit below, you consent to allow Bravoo to
                    store and process the personal information submitted above
                    to provide you the content requested.
                  </p>

                  <input
                    className="checkBox"
                    type="checkbox"
                    id="agreeallow"
                    name="agreeallow"
                    value="I agree to allow Bravoo to store and process my personal data"
                  />
                  <label className="checkBoxLabel" for="agreeallow">
                    I agree to allow Bravoo to store and process my personal
                    data.
                  </label>
                  <br />

                  <p className="parag">
                    You may unsubscribe from these communications at any time.
                    For more information on how to unsubscribe, our privacy
                    practices, and how we are committed to protecting and
                    respecting your privacy, please review our{" "}
                    <a
                      href="https://bravoo.travel/content/46660411/Bravoo/Privacy-Policy"
                      style={{
                        color: "var(--yellow-color)",
                        textDecoration: "none",
                      }}
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
                <button
                  type="submit"
                  className="mt-3 btn btn-primary col-lg-4 pt-2 pb-2 ps-2"
                  style={{
                    backgroundColor: "#f0ad00",
                    border: "none",
                    width: "50%",
                  }}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
