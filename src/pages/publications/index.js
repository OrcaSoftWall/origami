import styles from "./index.module.css"
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import Origamis from '../../components/origamis';
import { Component } from "react";
import UserContext from '../../Context';

const Publications = () => {
  return (
    <PageLayout>
      <Title title="Publications" />
      <Origamis />
    </PageLayout>
  )
}

// class Publications extends Component {
//   static contextType = UserContext

//   render() {
// console.log("       this.context:            ",this.context)
//     return (
//       <PageLayout>
//         <Title title="Publications" />
//         <Origamis />
//       </PageLayout>
//     )
//   }
// }

export default Publications;
