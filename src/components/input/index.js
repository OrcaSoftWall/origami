import styles from './index.module.css';


const Input = ({ label, id, value, onChange }) => {
  return (
    <div className={styles.label}>
      <label htmlFor={id}>
        {label}:
        <input id={id} value={value} onChange={onChange}/>
      </label>
    </div>
  )
}

export default Input;
