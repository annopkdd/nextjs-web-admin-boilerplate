import React from "react";

interface IRadioButton {
  checked: boolean;
  label?: string;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}

const RadioButton = (props: IRadioButton) => {
  const { checked, label, disabled, onChange } = props;

  return (
    <div className="flex items-center mr-4">
      <input
        checked={checked}
        type="radio"
        disabled={disabled}
        onChange={() => (onChange ? onChange(!checked) : {})}
        className="w-4 h-4 bg-white disabled:bg-gray-500 border-gray-300 cursor-pointer disabled:cursor-not-allowed"
      />
      {label ? (
        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default RadioButton;