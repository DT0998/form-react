import { useRef, useState } from "react";
import { useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const [enteredNameIsTouched,setEnteredNameIsTouched] = useState(false);

  useEffect(()=>{
    if(enteredNameIsValid){
      console.log('name input is valid');
    }
  },[enteredNameIsValid])
  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const NameInputBlurHandler =(event) =>{
    setEnteredNameIsTouched(true)
    if (enteredName.trim() !== "") {
      setEnteredNameIsValid(true);
      return;
    }
  }
  
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true)
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    // const enteredValue = nameInputRef.current.value;
    // reset value
    // nameInputRef.current.value='' => not ideal,dont manipulate the dom
    setEnteredName("");
    setEnteredNameIsValid(true);
  };
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={NameInputBlurHandler}
        />
        {nameInputIsInvalid && <p>Name must not empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
