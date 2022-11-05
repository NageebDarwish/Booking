import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <Header />
      <div
        className="newUser text-center d-flex mt-5 justify-content-center"
        style={{ height: "100vh", alignItems: "center" }}
      >
        <p style={{ fontSize: "40px", color: "gray" }}>Check Your Email</p>
      </div>
    </>
  );
}
