import styled from 'styled-components';
import { colorsCore } from '../../../design-system/core/colors';

const SkeletonCardContainer = styled.div`
  background: rgba(0, 28, 70, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 4px 8px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.05) inset;
  width: 18rem;
  max-width: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.4rem;
  overflow: hidden;
  height: 30rem;
  
`;

const SkeletonImage = styled.div`
  height: 20rem;
  width: 16rem;
  background: linear-gradient(
    -90deg,
    rgba(0, 18, 66, 0.4) 0%,
    rgba(40, 84, 157, 0.6) 50%,
    rgba(0, 18, 66, 0.4) 100%
  );
  background-size: 400% 400%;
  margin: auto;
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;
  
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

const SkeletonContent = styled.div`
  padding: 15px;
`;

const SkeletonLine = styled.div<{ $width?: string }>`
  height: 16px;
  width: ${({ $width }) => $width || '100%'};
  background: linear-gradient(
    -90deg,
    rgba(0, 18, 66, 0.4) 0%,
    rgba(40, 84, 157, 0.6) 50%,
    rgba(0, 18, 66, 0.4) 100%
  );
  background-size: 400% 400%;
  border-radius: 4px;
  margin-bottom: 12px;
  animation: pulse 1.5s ease-in-out infinite;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SkeletonBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 80px;
  height: 24px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const AnimeCardSkeleton = () => {
  return (
    <SkeletonCardContainer>
      <div style={{ position: 'relative' }}>
        <SkeletonImage />
        <SkeletonBadge />
      </div>
      
      <SkeletonContent>
        <SkeletonLine $width="80%" />
        <SkeletonLine $width="60%" />
        <SkeletonLine $width="40%" />
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
          <SkeletonLine $width="30%" />
          <SkeletonLine $width="30%" />
        </div>
      </SkeletonContent>
    </SkeletonCardContainer>
  );
};