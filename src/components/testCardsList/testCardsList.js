import React from 'react'
import CardTest from '../cardProfileTest/cardTest'
import htmlImg from '../../assets/test_html_css.svg'
import javaImg from '../../assets/test_JS.svg'
import androidImg from '../../assets/test_android.svg'
import azureImg from '../../assets/test_azure.svg'
import './testCards.scss'

const TestCardsList = () => {
    return (
        <div className='list-cards'>
            <CardTest
                imgSrc={htmlImg}
                title={'HTML CSS'}
                time={'No pasó'}
                link_text={'Empezar test'}
                handleLink_text={() => console.log('clickeo aki')}
            />
            <CardTest
                imgSrc={javaImg}
                title={'JavaScript'}
                time={'30 min'}
                link_text={'Empezar test'}
                handleLink_text={() => console.log('clickeo aki')}
            />
            <CardTest
                imgSrc={androidImg}
                title={'Android'}
                time={'45 min'}
                link_text={'Empezar test'}
                handleLink_text={() => console.log('clickeo aki')}
            />
            <CardTest
                imgSrc={azureImg}
                title={'Azure DevOps'}
                time={'40 min'}
                link_text={'Empezar test'}
                handleLink_text={() => console.log('clickeo aki')}
            />
        </div>
    )
}
export default TestCardsList