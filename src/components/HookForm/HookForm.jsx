import useInputState from "../Hooks/InputState";

const HookForm = () => {

    const [name, handleNameChange] = useInputState('amrita sarkar');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form data', name);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name='Name' placeholder="Enter Your Name" />
                <br />
                <input type="text" name="Email" placeholder="Enter Your Email" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;