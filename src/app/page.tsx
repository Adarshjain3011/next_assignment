
"use client"

import React from "react";

import Link from "next/link";

export default function Home() {

  return (

    <div className="flex justify-center items-center min-h-screen w-screen ">

      <div className="flex gap-3 w-fit">

        <p>
          Home page

        </p>

        <Link href="/RatingAndReviews">

          <button className="text-white">Rating and Reviews </button>

        </Link>

      </div>

    </div>
  );
}



