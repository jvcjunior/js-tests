import React from 'react';
import FormItem from './FormItem';

class Section extends React.Component {
    render() {
        return (
            <div>
                {this.props.sectionData.fields.map(function(item, i) {
                    return (
                        <FormItem key={i} formItemData={item}/>
                    );
                })}
            </div>
        );
    }
}

Section.propTypes = {
    sectionData: React.PropTypes.object.isRequired
};


export default Section;