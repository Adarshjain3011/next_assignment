"use client"
import { useState } from 'react';
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoStarOutline } from "react-icons/io5";
import { RatingData } from '@/constants/RatingConstant';

import HeadingText from './common/HeadingText';

import { ImCross } from "react-icons/im";

import { FaThumbsUp, FaRegThumbsDown } from "react-icons/fa";

import {useRouter} from "next/navigation";

import toast from 'react-hot-toast';


export default function RatingAndReviews() {

    const [click, setClick] = useState(false);

    const router = useRouter();

    const [ratings, setRatings] = useState({

        safety: 0,
        communication: 0,
        recommended: false,

    });

    const [hoverRatings, setHoverRatings] = useState({

        safety: 0,
        communication: 0,
        recommended: 0

    });


    const handleStarClick = (category: any, index: any) => {

        setRatings(prev => ({ ...prev, [category]: index }));

    };


    const handleStarHover = (category: any, index: any) => {

        setHoverRatings(prev => ({ ...prev, [category]: index }));

    };

    const handleStarMouseLeave = (category: any) => {

        setHoverRatings(prev => ({ ...prev, [category]: 0 }));

    };

    const handleSubmit = (e: any) => {

        e.preventDefault();

        toast.success("reviews submitted successfully");

        console.log("rating data ", ratings);

        router.push("/");


    };

    const yesNoToggleHandler = (value: boolean) => {

        setRatings(prev => ({ ...prev, recommended: value }));

    };

    const renderStars = (category: any) => (

        <div className="flex gap-1">

            {[1, 2, 3, 4, 5].map((index) => (
                <div
                    key={index}
                    onClick={() => handleStarClick(category, index)}
                    onMouseEnter={() => handleStarHover(category, index)}
                    onMouseLeave={() => handleStarMouseLeave(category)}
                    className="cursor-pointer"
                >
                    {ratings[category] >= index || hoverRatings[category] >= index ? (

                        <MdOutlineStarPurple500 size={40} className='text-yellow-400' />

                    ) : (

                        <IoStarOutline size={40} className='text-gray-600' />
                    )}
                </div>
            ))}
        </div>

    );


    return (



        <div className="w-full text-white min-h-screen flex justify-center items-center bg-white rounded-lg">

            {

                click ? (

                    <div className='flex flex-col gap-4 p-8 rounded-lg shadow-2xl'>

                        <div className='' onClick={() => {

                            setClick(false)

                        }}>

                            <ImCross className="text-black cursor-pointer"></ImCross>

                        </div>

                        <h1 className="text-black text-2xl font-extrabold ">Leave a Review </h1>

                        <div className='flex flex-col gap-3'>

                            {

                                RatingData.map((data) => (

                                    <div className='flex gap-2 flex-col'>


                                        <HeadingText title={data.title} desc={data.desc}></HeadingText>

                                        {renderStars(`${data.title}`)}


                                    </div>

                                ))

                            }

                            <div className='mt-7'>

                                <HeadingText title={"would you recommended Trausti "} desc={"Lorem ipsum dolor sit amet"}></HeadingText>

                            </div>


                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-2">


                            <div className='flex gap-8'>

                                <div className='flex justify-center items-center gap-2 cursor-pointer' onClick={() => yesNoToggleHandler(true)}>

                                    <FaRegThumbsDown size={40} className='text-slate-600'></FaRegThumbsDown>

                                    <p className='text-black '>No</p>

                                </div>


                                <div className='flex justify-center items-center gap-2 cursor-pointer' onClick={() => yesNoToggleHandler(true)}>

                                    <FaThumbsUp size={40} className='text-green-600'></FaThumbsUp>

                                    <p className='text-green-500'>Yes</p>

                                </div>

                            </div>

                            <button
                                type="submit"
                                className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded-lg mt-3"
                            >
                                Submit Review

                            </button>

                        </form>

                    </div>

                ) : (

                    <div>

                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-purple-200 text-white py-2 px-4 rounded-lg mt-3"
                            onClick={() => {

                                setClick(true);
                            }}
                        >
                            Submit Review

                        </button>
                    </div>

                )
            }

        </div>
    );
}



