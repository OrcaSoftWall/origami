import styles from './index.module.css';
import Title from '../../components/title';
import SubmitButton from '../../components/button/submit-button';
import PageLayout from '../../components/page-layout';
import Input from '../../components/input';
import { Component, useState, useContext, useCallback, useEffect, useParams } from "react";
import { useNavigate, useHistory } from "react-router-dom";
import authenticate from '../../utils/authenticate';
import UserContext from '../../Context';

const EditUserPage = () => {
  const [username, setUsername] = useState(null)
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const context = useContext(UserContext)
  const navigate = useNavigate()
  const params = useParams()

  const getData = useCallback(async () => {
    const id = params.userid
    const responce = await fetch(`http://localhost:9999/api/user?id=${id}`)
    if (!responce.ok) {
      navigate("/error")               // this.props.history.push("/error")
    }
    const user = await responce.json()
    setUsername(user.username)
  },[params.userid, navigate])

  useEffect(() => {
    getData()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    //console.log(this.context)

    if (username && oldPassword && newPassword && rePassword && newPassword === rePassword) {
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
        <Title title="Edit profile" />
        <Input type="text" value={username} onChange={(e) => { setUsername(e.target.value); setErrorMessage(null) }} label="Username" id="username" />
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="Old Password" id="old-password" />
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} label="New Password" id="password" />
        <Input type="password" value={rePassword} onChange={(e) => setRePassword(e.target.value)} label="Re-Password" id="re-password" />
        <SubmitButton title="Edit!" />
        {errorMessage ? <Title title={errorMessage} /> : null}
      </form>
    </PageLayout>
  )
}

export default EditUserPage;
