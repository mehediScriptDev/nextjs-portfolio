import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen flex gap-y-3 flex-col justify-center items-center">
      <h2 className="text-3xl font-bold">Not Found</h2>
      <p className="text-lg font-semibold">Could not find requested resource</p>
      <Link className="btn bg-amber-500 text-black" href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
