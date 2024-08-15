import {
  Checkbox as AntdCheckbox,
  type CheckboxProps as AntdCheckboxProps,
} from 'antd';

export const Checkbox: React.FC<AntdCheckboxProps> = (props) => {
  return <AntdCheckbox {...props} />;
};

export function HuiCheckbox() {
  return (
    <>
      <div className="mb-4 flex items-center">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-blue-500"
        />
        <label
          htmlFor="default-checkbox"
          className="ms-2 text-sm text-gray-900"
        >
          Default checkbox
        </label>
      </div>
      <div className="flex items-center">
        <input
          checked
          onChange={() => console.log('check')}
          id="checked-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-blue-500"
        />
        <label
          htmlFor="checked-checkbox"
          className="ms-2 text-sm text-gray-900"
        >
          Checked state
        </label>
      </div>
    </>
  );
}
