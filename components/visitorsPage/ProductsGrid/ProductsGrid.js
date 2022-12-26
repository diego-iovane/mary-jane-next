import React from 'react'
import { GetContentContext } from '../../../context/ContentContext'
import { BdSection, Inner } from '../Elements'

const ProductsGrid = () => {

    const { content } = GetContentContext()

    return (
        <BdSection>
            <Inner>

            </Inner>
        </BdSection>
    )
}

export default ProductsGrid