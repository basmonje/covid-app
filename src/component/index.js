import ContainerComponent from "./Container";
import GroupComponent from "./Group";
import ColComponent from "./Col";
import CardComponent from "./Card";
import GridComponent from "./Grid";
import TextComponent from "./Text";

export const Container = (props) => <ContainerComponent {...props} />;
export const Group = (props) => <GroupComponent {...props} />;
export const Col = (props) => <ColComponent {...props} />;
export const Card = (props) => <CardComponent {...props} />;
export const Grid = (props) => <GridComponent {...props} />;
export const Text = (props) => <TextComponent {...props} />;
