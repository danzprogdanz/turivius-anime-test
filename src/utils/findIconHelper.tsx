import BicycleIcon from "../components/common/icons/bicycleIcon";
import ElementarySchoolIcon from "../components/common/icons/elementarySchoolIcon";
import ElfIcon from "../components/common/icons/elfIcon";
import MermaidIcon from "../components/common/icons/mermaidIcon";
import RobotIcon from "../components/common/icons/robotIcon";
import StudentsIcon from "../components/common/icons/studantsIcon";
import { colorsCore } from "../design-system/core/colors";

export type CategoriesSlugsTypes = 
    "middle-school" | 
    "cycling" | 
    "elementary-school" | 
    "mermaid" | 
    "android" |
    "all-girls-school" |
    "vampire" |
    "wrestling" |
    "samurai" |
    "elf"


export const findIconHelper = (key: CategoriesSlugsTypes): React.ReactNode => {
  switch (key.toLowerCase()) {
    case 'android':
      return <RobotIcon color={colorsCore.blue100}/>;
    case 'middle-school':
      return <StudentsIcon color={colorsCore.blue100}/>;
    case 'cycling':
      return <BicycleIcon color={colorsCore.blue100}/>;
    case 'elementary-school':
      return <ElementarySchoolIcon color={colorsCore.blue100}/>;
    case 'mermaid':
      return <MermaidIcon color={colorsCore.blue100}/>;
    case 'all-girls-school':

    case 'vampire':
    case 'wrestling':
    case 'samurai':
    case 'elf':
      return <ElfIcon color={colorsCore.blue100}/>;

    default:
      return <StudentsIcon color={colorsCore.blue100}/>; // default fallback
  }
}