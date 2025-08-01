import React, { type ReactNode } from 'react'
import styled, { css } from 'styled-components'
import IconButton from '../../common/iconButton.tsx/index.tsx'
import { colorsCore } from '../../../design-system/core/colors.ts'
import { media } from '../../../design-system/utils/mediaQueriesHelper.ts'
import { breakpoints } from '../../../design-system/constants/breakpoints.ts'

interface IProps {
    label: string
    onClick: () => void
    isActive: boolean
    icon: ReactNode
    isDesktopOpen?: boolean
}

export const LabelStyled = styled.div<{
    $isActive: boolean
    $isDesktopOpen: boolean | null
}>`
    color: white;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
     display: flex;
     

     &:hover {
        background-color: ${colorsCore.gray900} ;
        color: ${colorsCore.gray200} ;
     }

    ${(props) => props.$isActive && css`
      color: ${colorsCore.teal300} ;
      font-size: 1.2rem;
      font-weight: 700;
      text-decoration: underline;
    `}

    ${(props) => props.$isDesktopOpen && css`
        display: none !important;
    `}

    ${media.up(breakpoints.lg)`
        display: flex;
        width: 230px;
        background-color: ${colorsCore.blue1000};
    `}
`


export const ItemRootStyled = styled.div<{
    $isActive: boolean
    $isDesktopOpen: boolean | null
}>`
    height: fit-content;
    
    display: flex;
    width: 100vw;

    ${(props) => props.$isDesktopOpen && css`
        width: 70px !important;
    `}


    &:hover  { /* Correct way to target LabelStyled on hover of ItemRootStyled */
        background-color: #ffffff24 ;
        cursor: pointer;
    }

    ${(props) => props.$isActive && css`
        &:hover  { /* Correct way to target LabelStyled on hover of ItemRootStyled */
            background-color: #ffffff24 ;
            cursor: pointer;
        }
        
    `}

    ${media.up(breakpoints.lg)`
        width: 300px;
    `}
`


const ItemSideBar: React.FC<IProps> = ({
    label,
    onClick,
    isActive,
    icon,
    isDesktopOpen
}) => {

    return (<ItemRootStyled onClick={onClick} $isActive={isActive} $isDesktopOpen={isDesktopOpen ?? null}>
        <IconButton onClick={onClick} icon={icon} isActive={isActive}/>
        <LabelStyled $isActive={isActive} $isDesktopOpen={isDesktopOpen ?? null}>{label}</LabelStyled>
    </ItemRootStyled>)
}

export default ItemSideBar