
const SimpleForm = () => {
    const handleSubmit = event => {
        // this function prevent loading
        event.preventDefault();
        console.log('submitted the form');
        // event dot target lock the form field
        console.log(event.target.Name.value);
        console.log(event.target.Email.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='Name' placeholder="Enter Your Name" />
                <br />
                <input type="text" name="Email" placeholder="Enter Your Email" />
                <br />
                <input type="submit" value="submit" />
                {/* <button onClick={handleSubmit}>Submit</button> */}
            </form>
        </div>
    );
};

export default SimpleForm;