export default function Footer() {
  return (
    // <!-- Footer -->
    <footer
      className=" text-lg-start text-muted arabic"
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
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom container flex-row-reverse">
            {/* <!-- Left --> */}
            <div className="me-5 d-none d-lg-block">
              <span>تواصل معنا عبر الشبكات الاجتماعية</span>
            </div>
            {/* <!-- Left --> */}

            {/* <!-- Right --> */}
            <div>
              <a
                href="https://facebook.com/bravooiq"
                className="me-4 text-reset"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="mailto:hello@bravoo.travel" className="me-4 text-reset">
                <i className="fab fa-google"></i>
              </a>
              <a
                href="https://instagram.com/bravoo.travel"
                className="me-4 text-reset"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            {/* <!-- Right --> */}
          </section>
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Links  --> */}
          <section className="" dir="rtl">
            <div className="container text-md-end mt-5">
              {/* <!-- Grid row --> */}
              <div className="row mt-3">
                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Content --> */}
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>الشركة
                  </h6>
                  <p style={{ color: "black" }}>
                    أكثر من 100 شركة من عملاء المحفظة. Bravoo متخصص في سفر
                    الشركات. المبيعات للشركات يولد العملاء حوالي 85٪ من الدخل
                    الإجمالي للوكالة
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">الصفحات</h6>
                  <p>
                    <a href="/about">عن الشركة</a>
                  </p>
                  <p>
                    <a href="/contact">تواصل معنا</a>
                  </p>
                  <p>
                    <a href="/career">التوظيف</a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">روابط مفيدة</h6>
                  <p>
                    <a href="/login">تسجيل الدخول</a>
                  </p>
                  <p>
                    <a href="/register">تسجيل</a>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold mb-4">وسائل التواصل</h6>
                  <p>
                    <a
                      href="https://facebook.com/bravooiq"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      <i className="fab fa-facebook-f me-3"></i>{" "}
                      facebook.com/bravooiq
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://facebook.com/bravooiq"
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
        {/* <!-- Copyright --> */}

        {/* <!-- Copyright --> */}
      </div>
      <div className="text-center p-4 footer-t" style={{ width: "100%" }}>
        BRAVOO © 2022 - All Rights Reserved. BRAVOO is registered trademark of
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
    </footer>
    // <!-- Footer -->
  );
}
