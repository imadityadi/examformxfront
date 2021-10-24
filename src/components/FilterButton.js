import React from 'react'
import styled from 'styled-components'

function FilterButton({btnLabel,handleOnClick}) {
    return (
        <FilterButtonWrapper onClick={handleOnClick}>
            {btnLabel}
        </FilterButtonWrapper>
    )
}

export default FilterButton

const FilterButtonWrapper = styled.button`
    background: var(--secondry-white);
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    color: var(--grey);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.58);
-webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.58);
-moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.58);

    &:hover {
        transition: 0.9s;
        background: var(--primary-violet);
        border: none;
        color: var(--pure-white);

    }
    
` 