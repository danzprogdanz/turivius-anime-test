import React from "react";
import IconButton from "../../../common/iconButton.tsx/index.tsx";
import HamburgerIcon from "../../../common/icons/hamburgerIcon.tsx";
import { colorsCore } from "../../../../design-system/core/colors.ts";
import { useAnimeCategory } from "../../../../context/AnimeCategoryProvider.tsx";
import { useNavigate } from "react-router-dom";
import {
  findIconHelper,
  type CategoriesSlugsTypes,
} from "../../../../utils/findIconHelper.tsx";
import { useCategories } from "../../../../hooks/api/useCategories.ts";
import CloseIcon from "../../../common/icons/closeIcon.tsx";
import { IconsWrapperStyled, ItemRootStyled, LabelsContainerStyled, LabelStyled, Overlay, SideBarRootStyled } from "./styled.ts";

interface IProps { }

const MenuMobile: React.FC<IProps> = () => {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const { data: categories } = useCategories();
  const { selectedCategory, setSelectedCategory, resetPagination } = useAnimeCategory();

  const handleCategoryClick = (category: any) => {
    if (category.attributes.title === selectedCategory) return;

    resetPagination();
    setSelectedCategory(category.attributes.title);
    navigate(`/home/animes/categories/${category.attributes.slug}`);
    setIsMobileOpen(false);
  };

  return (
    <>
      <Overlay $isOpen={isMobileOpen} onClick={() => setIsMobileOpen(false)} />
      <SideBarRootStyled>
        <IconsWrapperStyled>
          <IconButton
            icon={isMobileOpen ? <CloseIcon color={colorsCore.blue100} /> : <HamburgerIcon color={colorsCore.blue100} />}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          />
        </IconsWrapperStyled>
        <LabelsContainerStyled $isOpen={isMobileOpen}>
          {categories?.data?.map((el: any) => {
            const isActive = el.attributes.slug.toLowerCase() === selectedCategory;

            return (
              <ItemRootStyled
                key={el.id}
                onClick={() => handleCategoryClick(el)}
                $isActive={isActive}
              >
                <IconButton
                  onClick={() =>
                    handleCategoryClick(el)}
                  icon={findIconHelper(el.attributes.slug as CategoriesSlugsTypes)}
                  isActive={isActive}
                />
                <LabelStyled $isActive={isActive}>
                  {el.attributes.title}
                </LabelStyled>
              </ItemRootStyled>
            );
          })}
        </LabelsContainerStyled>
      </SideBarRootStyled>
    </>
  );
};

export default MenuMobile;