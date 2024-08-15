import { Typography as AntdTypography } from 'antd';

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
      <blockquote className="text-xl font-semibold italic text-gray-900 underline">
        This is a blockquote, providing some highlighted text or a quote.
      </blockquote>
      <ul className="ax-w-md list-inside list-disc space-y-1 text-gray-900">
        <li>This is an item in a list.</li>
        <li>Here's another item.</li>
        <li>And another one.</li>
      </ul>

      <ol className="max-w-md list-inside list-decimal space-y-1 text-gray-900">
        <li>This is an item in a list.</li>
        <li>Here's another item.</li>
        <li>And another one.</li>
      </ol>
      <a
        href="https://wp.pl"
        target="_blank"
        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
      >
        HUI Link
      </a>
    </div>
  );
};
