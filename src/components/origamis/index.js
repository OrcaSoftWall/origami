import React from "react"
import styles from "./index.module.css"
import Origam from "../origam"
import getOrigami from "../../utils/origami"
import { useState, useCallback, useMemo } from "react"
import { useEffect } from "react"

const Origamis = (props) => {
  const [origamis, setOrigamis] = useState([])

  const getOrigamis = useCallback(async () => {
    const origamis = await getOrigami(props.length, props.user)
    // const origamis = await getOrigami(props.length)
    setOrigamis(origamis)
  }, [props.length, props.user])

  const renderOrigamis = useMemo(() => {
    return (
      origamis.map((origam, index) => {
        return (
          <Origam key={origam._id} index={index} {...origam} />
        )
      })
    )
  }, [origamis])

  useEffect(() => {
    getOrigamis()
  }, [props.updatedOrigami, getOrigamis])

  return (
    <div className={styles["origamis-wrapper"]}>
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
