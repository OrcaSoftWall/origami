// import styles from './index.module.css';
import styled from 'styled-components';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import SubmitButton from '../../components/button/submit-button';
import Origamis from '../../components/origamis';

const ShareThoughtsPage = () => {
  return (
    <PageLayout>
      <Title title="Share your thoughts..." />
      <Container>         {/* <div className={styles.container} > */}
        <TextArea defaultValue="Describe yourself here..." />       {/* <textarea  className={styles.textarea} defaultValue="..." /> */}
      </Container>
      <SubmitButton title="Post" />
      <Origamis length={3} />
    </PageLayout>
  );
}

const Container = styled.div`     
    text-align: center;
`
{/* styled(PageLayout)` - for Components */}
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
