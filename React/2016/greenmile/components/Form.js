import React from 'react';
import Section from './Section';

class Form extends React.Component {
    render() {
        return (
            <form>
                {
                    this.props.formData.sections ? this.props.formData.sections.map(function(item, i) {
                        return (
                            <div>
                                <h4>{item.description}</h4>
                                <Section key={i} sectionData={item} />
                            </div>
                        )
                    }) : ""
                }
            </form>
        );
    }
}

Form.propTypes = {
    formData: React.PropTypes.object.isRequired
};

export default Form;