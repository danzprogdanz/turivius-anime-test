import React from 'react';
import { useIsMobile } from '../../../hooks/useMediaQuery';
import type { PaginationProps } from './types';
import { ChevronLeft, ChevronRight, NavigationButton, PageButton, PageEllipsis, PaginationContainer, PaginationItem, PaginationList, PaginationNav } from './styled';

const PaginationBar: React.FC<PaginationProps> = ({ 
  currentPage, 
  totalPages, 
  onPageChange 
}) => {
  const isMobile = useIsMobile(); 

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      const leftOffset = Math.floor(maxVisible / 2);
      const rightOffset = Math.ceil(maxVisible / 2) - 1;
      
      let start = currentPage - leftOffset;
      let end = currentPage + rightOffset;
      
      if (start < 1) {
        end += 1 - start;
        start = 1;
      }
      
      if (end > totalPages) {
        start -= end - totalPages;
        end = totalPages;
      }
      
      if (start > 1) pages.push(1);
      if (start > 2 && currentPage !== 1) pages.push('...');
      
      for (let i = start; i <= end; i++) {
        if (i > 0 && i <= totalPages) pages.push(i);
      }
      
      if (end < totalPages - 1 && currentPage !== totalPages) pages.push('...');
      if (end < totalPages) pages.push(totalPages);
    }
    
    return pages;
  };

  if (isMobile) return (
    <PaginationContainer>
      <PaginationNav>
        <PaginationList>
          <PaginationItem>
            <NavigationButton 
              onClick={() => onPageChange(currentPage - 1)} 
              disabled={currentPage === 1}
            >
              <ChevronLeft />
            </NavigationButton>
          </PaginationItem>
          {currentPage > 1 && (
            <PaginationItem>
              <PageButton 
                onClick={() => onPageChange(1)}
                $isActive={false}
              >
                1
              </PageButton>
            </PaginationItem>
          )}
          {currentPage > 2 && <PaginationItem><PageEllipsis>...</PageEllipsis></PaginationItem>}
          <PaginationItem>
            <PageButton 
              $isActive={true}
              aria-current={'page'}
            >
              {currentPage}
            </PageButton>
          </PaginationItem>
          {currentPage < totalPages - 1 && <PaginationItem><PageEllipsis>...</PageEllipsis></PaginationItem>}
          {currentPage < totalPages && (
            <PaginationItem>
              <PageButton 
                onClick={() => onPageChange(totalPages)}
                $isActive={false}
              >
                {totalPages}
              </PageButton>
            </PaginationItem>
          )}
          <PaginationItem>
            <NavigationButton 
              onClick={() => onPageChange(currentPage + 1)} 
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              <ChevronRight />
            </NavigationButton>
          </PaginationItem>
        </PaginationList>
      </PaginationNav>
    </PaginationContainer>
  );

  return (
    <PaginationContainer>
      <PaginationNav>
        <PaginationList>
          <PaginationItem>
            <NavigationButton 
              onClick={() => onPageChange(currentPage - 1)} 
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <ChevronLeft />
            </NavigationButton>
          </PaginationItem>

          {getPageNumbers().map((page, index) => (
            <PaginationItem key={index}>
              {page === '...' ? (
                <PageEllipsis>...</PageEllipsis>
              ) : (
                <PageButton 
                  onClick={() => onPageChange(page as number)}
                  $isActive={currentPage === page}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  {page}
                </PageButton>
              )}
            </PaginationItem>
          ))}

          <PaginationItem>
            <NavigationButton 
              onClick={() => onPageChange(currentPage + 1)} 
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              <ChevronRight />
            </NavigationButton>
          </PaginationItem>
        </PaginationList>
      </PaginationNav>
    </PaginationContainer>
  );
};

export default PaginationBar;