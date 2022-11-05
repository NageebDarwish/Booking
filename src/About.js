import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

export default function About() {
  return (
    <div>
      <Header />
      <Landing />
      <div className="wide-father">
        <div className="Services text-center d-column align-items-center pb-lg-5">
          <h3 className="fw-bold pt-5 pt-lg-5">About Us</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-lg-5 mt-4">
              <div className="card card-about">
                <div className="card-body">
                  <h5 className="card-title mb-3 p-3 fw-bold text-center">
                    Our Business Travel Management
                  </h5>
                  <p className="card-text">
                    More than 100 corporate clients in portfolio. <br />
                    Bravoo specializes in corporate travel. Sales to corporate
                    clients generate circa 85% of the agency's overall income.
                    We are the main supplier of corporate travel services for
                    more than 150 corporate clients (and growing) among which
                    some of the most important Iraqi and multinational
                    corporations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-lg-5 mt-4">
              <div className="card card-about">
                <div className="card-body">
                  <h5 className="card-title mb-3 p-3 fw-bold text-center">
                    What is Bravo?
                  </h5>
                  <p className="card-text">
                    It is a newly-designed system which provides B2B-B2C-B2E.{" "}
                    <br />
                    It comprises all the technological modern features in
                    developing the tourist sciences and used air booking, hotel
                    booking and tourist programs.
                    <br />
                    Many experts have been employed in Bravo from all the five
                    continents to help in the way we flourish the luxury for the
                    Iraqi tourist.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-lg-5 card-about-parent mt-4">
              <div className="card card-about">
                <div className="card-body pb-5 line-about-card">
                  <h5 className="card-title mb-3 p-3 fw-bold text-center">
                    Why Bravo?
                  </h5>
                  <p className="card-text">
                    • Bravo works with the largest companies of hotel booking.
                    1.500.000 hotels in addition to 5000 hotels through direst
                    contracts with Bravo.
                    <br />
                    • Provide annual tourist programs.
                    <br />• Provide the White Label platform using the name of
                    the company to increase the sales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
