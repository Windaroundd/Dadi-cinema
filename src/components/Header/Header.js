import React from "react";
import { NavLink } from "react-router-dom";
import "./headerStyle.css";

export default function Header() {
  return (
    <header>
      <div className="container text-white ">
        <div className="top-header flex justify-end items-center text-gray-500 py-3">
          <i className="fa fa-map-marker-alt" />
          <div className="ml-2 mr-2 ">Destination</div>
          <i className="fa fa-chevron-down" />
          <div className="top-login ml-5 pl-5 border-l-2 border-gray-500">
            <NavLink
              to="/login"
              className="leading-6 rounded-md bg-red-500 text-white py-1 px-3 mr-1"
            >
              Login
            </NavLink>
          </div>
          <div className="top-share ">
            <NavLink
              to="https://www.facebook.com/dadicinema"
              target="_blank"
              className="fab fa-facebook-square fa-xl ml-4 mr-2 hover:text-red-500  "
            ></NavLink>
            <NavLink
              to="https://www.instagram.com/dadicinema_my/"
              target="_blank"
              className="fab fa-instagram fa-xl hover:text-red-500 "
            ></NavLink>
          </div>
        </div>
        <div className="bot-header flex justify-between items-center pb-2">
          <div className="header-logo">
            <NavLink to="/">
              <img src="https://i.ibb.co/HDLWq3q/logo.png" alt="" />
            </NavLink>
          </div>
          <nav className="">
            <ul className="font-bold flex flex-row ">
              <li>
                <NavLink
                  className="py-4 text-lg hover:border-b-2 hover:text-red-500 border-red-500"
                  to="/movies"
                >
                  Movies
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="py-4 text-lg hover:border-b-2 hover:text-red-500 border-red-500"
                  to="/food&drink"
                >
                  Food & Beverage
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="py-4 text-lg hover:border-b-2 hover:text-red-500 border-red-500"
                  to="/experience"
                >
                  Experiences
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="py-4 text-lg hover:border-b-2 hover:text-red-500 border-red-500"
                  to="/activity"
                >
                  Promotions
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="py-4 text-lg hover:border-b-2 hover:text-red-500 border-red-500"
                  to="/event"
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="py-4 text-lg text-yellow-500 hover:border-b-2 hover:text-yellow-500 border-yellow-500"
                  to="U"
                >
                  U+
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
