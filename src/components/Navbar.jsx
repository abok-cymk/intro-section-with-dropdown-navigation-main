import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";

const Navbar = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [showCompany, setShowCompany] = useState(false);

  const featuresRef = useRef(null);
  const companyRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        featuresRef.current &&
        !featuresRef.current.contains(event.target) &&
        companyRef.current &&
        !companyRef.current.contains(event.target)
      ) {
        setShowFeatures(false);
        setShowCompany(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Clean up on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center justify-between gap-8">
        <a href="#">
          <img src="/logo.svg" alt="site logo" className="w-20" />
        </a>
        <ul className="hidden lg:flex items-center gap-10 text-sm/6 text-medium-gray font-500">
          {/* FEATURES */}
          <li className="relative" ref={featuresRef}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowFeatures(!showFeatures);
                setShowCompany(false); // Optional: close other dropdown
              }}
              className="flex items-center gap-2 hover:text-almost-black"
            >
              Features
              <img
                src="/icon-arrow-down.svg"
                alt="Chevron icon"
                className={`transition-transform duration-300 ${
                  showFeatures ? "rotate-180" : ""
                }`}
              />
            </a>
            {showFeatures && (
              <ul className="absolute divide-y divide-almost-white rounded shadow bg-white w-32 px-3 py-2 -left-14 top-8 flex flex-col gap-4">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-500"
                  >
                    <img src="/icon-todo.svg" alt="" />
                    Todo List
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-500"
                  >
                    <img src="/icon-calendar.svg" alt="" />
                    Calendar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-500"
                  >
                    <img src="/icon-reminders.svg" alt="" />
                    Reminders
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-500"
                  >
                    <img src="/icon-planning.svg" alt="" />
                    Planning
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* COMPANY */}
          <li className="relative" ref={companyRef}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowCompany(!showCompany);
                setShowFeatures(false); // Optional: close other dropdown
              }}
              className="flex items-center gap-2 hover:text-almost-black"
            >
              Company
              <img
                src="/icon-arrow-down.svg"
                alt="Chevron icon"
                className={`transition-transform duration-300 ${
                  showCompany ? "rotate-180" : ""
                }`}
              />
            </a>
            {showCompany && (
              <ul className="absolute shadow divide-y divide-almost-white rounded bg-white w-32 px-3 py-2 -left-4 top-8 flex flex-col gap-4">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-500"
                  >
                    History
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-500"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-sm font-500"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#" className="hover:text-almost-black">
              Careers
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-almost-black">
              About
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <Button
          text="Login"
          className="border-0 cursor-pointer text-sm text-medium-gray hover:text-almost-black hover:font-500"
        />
        <Button
          text="Register"
          className="border-[1.4px] border-medium-gray hover:border-almost-black hover:border-[1.5px] cursor-pointer px-4 text-sm/6 text-medium-gray hover:text-almost-black py-1 hover:font-500"
        />
      </div>
    </nav>
  );
};

export default Navbar;
