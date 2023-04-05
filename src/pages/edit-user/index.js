import styles from './index.module.css';
import Title from '../../components/title';
import SubmitButton from '../../components/button/submit-button';
import PageLayout from '../../components/page-layout';
import Input from '../../components/input';
import { Component, useState, useContext, useCallback, useEffect } from "react";
import { useParams, useNavigate, useHistory } from "react-router-dom";
import getCookie from '../../utils/get-cookie';
import UserContext from '../../Context';

export function withRouter(Children) {
  return (props) => {

    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

const EditUserPage = () => {
  const [username, setUsername] = useState('')
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
  }, [params.userid, navigate])

  useEffect(() => {
    getData()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    //console.log(this.context)

    if (username && newPassword && rePassword && newPassword === rePassword) {
      const id = params.userid
      const token = getCookie('x-auth-token');

      return fetch(`http://localhost:9999/api/user/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ username: username, password: newPassword })
      })
        .then(res => res.json())
        .then(data => {
          console.log("Updated data:   ", data);
          // do something with the response data
        })
        .catch(err => {
          setErrorMessage(err.message)
          console.error(err);
          // handle the error
        });
    } else {
      setErrorMessage(`Username or password / re-password don't match!`)
    }
  }
  return (
    <PageLayout>
      <form className={styles.container} onSubmit={handleSubmit} >
        <Title title="Edit profile" />
        <Input type="text" value={username} onChange={(e) => { setUsername(e.target.value); setErrorMessage(null) }} label="Username" id="username" />
        <Input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} label="New Password" id="new-password" />
        <Input type="password" value={rePassword} onChange={(e) => setRePassword(e.target.value)} label="Re-Password" id="re-password" />
        <SubmitButton title="Edit!" />
        {errorMessage ? <Title title={errorMessage} /> : null}
      </form>
    </PageLayout>
  )
}

export default EditUserPage;
