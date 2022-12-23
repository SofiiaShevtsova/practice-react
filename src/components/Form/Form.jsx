import { useEffect, useRef, useState } from "react";

const Form = props => {
    const [name, setName] = useState('')
    const firstName = useRef (name)
    const autofocus = useRef(null)
    console.log(firstName);
    console.log(name);
    useEffect(() => {
        autofocus.current.focus()
    }, [])
  return (
    <form>
          <input name="name" onChange={(e) => {
              setName(e.target.value)
          }}/>
          <input name="password" ref={ autofocus} />
          <button type="submit">Log in</button>
    </form>
  );
};

export default Form