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


export const findIconHelper = (
  key: CategoriesSlugsTypes,
  color: string = colorsCore.blue100
): React.ReactNode => {
  switch (key.toLowerCase()) {
    case 'android':
      return <RobotIcon color={color}/>;
    case 'middle-school':
      return <StudentsIcon color={color}/>;
    case 'cycling':
      return <BicycleIcon color={color}/>;
    case 'elementary-school':
      return <ElementarySchoolIcon color={color}/>;
    case 'mermaid':
      return <MermaidIcon color={color}/>;
    case 'all-girls-school':
    case 'vampire':
    case 'wrestling':
    case 'samurai':
    case 'elf':
      return <ElfIcon color={color}/>;
    default:
      return <StudentsIcon color={color}/>;
  }
}