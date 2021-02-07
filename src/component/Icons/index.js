import InformationComponent from "./Information";
import MoonComponent from "./Moon";
import MoonOutlineComponent from "./MoonOutline";
import SunComponent from "./Sun";
import SunOutlineComponent from "./SunOutline";
import VirusesComponent from "./Viruses";
import VirusComponent from "./Virus";
import GithubComponent from "./Github";
import UpComponent from "./Up";

export const Information = (props) => <InformationComponent {...props} />;
export const Moon = (props) => <MoonComponent {...props} />;
export const MoonOutline = (props) => <MoonOutlineComponent {...props} />;
export const Sun = (props) => <SunComponent {...props} />;
export const SunOutline = (props) => <SunOutlineComponent {...props} />;
export const Viruses = (props) => <VirusesComponent {...props} />;
export const Virus = (props) => <VirusComponent {...props} />;
export const Github = (props) => <GithubComponent {...props} />;
export const ArrowUp = (props) => <UpComponent {...props} />;
