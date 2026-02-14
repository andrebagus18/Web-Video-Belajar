import MainLayout from "../layout/mainLayout";
import Card from "../organisms/card";
import ListItem from "../organisms/listItem";
import Hero from "../organisms/hero";
import Action from "../organisms/action";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <ListItem />
      <Card />
      <Action />
    </MainLayout>
  );
}
export default Home;
