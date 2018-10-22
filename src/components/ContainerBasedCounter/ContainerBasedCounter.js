import React from "react";

const ContainerBasedCounter = ({ count, handleDec, handleInc }) => (
    <div>
        <div>
            <strong>Counter: </strong>
            {count}
        </div>
        <div>
            <button type="button" onClick={handleInc}>
                +
            </button>
            {` `}
            <button type="button" onClick={handleDec}>
                -
            </button>
        </div>
    </div>
);

export default ContainerBasedCounter;
