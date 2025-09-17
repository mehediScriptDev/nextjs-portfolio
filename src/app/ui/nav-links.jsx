"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { MdOutlineMenu } from "react-icons/md";


const NavLinks = () => {
    const pathname = usePathname();
  const links = (
    <>
      <li>
        <Link  className={` ${pathname === '/' ? 'active text-black' : ''}`} href={"/"}>Home</Link>
      </li>
      <li>
        <Link  className={` ${pathname === '/projects' ? 'active text-black' : ''}`} href={"/projects"}>Projects</Link>
      </li>
      <li>
        <Link className={` ${pathname === '/skills' ? 'active text-black' : ''}`} href={"/skills"}>Skills</Link>
      </li>
      <li>
        <Link className={` ${pathname === '/about' ? 'active text-black' : ''}`} href={"/about"}>About</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar w-10/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <MdOutlineMenu className="text-amber-500 text-2xl" />

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
