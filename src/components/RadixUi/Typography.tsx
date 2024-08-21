import { Text } from '@radix-ui/themes';

const TypographyExample = () => (
  <div className="space-y-6 bg-gray-100 p-8">
    <Text size="8" asChild>
      <h1 className="text-4xl font-extrabold text-gray-900">
        Tailwind-styled Heading
      </h1>
    </Text>
    <Text size="6" asChild>
      <h2 className="text-2xl font-semibold text-gray-800">
        Tailwind-styled Subheading
      </h2>
    </Text>
    <Text size="4" asChild>
      <p className="text-base leading-relaxed text-gray-600">
        This is a paragraph with some example text. We are combining the power
        of Radix UI Themes and Tailwind CSS for consistent and customizable
        typography across your application.
      </p>
    </Text>
    <Text size="4" asChild>
      <a href="#" className="font-medium text-blue-600 hover:underline">
        Tailwind-styled Link
      </a>
    </Text>
  </div>
);

export default TypographyExample;
