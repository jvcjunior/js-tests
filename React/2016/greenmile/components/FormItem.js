import React from 'react';

class FormItem extends React.Component {
    
    
    render() {
        var element;
        
        if (this.props.formItemData.type !== 'button') {
            element = (
                <div>
                    <span>{this.props.formItemData.name}</span>
                    <input type={this.props.formItemData.type}
                           required={this.props.formItemData.mandatory}
                           name={this.props.formItemData.name} />
                </div>
            );
        }else{
            element = (
                <div>
                    <button> {this.props.formItemData.name}</button>
                </div>
            );
        }
        return (<div>{element}</div>);
    }
}

FormItem.propTypes = {
    formItemData: React.PropTypes.object.isRequired
};


export default FormItem;