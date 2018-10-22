import React from "react";

const ContainerBasedCounterContainer = WrappedComponent =>
    class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            };
        }

        handleDec = () => {
            this.setState(({ count }) => ({
                count: count - 1
            }));
        };

        handleInc = () => {
            this.setState(({ count }) => ({
                count: count + 1
            }));
        };

        render() {
            return (
                <WrappedComponent
                    {...this.state}
                    handleDec={this.handleDec}
                    handleInc={this.handleInc}
                />
            );
        }
    };

export default ContainerBasedCounterContainer;
