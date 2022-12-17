import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Origamis from '../../components/origamis';
import Title from '../../components/title';
import { Component, useState, useContext, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserContext from '../../Context';

export function withRouter(Children) {
  return (props) => {

    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

const ProfilePage = () => {
  const [username, setUsername] = useState(null)
  const [posts, setPosts] = useState(null)
  const context = useContext(UserContext)
  const navigate = useNavigate();
  const params = useParams()

  const getData = useCallback(async () => {
    const id = params.userid
    const responce = await fetch(`http://localhost:9999/api/user?id=${id}`)
    if (!responce.ok) {
      navigate("/error")               // this.props.history.push("/error")
    }
    const user = await responce.json()
    setUsername(user.username)
    setPosts(user.posts && user.posts.length)
  },[params.userid, navigate])

  useEffect(() => {
    getData()
  }, [])

  const logOut = () => {
    context.logOut()
    navigate("/") // this.props.history('/')
  }



  if (!username) {
    return (
      <PageLayout>
        <Title title="Loading.." />
      </PageLayout>
    )
  }
  return (
    <PageLayout>
      <div>
        <p>User: {username}</p>
        <p>Posts: {posts}</p>
        <button onClick={logOut}>Logout</button>
      </div>

      <Origamis length={3} />
    </PageLayout>
  );
}

// class ProfilePage extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: null,
//       posts: null
//     }
//   }

//   static contextType = UserContext

//   componentDidMount() {
//     console.log(this.props)
//     this.getUser(this.props.match.params.userid)
//   }

//   getUser = async (id) => {
//     const responce = await fetch(`http://localhost:9999/api/user?id=${id}`)
//     if (!responce.ok) {
//       // this.props.history.push("/error")
//     }
//     const user = await responce.json()
//     this.setState({ username: user.username, posts: user.posts.length })
//   }

//   logOut = () => {
//     this.context.logOut()
//     // this.props.history('/')
//   }

//   render() {
//     const { username, posts } = this.state

//     if (!username) {
//       return (
//         <PageLayout>
//           <Title title="Loading.." />
//         </PageLayout>
//       )
//     }

//     return (
//       <PageLayout>
//         <div>
//           <p>User: {username}</p>
//           <p>Posts: {posts}</p>
//           <button onClick={this.logOut}>Logout</button>
//         </div>

//         <Origamis length={3} />
//       </PageLayout>
//     );
//   }
// }

export default withRouter(ProfilePage);
