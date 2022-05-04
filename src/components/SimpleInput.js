import {  useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

    let formIsValid = false;

    if(enteredNameIsValid){
      formIsValid = true;
    }


  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const NameInputBlurHandler = (event) => {
    setEnteredNameIsTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouched(true);
    // const enteredValue = nameInputRef.current.value;
    // reset value
    // nameInputRef.current.value='' => not ideal,dont manipulate the dom
    if(!enteredNameIsValid){
      return ;
    }
    setEnteredName("");
    setEnteredNameIsTouched(false)
  };

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
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
