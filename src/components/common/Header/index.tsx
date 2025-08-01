import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { IProps } from "./types";
import { BreadcrumbContainer, HeaderRoot, MainTitle, PathSegment, Separator, Subtitle, TitleWrapper } from "./styled";

const Header: React.FC<IProps> = ({ title, subtitle }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

  const handlePathClick = (index: number) => {
    const newPath = '/' + pathSegments.slice(0, index + 1).join('/');
    navigate(newPath);
  };

  const handleTransformPathSegment = (segment: string, index: number, segments: string[]) => {
    const shouldTransform = index > 0 &&
      ["home", "animes", "categories"].includes(segments[index - 1]);

    if (shouldTransform) {
      return segment.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }

    if (segment === "category") {
      return "Categories";
    }

    if (index === segments.length - 1 && title) {
      return title;
    }

    return segment.charAt(0).toUpperCase() + segment.slice(1);
  };

  return (
    <HeaderRoot>
      {pathSegments.length > 0 && (
        <BreadcrumbContainer>

          {pathSegments.map((segment, index) => (
            <React.Fragment key={index}>
              <PathSegment
                onClick={() => handlePathClick(index)}
                $isLast={index === pathSegments.length - 1}
              >
                {handleTransformPathSegment(segment, index, pathSegments)}
              </PathSegment>
              {index < pathSegments.length - 1 && <Separator>/</Separator>}
            </React.Fragment>
          ))}
        </BreadcrumbContainer>
      )}

      <TitleWrapper>
        <MainTitle>{title}</MainTitle>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </TitleWrapper>
    </HeaderRoot>
  );
};

export default Header;