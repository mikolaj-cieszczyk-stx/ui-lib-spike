import {
  Button,
  GridList,
  GridListItem,
  Heading,
  ListBox,
  ListBoxItem,
  Text,
  Checkbox as MyCheckbox,
} from 'react-aria-components';
interface TypographyProps {}

const Typography: React.FC<TypographyProps> = () => {
  return (
    <div className="flex flex-col gap-2">
      <Heading level={4} className="text-4xl">
        Exercitationem dolorem placeat consectetur cumque quasi itaque.
      </Heading>
      <Text>
        Ipsa id cupiditate sunt ea veritatis aliquam. Iusto sed deserunt eos
        omnis aut. Voluptas qui vel corporis ullam soluta alias.
      </Text>

      <ListBox aria-label="Favorite animal" selectionMode="single">
        <ListBoxItem>Aardvark</ListBoxItem>
        <ListBoxItem>Cat</ListBoxItem>
        <ListBoxItem>Dog</ListBoxItem>
        <ListBoxItem>Kangaroo</ListBoxItem>
        <ListBoxItem>Panda</ListBoxItem>
        <ListBoxItem>Snake</ListBoxItem>
      </ListBox>

      <GridList aria-label="Favorite pokemon" selectionMode="multiple">
        <GridListItem textValue="Charizard">
          <MyCheckbox slot="selection" />
          Charizard
          <Button aria-label="Info">ⓘ</Button>
        </GridListItem>
        <GridListItem textValue="Blastoise">
          <MyCheckbox slot="selection" />
          Blastoise
          <Button aria-label="Info">ⓘ</Button>
        </GridListItem>
        <GridListItem textValue="Venusaur">
          <MyCheckbox slot="selection" />
          Venusaur
          <Button aria-label="Info">ⓘ</Button>
        </GridListItem>
        <GridListItem textValue="Pikachu">
          <MyCheckbox slot="selection" />
          Pikachu
          <Button aria-label="Info">ⓘ</Button>
        </GridListItem>
      </GridList>
    </div>
  );
};

export default Typography;
