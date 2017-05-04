import React/* , { PropTypes }*/ from 'react';

const Toolbar = React.createClass({

    /* propTypes: {
        onNavigate: PropTypes.func,
    },
    navigate(action) {
        this.props.onNavigate(action);
    },*/
    render() {
        return (
        <div>
            <button type="button" key="YEAR">
                    YEAR
                </button>
                <button type="button" key="MONTH">
                    MONTH
                </button>
                <button type="button" key="WEEK">
                    WEEK
                </button>
                <button type="button" key="DAY">
                    DAY
                </button>
        </div>
        );
    },
});

export default Toolbar;
