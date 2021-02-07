import CardHome from "./CardHome";
import CardRegion from "./CardRegiones";
import CardHero from "./CardHero";

export default function Home(props) {
  if (props.type === "home") return <CardHome {...props} />;
  if (props.type === "region") return <CardRegion {...props} />;
  if (props.type === "hero") return <CardHero {...props} />;
  return null;
}
