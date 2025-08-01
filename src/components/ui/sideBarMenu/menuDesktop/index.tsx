import React, { useState } from "react";
import IconButton from "../../../common/iconButton.tsx/index.tsx";
import HamburgerIcon from "../../../common/icons/hamburgerIcon.tsx";
import { colorsCore } from "../../../../design-system/core/colors.ts";
import {
  findIconHelper,
  type CategoriesSlugsTypes,
} from "../../../../utils/findIconHelper.tsx";
import { useCategories } from "../../../../hooks/api/useCategories.ts";
import { useAnimeCategory } from "../../../../context/AnimeCategoryProvider.tsx";
import { useNavigate } from "react-router-dom";
import { HamburgerButton, IconsWrapperStyled, ItemRootStyled, LabelsContainerStyled, LabelStyled, SideBarRootStyled } from "./styled.ts";

const SideBarMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const navigate = useNavigate();
  const { data: categories } = useCategories();
  const { selectedCategory, setSelectedCategory, resetPagination } =
    useAnimeCategory();

  const handleCategoryClick = (category: any) => {
    if (category.attributes.title === selectedCategory) return;

    resetPagination();
    setSelectedCategory(category.attributes.title);
    navigate(`/home/animes/categories/${category.attributes.slug}`);
  };

  const toggleSidebar = () => {
    setIsAnimating(true);
    setIsOpen(!isOpen);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <SideBarRootStyled $isOpen={isOpen}>
      <IconsWrapperStyled $isOpen={isOpen}>
        <HamburgerButton
          $isOpen={isOpen}
          icon={<HamburgerIcon color={colorsCore.blue100} />}
          onClick={toggleSidebar}
        />
        <LabelsContainerStyled
          $isOpen={isOpen}
          $isAnimating={isAnimating}
        >
          {categories?.data?.map((el: any) => {
            const isActive = el.attributes.slug.toLowerCase() === selectedCategory;
            return (
              <ItemRootStyled
                key={el.id}
                $isOpen={isOpen}
                onClick={() => handleCategoryClick(el)}
                $isActive={isActive}
              >
                <IconButton
                  onClick={() => { }}
                  icon={findIconHelper(el.attributes.slug as CategoriesSlugsTypes)}
                  isActive={isActive}
                />
                {isOpen && ( // Only render label if sidebar is open
                  <LabelStyled $isOpen={isOpen} $isActive={isActive}>
                    {el.attributes.title}
                  </LabelStyled>
                )}
              </ItemRootStyled>
            );
          })}
        </LabelsContainerStyled>
      </IconsWrapperStyled>
    </SideBarRootStyled>
  );
};

export default SideBarMenu;