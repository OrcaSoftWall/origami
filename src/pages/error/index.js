import styles from './index.module.css';
import Title from '../../components/title';
import PageLayout from '../../components/page-layout';
import err from '../../images/404.png'

const ErrorPage = () => {
  return (
    <PageLayout>
      <Title title="Something went wrong..." />
      <img className={styles.image} src={err} alt="404" />
    </PageLayout>
  )
}

export default ErrorPage