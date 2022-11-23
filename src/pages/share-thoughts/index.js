import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title';
import SubmitButton from '../../components/button/submit-button';
import Origamis from '../../components/origamis';

const ShareThoughtsPage = () => {
  return (
    <PageLayout>
      <Title title="Share your thoughts..." />
      <div className={styles.container} >
        <textarea  className={styles.textarea} placeholder="Describe yourself here..." />
      </div>
      <SubmitButton title="Post" />
      <Origamis length={3}/>
    </PageLayout>
  );
}

export default ShareThoughtsPage;
