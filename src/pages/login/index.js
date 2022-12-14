import styles from './index.module.css';
import Title from '../../components/title';
import SubmitButton from '../../components/button/submit-button';
import PageLayout from '../../components/page-layout';
import Input from '../../components/input';
import { Component, useState, useContext } from "react";
import { useNavigate, useHistory } from "react-router-dom";
import authenticate from '../../utils/authenticate';
import UserContext from '../../Context';

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const context = useContext(UserContext)
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault()
    //console.log(this.context)

    if (username && password) {
      await authenticate('http://localhost:9999/api/user/login',
        { username, password },
        (user) => {
          console.log("-----Logged in!-----")
          context.logIn(user)
          navigate('/')   // history not supported with r-r-d v6
        }, (e) => console.log("Submit Error:  ", e ? e : " Something went wrong with your login!")
      )
    } else console.log("Submit Error: Username or Password do not match!")
  }

  return (
    <PageLayout>
      <form className={styles.container} onSubmit={handleSubmit} >
        <Title title="Login" />
        <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} label="Username" id="username" />
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" id="password" />
        <SubmitButton title="Login" />
      </form>
    </PageLayout>
  )
}

// class LoginPage extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       username: "",
//       password: ""
//     }
//   }

//   static contextType = UserContext

//   handleChange = (event, type) => {
//     const newState = {}
//     newState[type] = event.target.value
//     this.setState(newState)
//   }

//   handleSubmit = async (event) => {
//     event.preventDefault()
//     const { username, password } = this.state

//     //console.log(this.context)

//     if (username && password) {
//       await authenticate('http://localhost:9999/api/user/login',
//         { username, password },
//         (user) => {
//           console.log("-----Logged in!-----")
//           this.context.logIn(user)
//           // this.props.history.push('/')   // history not supported with r-r-d v6
//         }, (e) => console.log("Submit Error:  ", e ? e : " Something went wrong with your login!")
//       )
//     } else console.log("Submit Error: Username or Password do not match!")
//   }

//   render() {
//     const { username, password } = this.state

//     return (
//       <PageLayout>
//         <form className={styles.container} onSubmit={this.handleSubmit} >
//           <Title title="Login" />
//           <Input type="text" value={username} onChange={(e) => this.handleChange(e, "username")} label="Username" id="username" />
//           <Input type="password" value={password} onChange={(e) => this.handleChange(e, "password")} label="Password" id="password" />
//           <SubmitButton title="Login" />
//         </form>
//       </PageLayout>
//     )
//   }
// }

export default LoginPage;
