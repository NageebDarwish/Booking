export default function Footer() {
  return (
    // <!-- Footer -->
    <footer
      className=" text-lg-start text-muted"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div className="png-img">
        <div
          className="container"
          style={{
            backgroundColor: "inherit",
            color: "white",
            border: "none",
          }}
        >
          {/* <!-- Section: Social media --> */}
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom container">
            {/* <!-- Left --> */}
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* <!-- Left --> */}

            {/* <!-- Right --> */}
            <div>
              <a href="https://facebook.com/bravooiq" className="me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="mailto:hello@bravoo.travel" className="me-4">
                <i className="fab fa-google"></i>
              </a>
              <a href="https://instagram.com/bravoo.travel" className="me-4">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            {/* <!-- Right --> */}
          </section>
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Links  --> */}
          <section className="">
            <div className="container text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div className="row mt-3">
                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Content --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>Company name
                  </h6>
                  <p style={{ color: "black" }}>
                    More than 100 corporate clients in portfolio. Booking
                    specializes in corporate travel. Sales to corporate clients
                    generate circa 85% of the agency's overall income
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Pages</h6>
                  <p>
                    <a href="/about">About</a>
                  </p>
                  <p>
                    <a href="/contact">Contact Us</a>
                  </p>
                  <p>
                    <a href="/career">Careers</a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <a
                      href="https://facebook.com/bravooiq"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      <i className="fab fa-facebook-f me-3"></i>{" "}
                      facebook.com/bookingiq
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:hello@bravoo.travel"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      <i className="fab fa-google me-3"></i> hello@bravoo.travel
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://instagram.com/bravoo.travel"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      <i className="fab fa-instagram me-3"></i> bravoo.travel
                    </a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>
          {/* <!-- Section: Links  --> */}
        </div>
      </div>
      {/* <!-- Copyright --> */}
      <div
        className="text-center p-4 footer-t"
        style={{
          width: "100%",
        }}
      >
        BRAVOO © 2022 - All Rights Reserved. Booking is registered trademark of
        Bravoo Holidays (IRAQ) . Powered by
        <a
          className=" fw-bold a-footer"
          href="https://icom-digital.com/"
          target="__blank"
          style={{
            textDecoration: "none",
            marginLeft: "5px",
          }}
        >
          icom-digital.com
        </a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
    // <!-- Footer -->
  );
}
