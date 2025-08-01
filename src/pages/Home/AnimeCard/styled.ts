import styled from 'styled-components';
import { colorsCore } from '../../../design-system/core/colors';

export const CardContainer = styled.div<{ $variant: string }>`
  background: rgba(0, 28, 70, 0.6); /* teal900 with opacity */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  transition: all 0.3s ease;
  height: 30rem;
  width: 18rem;
  max-width: 18rem;
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

export const CardImage = styled.div<{ $imageUrl: string }>`
  height: 100%;
  width: 100%;
  background: 
    linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, 
    rgba(0,0,0,0.7) 100%),
    url(${({ $imageUrl }) => $imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  margin: auto;
  border-radius: 4px;
  overflow: hidden;
  
  /* Estilo quando a imagem está carregando */
  &[data-status="loading"] {
    background-color: rgba(0, 28, 70, 0.5);
  }
  
  /* Estilo quando há erro no carregamento */
  &[data-status="error"] {
    background-color: rgba(70, 0, 28, 0.5);
    background-image: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg, 
      rgba(255, 255, 255, 0.05) 0%, 
      rgba(255, 255, 255, 0) 60%
    );
    pointer-events: none;
  }
`;

export const CardBadge = styled.span<{ $status: string }>`
  position: absolute;
  top: 10px;
  right:10px;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  background-color: ${({ $status }) => 
    $status === 'ongoing' ? 'rgba(88, 212, 103, 0.8)' : // Brighter teal
    $status === 'completed' ? 'rgba(31, 130, 18, 0.8)' : // Brighter green
    'rgba(196, 161, 3, 0.8)'}; // Brighter yellow
  color: ${colorsCore.white};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const CardContent = styled.div`
  padding: 15px;
`;

export const CardTitle = styled.h3`
  color: ${colorsCore.white};
  margin: 0 0 10px 0;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

export const CardSynopsis = styled.p`
  color: rgba(224, 225, 226, 0.8); 
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 15px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
`;

export const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  color: ${colorsCore.yellow300};
  
  svg {
    margin-right: 5px;
  }
`;

export const Episodes = styled.div`
  color: ${colorsCore.blue300};
  font-size: 14px;
`;

export const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  gap: 5px;
`;

export const GenreTag = styled.span`
  background-color: rgba(0, 18, 66, 0.6); // blue800 with opacity
  color: ${colorsCore.blue200};
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 12px;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(90, 186, 238, 0.3);
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(40, 84, 157, 0.7); // blue500 with opacity
  }
`;