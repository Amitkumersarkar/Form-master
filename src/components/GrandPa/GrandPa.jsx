import Aunty from "../FamilyTree/Aunty";
import Dad from "../FamilyTree/Dad";
import Uncle from "../FamilyTree/Uncle";
import './GrandPa.css';
const GrandPa = () => {
    const asset = 'Diamond Ring';
    return (
        <div className="grandpa">
            <h2>GrandPa</h2>
            <section className="flex">
                <Dad asset={asset}></Dad>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default GrandPa;