import styled from "styled-components";
import { colorsCore } from "../../../design-system/core/colors";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  padding: 0 1rem;
`;

export const PaginationNav = styled.nav`
  position: relative;
  z-index: 0;
`;

export const PaginationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const PaginationItem = styled.li`
  display: flex;
  align-items: center;
`;

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;
  border-radius: 8px;
  user-select: none;
`;

export const NavigationButton = styled(BaseButton)<{ disabled?: boolean }>`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${colorsCore.white};
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  
  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

export const PageButton = styled(BaseButton)<{ $isActive: boolean }>`
  min-width: 40px;
  height: 40px;
  padding: 0 0.5rem;
  background: ${({ $isActive }) => 
    $isActive 
      ? 'linear-gradient(135deg, rgba(88, 212, 103, 0.8), rgba(31, 130, 18, 0.8))' 
      : 'rgba(255, 255, 255, 0.05)'};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ $isActive }) => $isActive ? colorsCore.white : 'rgba(255, 255, 255, 0.8)'};
  font-weight: ${({ $isActive }) => $isActive ? '600' : '500'};
  
  &:hover {
    background: ${({ $isActive }) => 
      $isActive 
        ? 'linear-gradient(135deg, rgba(88, 212, 103, 0.9), rgba(31, 130, 18, 0.9))' 
        : 'rgba(255, 255, 255, 0.15)'};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const PageEllipsis = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  color: rgba(255, 255, 255, 0.6);
  user-select: none;
`;

export const Chevron = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transition: all 0.2s ease;
`;

export const ChevronLeft = styled(Chevron)`
  transform: rotate(135deg);
  margin-right: 2px;
`;

export const ChevronRight = styled(Chevron)`
  transform: rotate(-45deg);
  margin-left: 2px;
`;