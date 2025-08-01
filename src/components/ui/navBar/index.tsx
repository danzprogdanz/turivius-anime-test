import React from 'react'
import SearchIcon from '../../common/icons/SearchIcon';
import { useAnimeSearch } from '../../../context/AnimeSearchProvider';
import SearchResults from '../searchResultsContainer';
import type { IProps } from './types';
import { InputField, InputWrapperStyled, NavbarRootStyled, SearchIconWrapperStyled } from './styled';

const Navbar: React.FC<IProps> = () => {
    const {
        searchTerm,
        setSearchTerm,
        results,
        loading,
        error,
        hasMore,
        loadMore
    } = useAnimeSearch();

    return (
        <NavbarRootStyled>
            <InputWrapperStyled>
                <InputField
                    id='search-bar'
                    placeholder='Buscar animes'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <SearchIconWrapperStyled>
                    <SearchIcon color={'#6C0932'} height={'30px'} width={'30px'} />
                </SearchIconWrapperStyled>
                <SearchResults
                    results={results}
                    loading={loading}
                    error={error}
                    searchTerm={searchTerm}
                    hasMore={hasMore}
                    loadMore={loadMore}
                    onClose={() => setSearchTerm('')}
                />
            </InputWrapperStyled>
        </NavbarRootStyled>
    )
}

export default Navbar;