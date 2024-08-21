import { Text } from '@chakra-ui/react';

interface TypographyProps {}

const Typography: React.FC<TypographyProps> = () => {
  return (
    <div className="prose">
      <Text className="text-6xl">This is a Heading 1</Text>
      <Text className="text-4xl">This is a Heading 2</Text>
      <Text className="text-3xl">This is a Heading 3</Text>
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
        Chakra Link
      </a>
    </div>
  );
};

export default Typography;
