"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


const NavLinks = () => {
    const pathname = usePathname();
  const links = (
    <>
      <li>
        <Link  className={`link ${pathname === '/' ? 'active' : ''}`} href={"/"}>Home</Link>
      </li>
      <li>
        <Link  className={`link ${pathname === '/projects' ? 'active' : ''}`} href={"/projects"}>Projects</Link>
      </li>
      <li>
        <Link className={`link ${pathname === '/skills' ? 'active' : ''}`} href={"/skills"}>Skills</Link>
      </li>
      <li>
        <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href={"/about"}>About</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar w-10/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-amber-500 text-xl lg:text-3xl lg:font-bold ">
            {"<MEHEDI/>"}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
         <button className="btn bg-amber-500 text-black">
            Login
         </button>
        </div>
      </div>
    </div>
  );
};

export default NavLinks;
