import classes from './MyInput.module.css'

function MyInput(props) {
  return (
    <input type="text" {...props} className={classes.myInput}/>
  );
}

export default MyInput;