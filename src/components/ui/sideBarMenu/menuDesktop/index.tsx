import React, { useState, useEffect, useRef } from "react";
import IconButton from "../../../common/iconButton.tsx";
import {
  findIconHelper,
  type CategoriesSlugsTypes,
} from "../../../../utils/findIconHelper.tsx";
import { useCategories } from "../../../../hooks/api/useCategories.ts";
import { useAnimeCategory } from "../../../../context/AnimeCategoryProvider.tsx";
import { useNavigate } from "react-router-dom";
import {
  ChevronButton,
  ChevronLeft,
  ChevronRight,
  IconsWrapperStyled,
  ItemRootStyled,
  LabelsContainerStyled,
  LabelStyled,
  SideBarRootStyled
} from "./styled.ts";
import { colorsCore } from "../../../../design-system/core/colors.ts";

const SideBarMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const navigate = useNavigate();
  const { data: categories } = useCategories();
  const { selectedCategory, setSelectedCategory, resetPagination } =
    useAnimeCategory();
  const sidebarRef = useRef<HTMLDivElement>(null);

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

  const closeSidebar = () => {
    if (isOpen) {
      setIsAnimating(true);
      setIsOpen(false);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        closeSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <SideBarRootStyled $isOpen={isOpen} ref={sidebarRef}>
      <IconsWrapperStyled $isOpen={isOpen}>
        <ChevronButton
          onClick={toggleSidebar}
          icon={isOpen ? <ChevronLeft /> : <ChevronRight />}
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
                  icon={findIconHelper(
                    el.attributes.slug as CategoriesSlugsTypes,
                    isActive ? colorsCore.teal300 : colorsCore.white
                  )}
                  isActive={isActive}
                />
                {isOpen && (
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