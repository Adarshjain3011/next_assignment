
import React from "react";

interface props {

    title:string;
    desc:string;
}

export default function  HeadingText({title,desc}:props){

    return(

        <div className="flex flex-col gap-1">

            <h2 className="text-2xl font-bold text-black">{title}</h2>

            <p className="text-slate-600 text-sm">{desc}</p>

        </div>

    )
}



