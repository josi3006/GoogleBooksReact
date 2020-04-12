import React, { useState, useEffect } from "react";
import axios from "axios";
import savedBox from "../components/savedBoxComponent";

function Saved() {
    const [savedBooks, setSavedBooks] = useState([])


    useEffect(() => {
        loadBooks()
    }, [savedBooks])

    //****************************************************/
    // Calls the API to get all saved books on the table */ 
    //****************************************************/
    loadBooks = () => {
        axios.get('/api/books')
            .then(res => { setSavedBooks(res.data) })
            .catch(err => console.log(err));
    };

    return (
        <div className="container">

            <div className="row">
                <div className="col-md-12">
                    <h3>Saved Books</h3>
                </div>
            </div>


            <div className="row">
                <div className="col-md-12">
                    <savedBox />
                </div>
            </div>
        </div>
    )
}

export default Saved;