
const Pagination = (props) => {

  return (
    <div>
      <h2>Origamis ({props.origamisCount})</h2>
      <div>
        <button disabled={props.currentPage === 1} onClick={props.handlePrevPage}>
          Previous
        </button>
        <span>{props.currentPage}</span>
        <button disabled={props.currentPage === props.totalPages} onClick={props.handleNextPage}>
          Next
        </button>
      </div>
      <div>
        <span>Items per page:   </span>
        <select value={props.itemsPerPage} onChange={(event) => { props.setItemsPerPage(event.target.value); props.setCurrentPage(1) }}>
          <option value={3}>3</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={props.origamisCount}> All </option>
        </select>
        {/* <span onClick={() => setItemsPerPage(5)}>5</span>
        <span> | </span>
        <span onClick={() => setItemsPerPage(10)}>10</span>
        <span> | </span>
        <span onClick={() => {setItemsPerPage(origamisCount); setCurrentPage(1)}}>All</span> */}
      </div>
    </div>
  )
}

export default Pagination;
