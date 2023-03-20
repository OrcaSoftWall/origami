import styles from './index.module.css';
import Title from '../../components/title';
import SubmitButton from '../../components/button/submit-button';
import PageLayout from '../../components/page-layout';
import Input from '../../components/input';
import { Component, useState, useContext } from "react";
import { useNavigate, useHistory } from "react-router-dom";
import authenticate from '../../utils/authenticate';
import UserContext from '../../Context';

const EditUserPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const context = useContext(UserContext)
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    //console.log(this.context)

    if (username && password && rePassword && password === rePassword) {
      await authenticate('http://localhost:9999/api/user/register',
        { username, password },
        (user) => {
          console.log("-----Registered and Logged in!-----")
          context.logIn(user)
          navigate('/')   // history not supported with r-r-d v6
        }, (e) => {
          setErrorMessage(e.message)
          console.log("Submit Error:  ", e ? e.message : "  Something went wrong with your registration!")
        }
      )
    } else console.log("Submit Error: Username or Password / rePassword do not match!")
  }
  return (
    <PageLayout>
      <form className={styles.container} onSubmit={handleSubmit} >
        <Title title="Register" />
        <Input type="text" value={username} onChange={(e) => { setUsername(e.target.value); setErrorMessage(null) }} label="Username" id="username" />
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" id="password" />
        <Input type="password" value={rePassword} onChange={(e) => setRePassword(e.target.value)} label="Re-Password" id="re-password" />
        <SubmitButton title="Register" />
        {errorMessage ? <Title title={errorMessage} /> : null}
      </form>
    </PageLayout>
  )
}

export default EditUserPage;
