// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './Input.scss';

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      customClassName: '',
    };
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onBlur(event) {
    if (event.target.value.trim() === '') {
      this.setState({ customClassName: '' });
    }
  }

  onChange(event) {
    this.setState({ term: event.target.value });
    if (event.target.value.trim() === '') {
      this.setState({ customClassName: 'input--filled' });
    }
    this.props.onSearchTermChange(event.target.value);
  }

  onFocus() {
    this.setState({ customClassName: 'input--filled' });
  }

  render() {
    return (
      <span className={`input input--haruki ${this.state.customClassName}`}>
        <input
          className="input__field input__field--haruki"
          type="text" id="input-1"
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
        <label className="input__label input__label--haruki" htmlFor="input-1">
          <span className="input__label-content input__label-content--haruki">
            {this.props.inputName}
          </span>
        </label>
      </span>
    );
  }
}

Input.propTypes = {
  inputName: PropTypes.string.isRequired,
  onSearchTermChange: PropTypes.func.isRequired,
};

export default Input;
