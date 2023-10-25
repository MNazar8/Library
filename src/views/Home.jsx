import React from "react";
import Books from "../components/Books";
import BookForm from "../components/BookForm";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className=" flex flex-col items-center h-screen">
            <div className=" flex flex-row justify-between mb-6 mt-4">
                <div className=" flex">
                    <p className=" text-slate-600 font-extrabold text-3xl">Library</p>
                    <p className=" text-sky-950 font-extrabold text-3xl">App</p>
                </div>
                <div className=" absolute w-fit right-3 mt-3">
                    <Link to="/login" className=" bg-slate-950 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2">Login</Link>
                    <Link to="/signup" className=" bg-slate-950 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2">Sign In</Link>
                </div>
            </div>
            <div>

            </div>
            <div className=" py-4 mb-10">
                <BookForm />
            </div>
            <div className=" py-4">
                <Books />
            </div>
        </div>
    )
};

export default Home;