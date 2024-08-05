import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { logo } from "../material.jsx";
import $ from 'jquery'


export default function Navbar() {

  useEffect(() => {
    $(document).ready(function () {

      $('#btn').click(function () {
        $('#collpase').slideDown()
      })


    }, [])


  })

  return (
    <div>
      <nav className=" grid grid-cols-2 md:flex  justify-between items-center px-10 py-5 lg:px-10 lg:py-5 ">
        <Link to="/" className="">
          <img src={logo} alt="...." className="w-32 md:w-28 sm:w-40 lg:w-40 h-auto" />
        </Link>
        <button id="btn" className=" md:hidden  text-center shadow-2xl  w-12 py-2  sm:w-16  ml-auto rounded-md bg-slate-200">
          <span className="text-xl ">
            <i class="fa-solid fa-bars"></i>

          </span>
        </button>
        <div id="collpase" className=" hidden  md:flex">
          <ul className=" text-white  capitalize md:flex md:flex-wrap  md:gap-4 lg:gap-8 my-3 md:my-0  w-full  ">
            <li className="py-2">
              <LinkCompon name="home" to="/" />
            </li>
            <li className="py-2">
              <LinkCompon name="about" />
            </li>
            <li className="py-2">
              <LinkCompon name="games"  to="/spical"/>
            </li>
            <li className="py-2">
              <LinkCompon name="contact" to="/contact" />
            </li>
            <li className="py-2">
              <LinkCompon name="account" />
            </li>



          </ul>
        </div>
      </nav>
    </div>
  );
}

function LinkCompon(props) {
  return (
    <div>
      <Link
        to={props.to}
        className="text-xl  lg:text-2xl hover:border-b-2 transition-all border-b-white"
      >
        {props.name}
      </Link>
    </div>
  )
}