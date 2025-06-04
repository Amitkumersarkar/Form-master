import Wife from "../Wife/Wife";

const Myself = ({asset}) => {

    return (
        <div>
            <h2>Me</h2>
            <Wife asset={asset}></Wife>
        </div>
    );
};

export default Myself;