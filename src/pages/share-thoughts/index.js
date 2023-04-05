// import styles from './index.module.css';
import styled from 'styled-components';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import SubmitButton from '../../components/button/submit-button';
import Origamis from '../../components/origamis';
import { useState } from 'react';
import getCookie from '../../utils/get-cookie'

const ShareThoughtsPage = () => {
  const [publication, setPublication] = useState("")
  const [updatedOrigami, setUpdatedOrigami] = useState([])   // used only as flag: when updates useEffect is updating the share-thoughts page

  const handleSubmit = async () => {
    if (publication) {
      try {
        const promise = await fetch('http://localhost:9999/api/origami', {
          method: 'POST',
          body: JSON.stringify({
            description: publication
          }),
          headers: {
            'Content-Type': 'application/json',
            'Authorization': getCookie('x-auth-token')
          }
        })
        console.log(await promise.json())
        setPublication("")
        setUpdatedOrigami([...updatedOrigami, 1])       // just a flag for update after new post in the share-thoughts page
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <PageLayout>
      <Title title="Share your thoughts..." />
      <Container>         {/* <div className={styles.container} > */}
        <TextArea placeholder="Describe yourself here..." value={publication} onChange={e => setPublication(e.target.value)} />       {/* <textarea  className={styles.textarea} defaultValue="..." /> */}
      </Container>
      <SubmitButton title="Post" onClick={handleSubmit} />
      <Origamis length={3} updatedOrigami={updatedOrigami} />
    </PageLayout>
  );
}

const Container = styled.div`     
    text-align: center;
`
{/* styled(PageLayout)` - for Components */ }
const TextArea = styled.textarea`
    width: 300px;
    height: 100px;
    resize:none
    `
/* https://www.copycat.dev/blog/styled-components-react/ */
export default ShareThoughtsPage;


// const ShareThoughtsPage = () => {
//   return (
//     <PageLayout>
//       <Title title="Share your thoughts..." />
//       <div className={styles.container} >
//         <textarea  className={styles.textarea} defaultValue="Describe yourself here..." />
//       </div>
//       <SubmitButton title="Post" />
//       <Origamis length={3}/>
//     </PageLayout>
//   );
// }

// export default ShareThoughtsPage;
