import React, { useState } from "react";
import { data } from "./Mockdata";
import "../styles/Pagination.css";

function Pagination() {
  // Pagination
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const prevClickHandler = () => {
    if (startIndex > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
    setSortArray(currentItems);
  };

  const nextClickHandler = () => {
    if (startIndex < data.length - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
    setSortArray(currentItems);
  };

  // Sorting array by upvotes/likes
  const [sortArray, setSortArray] = useState(currentItems);

  const sortByShares = () => {
    const tempData = [...sortArray];
    setSortArray(
      tempData.sort((a, b) => {
        return a.shares - b.shares;
      })
    );
    console.log(tempData);
    console.log(sortArray);
  };
  const sortByLikes = () => {
    const tempData = [...sortArray];
    setSortArray(
      tempData.sort((a, b) => {
        return a.likes - b.likes;
      })
    );
    console.log(tempData);
    console.log(sortArray);
  };

  const sortByNames = () => {
    const tempData = [...sortArray];
    setSortArray(tempData.sort());
  };

  const sortByLengthOfNames = () => {
    const tempData = [...sortArray];
    setSortArray(
      tempData.sort((a, b) => {
        return a.name.length - b.name.length;
      })
    );
  };

  return (
    <div className="pagination-container">
      <div className="sort-by-container">
        <div>
          <p>Sort By</p>
        </div>
        <div>
          <button onClick={sortByLikes}>Likes</button>
        </div>
        <div>
          <button onClick={sortByShares}>Shares</button>
        </div>
        <div>
          <button onClick={sortByNames}>Names</button>
        </div>
        <div>
          <button onClick={sortByLengthOfNames}>Length Of Names</button>
        </div>
      </div>

      <table>
        <tr>
          <th>Name</th>
          <th>Likes</th>
          <th>Shares</th>
        </tr>
        {sortArray.map((data) => (
          <tr>
            <td>{data.name}</td>
            <td>{data.likes}</td>
            <td>{data.shares}</td>
          </tr>
        ))}
      </table>
      <span>
        <button onClick={prevClickHandler}>Prev</button>
      </span>
      <span>
        <button onClick={nextClickHandler}>Next</button>
      </span>
    </div>
  );
}

export default Pagination;
