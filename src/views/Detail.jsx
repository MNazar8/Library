import React, { useEffect } from "react";
import { getDetail } from '../redux/actions'
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Detail () {
    const { id } = useParams();
    const dispatch = useDispatch();
    const bookDetail = useSelector((state) => state.detail);

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id]);

    return (
        <div className=" flex flex-col items-center mt-10">
            <div className=" mt-10 text-center">
                <h4 className=" font-extrabold text-2xl text-sky-950">{bookDetail.title}</h4>
                <h2 className=" text-sky-950 font-semibold mt-1">Author: {bookDetail.author}</h2>
                <h2 className=" text-sky-950 font-semibold mt-1">Publication year: {bookDetail.publication_year}</h2>
            </div>
                        
                    <Link to="/home" className=" mt-4 bg-slate-950 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Back to home</Link>
        </div>
    )
};

export default Detail;