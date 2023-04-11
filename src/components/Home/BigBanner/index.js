import React from 'react'
import './style.scss';
import imgBanner from '../../../../src/assets/devSafioImageBanner.svg'
import NewContractArticle from '../Contrato_articulo/index.js'

const BigBanner = () => {
    return <>
        <div className='Big-Banner' >
            
            <div className='Big-Banner__article'>
                <NewContractArticle />
            </div>

            <div className='Big-Banner__image-container'>
                <div className='image'>
                    <img src={imgBanner} alt='imagen flotando'></img>
                </div>
            </div>
        </div>
    </>
}

export default BigBanner




