import React from "react";
import classNames from "classnames";

const style = classNames(
  "outline-none",
  "p-2",
  "text-red-600",
  // "w-96"
);

export default class Input extends React.Component {
  state = {
    value: "",
  };

  handleChange = ({ target }) => {
    // e.stopPropagation();
    this.setState({ value: target.value });
    this.props.onChange(target.value);
  };


  render() {
    const { type, name, placeholder, onClick, value, onChange } = this.props;
    // const { value: stateValue } = this.state;
    return (
      <input
        className={style}
        type={type}
        name={name}
        placeholder={placeholder}
        onClick={onClick}
        value={value}
        onChange={onChange}
      />
    );
  }
}
