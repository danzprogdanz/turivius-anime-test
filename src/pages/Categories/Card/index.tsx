import React from 'react';
import styled from 'styled-components';
import { colorsCore } from '../../../design-system/core/colors';

interface CollectionCardProps {
  collection: {
    createdAt: string;
    updatedAt: string;
    title: string;
    description: string;
    totalMediaCount: number;
    slug: string;
    nsfw: boolean;
    childCount: number;
  };
  variant?: 'default' | 'compact';
  onClick?: () => void;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({
  collection,
  variant = 'default',
  onClick
}) => {
  const { title, description, totalMediaCount, nsfw } = collection;

  return (
    <CardContainer $variant={variant} onClick={onClick}>

        <CardBadge $nsfw={nsfw}>
          {nsfw ? 'NSFW' : `${totalMediaCount} items`}
        </CardBadge>
     

      <CardContent>
        <CardTitle>{title}</CardTitle>

        {variant !== 'compact' && (
          <>
            <CardDescription>
              {description || 'No description available'}
            </CardDescription>
            <CardMeta>
              <MediaCount>{totalMediaCount} media items</MediaCount>
            </CardMeta>
          </>
        )}
      </CardContent>
    </CardContainer>
  );
};

// Styled components (adapted from your AnimeCard styles)
const CardContainer = styled.div<{ $variant: string }>`
  background: rgba(0, 28, 70, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  transition: all 0.3s ease;
  height: 10rem;
  width: ${({ $variant }) => $variant === 'compact' ? '14rem' : '18rem'};
  max-width: ${({ $variant }) => $variant === 'compact' ? '14rem' : '18rem'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.4rem;
  opacity: 0.9;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 6px 12px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.1) inset;
    opacity: 1;
    cursor: pointer;
    background: rgba(0, 28, 70, 0.7);
  }
`;


const CardBadge = styled.span<{ $nsfw: boolean }>`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  background-color: ${({ $nsfw }) => 
    $nsfw ? 'rgba(196, 3, 3, 0.8)' : 'rgba(31, 130, 18, 0.8)'};
  color: ${colorsCore.white};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const CardContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  color: ${colorsCore.white};
  margin: 0 0 10px 0;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

const CardDescription = styled.p`
  color: rgba(224, 225, 226, 0.8); 
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 15px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MediaCount = styled.div`
  color: ${colorsCore.blue300};
  font-size: 14px;
`;