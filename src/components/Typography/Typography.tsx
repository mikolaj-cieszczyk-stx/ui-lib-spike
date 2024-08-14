import { Typography as AntdTypography } from "antd";

export const { Text, Link, Title, Paragraph } = AntdTypography;

export const HuiTypographyComponent = () => {
  return (
    <div className="prose">
      <h1 className="text-6xl">This is a Heading 1</h1>
      <h1 className="text-4xl">This is a Heading 2</h1>
      <h1 className="text-3xl">This is a Heading 3</h1>
      <p>
        This is a paragraph. It has some text describing something interesting.
      </p>
      <blockquote className="text-xl italic font-semibold text-gray-900 underline">
        This is a blockquote, providing some highlighted text or a quote.
      </blockquote>
      <ul className="ax-w-md space-y-1 text-gray-900 list-disc list-inside">
        <li>This is an item in a list.</li>
        <li>Here's another item.</li>
        <li>And another one.</li>
      </ul>

      <ol className="max-w-md space-y-1 text-gray-900 list-decimal list-inside">
        <li>This is an item in a list.</li>
        <li>Here's another item.</li>
        <li>And another one.</li>
      </ol>
      <a
        href="https://wp.pl"
        target="_blank"
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        HUI Link
      </a>
    </div>
  );
};
