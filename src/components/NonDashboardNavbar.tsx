"use client";
import React, { useEffect, useRef, useState } from "react";

const NonDashboardNavbar = () => {
    const [count, setCount] = useState(0);
    const inputref = useRef(0);
    const inputRef = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [count, inputRef]);


    return (
        <div className=" w-full flex justify-center gap-10 flex-col items-center">
            <div className=" text-6xl">Count : {count} </div>
            <button
                className=" bg-black text-white-50 p-10 w-60"
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                increament
            </button>
            <button
                className=" bg-black text-white-50 p-10 w-60"
                onClick={() => {
                    setCount(count - 1);
                    inputref.current += 1;
                    console.log(inputref);
                }}
            >
                decreament
            </button>

            <input ref={inputRef} type="text" placeholder="Focus Me !" />
            <button className=" bg-black text-white-50 p-10 w-60">Focus Input</button>
        </div>
    );
};

export default NonDashboardNavbar;
