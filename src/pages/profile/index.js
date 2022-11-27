import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Origamis from '../../components/origamis';
import Title from '../../components/title';
import { Component } from 'react';
import { useParams } from 'react-router-dom';

export function withRouter(Children) {
  return (props) => {

    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      posts: null
    }
  }

  componentDidMount() {
    console.log(this.props)
    this.getUser(this.props.match.params.userid)
  }

  getUser = async (id) => {
    const responce = await fetch(`http://localhost:9999/api/user?id=${id}`)
    if (!responce.ok) {
      this.props.history.push("/error")
    }
    const user = await responce.json()
    this.setState({ username: user.username, posts: user.posts.length })
  }

  render() {
    const { username, posts } = this.state

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
        </div>

        <Origamis length={3} />
      </PageLayout>
    );
  }
}

export default withRouter(ProfilePage);
