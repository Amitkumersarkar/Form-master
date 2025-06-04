
const ReuseableFrom = ({ formTitle, submitBtnText = 'submit' }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <h2>{formTitle}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name='Name' placeholder="Enter Your Name" />
                <br />
                <input type="text" name="Email" placeholder="Enter Your Email" />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReuseableFrom;