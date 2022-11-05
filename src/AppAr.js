import React, { lazy, Suspense } from "react";

import Loading from "./components/Loading";
const HeaderAr = lazy(() => import("./components/HeaderAr"));

const LatestAr = lazy(() => import("./LatestServicesAr"));
const ServicesAr = lazy(() => import("./ServicesAr"));
const PartnerAr = lazy(() => import("./PartnerAr"));
const FooterAr = lazy(() => import("./components/FooterAr"));

export default function App() {
  return (
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
      <div className="father arabic">
        <HeaderAr />

        <LatestAr />
        <ServicesAr />
        <PartnerAr />
        <FooterAr />
      </div>
    </Suspense>
  );
}
