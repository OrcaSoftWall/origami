import React from 'react';
import SubmitButton from '../button/submit-button';
import styles from "./index.module.css"

const Pagination = ({ origamisCount, currentPage, setCurrentPage, itemsPerPage, setItemsPerPage, totalPages, handlePrevPage, handleNextPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <SubmitButton className="page-link" onClick={handlePrevPage} title="Previous" />
        </li>
        {pageNumbers.map(pageNumber => (
          <li key={pageNumber} className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}>
            <SubmitButton className="page-link" onClick={() => setCurrentPage(pageNumber)} title= {pageNumber}/>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <SubmitButton className="page-link" onClick={handleNextPage} title="Next"/>
        </li>
      </ul>
      <div className={styles["form-group"]}>
        <label htmlFor="items-per-page">Items per page:</label>
        <select id="items-per-page" className="form-control" value={itemsPerPage} onChange={(event) => setItemsPerPage(parseInt(event.target.value))}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    </nav>
  );
};

export default Pagination;







// const Pagination = (props) => {

//   return (
//     <div>
//       <h2>Origamis ({props.origamisCount})</h2>
//       <div>
//         <button disabled={props.currentPage === 1} onClick={props.handlePrevPage}>
//           Previous
//         </button>
//         <span>{props.currentPage}</span>
//         <button disabled={props.currentPage === props.totalPages} onClick={props.handleNextPage}>
//           Next
//         </button>
//       </div>
//       <div>
//         <span>Items per page:   </span>
//         <select value={props.itemsPerPage} onChange={(event) => { props.setItemsPerPage(event.target.value); props.setCurrentPage(1) }}>
//           <option value={3}>3</option>
//           <option value={5}>5</option>
//           <option value={10}>10</option>
//           <option value={props.origamisCount}> All </option>
//         </select>
//         {/* <span onClick={() => setItemsPerPage(5)}>5</span>
//         <span> | </span>
//         <span onClick={() => setItemsPerPage(10)}>10</span>
//         <span> | </span>
//         <span onClick={() => {setItemsPerPage(origamisCount); setCurrentPage(1)}}>All</span> */}
//       </div>
//     </div>
//   )
// }

// export default Pagination;
