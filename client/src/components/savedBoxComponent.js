import React from "react";
import axios from "axios";


function savedBox(props){
    
    let data=props.books;
   
    function deleteBook(bookInfo){
        axios.delete(`/api/books/${bookInfo._id}`)
             .then(response=>{
                 console.log(`Successful response: ${response}`);
             })
             .catch(error=>{
                 console.log(`Error received: ${error}`);
             })
    }

    return(
        <table className="table">
            <thead>
                <tr>
                    <th className="col col-center" style={{width: "10%"}}>Image</th>
                    <th className="col" style={{width: "20%"}}>Book name</th>
                    <th className="col" style={{width: "15%"}}>Author</th>
                    <th className="col" style={{width: "45%"}}>Synopsis</th>
                    <th className="col col-center" style={{width: "10%"}}>Saved</th>
                    <th className="col col-center" style={{width: "10%"}}>Actions</th>
                </tr>
            </thead>

            <tbody>
                {data.map(book=>{
                    return(
                        <tr key={book._id}>
                            <td data-th="Image" className="align-middle text-center">
                                <img src={book.image} alt="book pic" className="img-responsive"/>
                            </td>
                            <td data-th="Title" className="align-middle">
                                {book.title}
                            </td>
                            <td data-th="Author" className="align-middle">
                                {book.author}
                            </td>
                            <td data-th="Synopsis" className="align-middle">
                                {book.synopsis}
                            </td>
                            <td data-th="Saved" className="align-middle text-center">
                                {book.date.split('T')[0]}
                            </td>
                            <td data-th="actions" className="align-middle text-center">
                                <button className="btn btnDlt" onClick={() => deleteBook(book)}>Delete</button> <br/>
                                <a href={book.link} target="_blank" rel="noopener noreferrer">
                                    <button className="btn btn-info mt-3">View</button>
                                </a>
                            </td>
                        </tr>
                    )
                 })}
            </tbody>
        </table>
    )
}


export default savedBox;