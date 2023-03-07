import React from "react"
import styles from "./index.module.css"
import Origam from "../origam"
import getOrigami from "../../utils/origami"
import { useState, useCallback, useMemo } from "react"
import { useEffect } from "react"
import Pagination from "../pagination"

const Origamis = (props) => {
  const [origamis, setOrigamis] = useState([])

  const getOrigamis = useCallback(async () => {
    const origamis = await getOrigami(props.length, props.user)
    setOrigamis(origamis)
  }, [props.length, props.user])

  const origamisCount = useMemo(() => {
    return origamis.length;
  }, [origamis]);
  //
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const handlePrevPage = () => {
    setCurrentPage(currentPage => currentPage - 1);
  };
  const handleNextPage = () => {
    setCurrentPage(currentPage => currentPage + 1);
  };
  const totalPages = Math.ceil(origamisCount / itemsPerPage);
  //
  const renderOrigamis = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return (
      origamis.slice(startIndex, endIndex).map((origam, index) => {
        return (
          <Origam key={origam._id} startIndex={startIndex} index={index} {...origam} />
        )
      })
    )
  }, [origamis, currentPage, itemsPerPage])

  useEffect(() => {
    getOrigamis()
  }, [props.updatedOrigami, getOrigamis])

  return (
    <div className={styles["origamis-wrapper"]}>
      <Pagination origamisCount={origamisCount} currentPage={currentPage} 
      setCurrentPage={setCurrentPage} setItemsPerPage={setItemsPerPage}
      totalPages = {totalPages} handlePrevPage={handlePrevPage} 
      handleNextPage = {handleNextPage} />
      {renderOrigamis}
    </div>
  )
}

// class Origamis extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       origamis: []
//     }
//   }

//   getOrigamis = async () => {
//     const { length } = this.props
//     const promise = await fetch(`http://localhost:9999/api/origami?length=${length}`)
//     const origamis = await promise.json()
//     this.setState({ origamis })
//   }

//   renderOrigamis() {
//     const { origamis } = this.state
//     return (
//       origamis.map((origam, index) => {
//         return (
//           <Origam key={origam._id} index={index} {...origam} />
//         )
//       })
//     )
//   }

//   componentDidMount() {
//     this.getOrigamis()
//   }

//   render() {
//     return (
//       <div className={styles["origamis-wrapper"]}>
//         {this.renderOrigamis()}
//       </div>
//     )
//   }

// }

export default Origamis;
