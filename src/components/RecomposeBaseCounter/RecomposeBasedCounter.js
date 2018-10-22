import React from "react";
import { compose, withHandlers, withState } from "recompose";

const RecomposeBasedCounter = ({ count, handleDec, handleInc }) => (
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

const enhance = compose(
    withState("count", "setCount", 0),
    withHandlers({
        handleDec: ({ count, setCount }) => () => setCount(count - 1),
        handleInc: ({ count, setCount }) => () => setCount(count + 1)
    })
);

export { RecomposeBasedCounter, enhance };
export default enhance(RecomposeBasedCounter);
