import styles from './index.module.css';
import Title from '../../components/title';
import SubmitButton from '../../components/button/submit-button';
import PageLayout from '../../components/page-layout';
import Input from '../../components/input';
import { Component } from 'react';
import authenticate from '../../utils/authenticate';
import UserContext from '../../Context';

// const RegisterPage = () = {
  // https://youtu.be/R_RoJfAXYb8?t=5861
// }

class RegisterPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: "",
      rePassword: ""
    }
  }

  static contextType = UserContext


  onChange = (event, type) => {
    const newState = {}
    newState[type] = event.target.value
    this.setState(newState)
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const { username, password, rePassword } = this.state
    if (username && (password === rePassword)) {
      await authenticate('http://localhost:9999/api/user/register',
        { username, password },
        (user) => {
          console.log("-----REGISTERED and Logged in!-----")
          this.context.logIn(user)
          // this.props.history.push('/')   // history not supported with r-r-d v6
        }, (e) => console.log("Submit Error:  ", e ? e : "Registration Error: Something went wrong with your registration!")
      )
    } else console.log("Submit Error: Password and re-password do not match!")
  }
  render() {
    const { username, password, rePassword } = this.state

    return (
      <PageLayout>
        <form className={styles.container} onSubmit={this.handleSubmit} >
          <Title title="Register" />
          <Input type="text" value={username} onChange={(e) => this.onChange(e, "username")} label="Username" id="username" />
          <Input type="password" value={password} onChange={(e) => this.onChange(e, "password")} label="Password" id="password" />
          <Input type="password" value={rePassword} onChange={(e) => this.onChange(e, "rePassword")} label="Re-Password" id="re-password" />
          <SubmitButton title="Register" />
        </form>
      </PageLayout>
    )
  }
}

export default RegisterPage;
