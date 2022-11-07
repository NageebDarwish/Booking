import React, { lazy, Suspense, useState } from "react";

import Loading from "./components/Loading";
import Parteners from "./PartnerAr";
import Modal from "./components/ModalAr";
import { useEffect } from "react";
const Header = lazy(() => import("./components/HeaderAr"));
const Latest = lazy(() => import("./LatestServicesAr"));
const Benfits = lazy(() => import("./Benfits"));
const Services = lazy(() => import("./ServicesAr"));
const Footer = lazy(() => import("./components/FooterAr"));

export default function App() {
  const [theme, setTheme] = useState(true);
  window.addEventListener("storage", () => {
    setTheme((prev) => !prev);
  });

  return (
    <div className="father">
      <Modal />
      <Suspense
        fallback={
          <div
            style={{
              position: "relative",
              height: "100vh",
            }}
          >
            <Loading />
          </div>
        }
      >
        <Header />
      </Suspense>
      <Suspense
        fallback={
          <div
            style={{
              position: "relative",
              height: "100vh",
            }}
          >
            <Loading />
          </div>
        }
      ></Suspense>

      <Suspense
        fallback={
          <div
            style={{
              position: "relative",
              height: "100vh",
            }}
          >
            <Loading />
          </div>
        }
      >
        <Latest />
      </Suspense>
      <Suspense
        fallback={
          <div
            style={{
              position: "relative",
              height: "100vh",
            }}
          >
            <Loading />
          </div>
        }
      >
        <Benfits />
      </Suspense>
      <Suspense
        fallback={
          <div
            style={{
              position: "relative",
              height: "100vh",
            }}
          >
            <Loading />
          </div>
        }
      >
        <Services />
      </Suspense>
      <Parteners />
      <Suspense
        fallback={
          <div
            style={{
              position: "relative",
              height: "100vh",
            }}
          >
            <Loading />
          </div>
        }
      >
        <Footer />
      </Suspense>
    </div>
  );
}
