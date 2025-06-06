import { useEffect, useRef } from "react";

const RefForm = () => {
    // declared ref hooks
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    // declared useEffect
    useEffect(() => {
        nameRef.current.focus();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name='Name' placeholder="Enter Your Name" />
                <br />
                <input ref={emailRef} defaultValue={'amrit@gmail.com'} type="text" name="Email" placeholder="Enter Your Email" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefForm;