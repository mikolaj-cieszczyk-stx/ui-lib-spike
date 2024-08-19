import {
  Button as AntdButton,
  type ButtonProps as AntdButtonProps,
} from 'antd';

export const Button: React.FC<AntdButtonProps> = (props) => {
  return (
    <AntdButton
      {...props}
      className="mb-2 w-1/4 rounded-full bg-blue-700 px-2 py-1 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
    />
  );
};
