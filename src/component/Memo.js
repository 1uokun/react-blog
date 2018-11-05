import React from "react";
import { connect } from "react-redux";

const DemoComponent = props => (
    <div>
        <p>{props.descr}{props.life.data}</p>
    </div>
);

const mapStateToProps = state => ({
    life : state.life
});

export default connect(mapStateToProps)(React.memo(DemoComponent))