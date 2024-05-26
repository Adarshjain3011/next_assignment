import React from "react";

import { FaThumbsUp, FaRegThumbsDown } from "react-icons/fa";

interface props {

    value: boolean;
}

export default function YesNoToggle({ value }: props) {

    return (

        <div>

            {

                value ? (<div className="flex gap-1 justify-center items-baseline  cursor- p-1">

                    <FaThumbsUp className="text-green-500 text-2xl"/>

                    <p className="text-green-500 text-lg font-bold">yes</p>

                </div>) : (<div className="flex gap-1 cursor-pointer justify-center items-baseline p-1">

                    <FaRegThumbsDown className="text-gray-600 text-2xl"/>

                    <p className="text-black text-lg font-bold">No</p>

                </div>)

            }

        </div>
    )
}


