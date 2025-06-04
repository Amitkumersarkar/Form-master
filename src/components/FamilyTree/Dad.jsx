import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sis from "../Sister/Sis";

const Dad = () => {

    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <Myself></Myself>
                <Brother></Brother>
                <Sis></Sis>
            </section>
        </div>
    );
};

export default Dad;