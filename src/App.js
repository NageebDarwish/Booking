import React, { lazy, Suspense, useState } from "react";

import Loading from "./components/Loading";
import Parteners from "./Parteners";
import Modal from "./components/Modal";
import { useEffect } from "react";
const Header = lazy(() => import("./components/Header"));
const Latest = lazy(() => import("./LatestServices"));
const Benfits = lazy(() => import("./Benfits"));
const Services = lazy(() => import("./Services"));
const Footer = lazy(() => import("./components/Footer"));

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
