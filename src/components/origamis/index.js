import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Pagination from '../pagination';
import styles from "./index.module.css"
import Origam from "../origam"
import getOrigami from "../../utils/origami"


const Origamis = (props) => {
  const [origamis, setOrigamis] = useState([]);

  const getOrigamis = useCallback(async () => {
    const origamis = await getOrigami(props.length, props.user);
    setOrigamis(origamis);
  }, [props.length, props.user]);

  useEffect(() => {
    getOrigamis();
  }, [props.updatedOrigami, getOrigamis]);

  const renderOrigamis = (startIndex, endIndex) => {
    return origamis.slice(startIndex, endIndex).map((origam, index) => {
      return <Origam key={origam._id} startIndex={startIndex} index={index} {...origam} />;
    });
  };

  const origamisCount = origamis.length;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const totalPages = Math.ceil(origamisCount / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePrevPage = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

console.log(itemsPerPage > origamisCount, itemsPerPage, origamisCount)

  return (
    <div className={styles["origamis-wrapper"]}>
      {origamisCount > itemsPerPage &&
      <Pagination
        origamisCount={origamisCount}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />}
      {renderOrigamis(startIndex, endIndex)}
    </div>
  );
};

export default Origamis



// import React from "react"
// import styles from "./index.module.css"
// import Origam from "../origam"
// import getOrigami from "../../utils/origami"
// import { useState, useCallback, useMemo } from "react"
// import { useEffect } from "react"
// import Pagination from "../pagination"

// const Origamis = (props) => {
//   const [origamis, setOrigamis] = useState([])

//   const getOrigamis = useCallback(async () => {
//     const origamis = await getOrigami(props.length, props.user)
//     setOrigamis(origamis)
//   }, [props.length, props.user])

//   const origamisCount = useMemo(() => {
//     return origamis.length;
//   }, [origamis]);
//   //
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(3);
//   const handlePrevPage = () => {
//     setCurrentPage(currentPage => currentPage - 1);
//   };
//   const handleNextPage = () => {
//     setCurrentPage(currentPage => currentPage + 1);
//   };
//   const totalPages = Math.ceil(origamisCount / itemsPerPage);
//   //
//   const renderOrigamis = useMemo(() => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     return (
//       origamis.slice(startIndex, endIndex).map((origam, index) => {
//         return (
//           <Origam key={origam._id} startIndex={startIndex} index={index} {...origam} />
//         )
//       })
//     )
//   }, [origamis, currentPage, itemsPerPage])

//   useEffect(() => {
//     getOrigamis()
//   }, [props.updatedOrigami, getOrigamis])

//   return (
//     <div className={styles["origamis-wrapper"]}>
//       <Pagination origamisCount={origamisCount} currentPage={currentPage}
//       setCurrentPage={setCurrentPage} setItemsPerPage={setItemsPerPage}
//       totalPages = {totalPages} handlePrevPage={handlePrevPage}
//       handleNextPage = {handleNextPage} />
//       {renderOrigamis}
//     </div>
//   )
// }

// export default Origamis