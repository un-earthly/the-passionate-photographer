import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useImgs from '../../Hooks/useImgs';


export default function Gallery() {
    const { imgs } = useImgs()
    const catNature = imgs.filter(img => img.category === 'nature')
    const catWedding = imgs.filter(img => img.category === 'wedding')
    const catFashion = imgs.filter(img => img.category === 'fashion')
    const catBeach = imgs.filter(img => img.category === 'beach')

    const showBigImg = (img) => {

    }
    return (
        <Tabs focusTabOnClick={false} className=' mt-14 text-center'>
            <TabList>
                <Tab>Nature</Tab>
                <Tab>Wedding</Tab>
                <Tab>Fashion And Beauty</Tab>
                <Tab>Beach</Tab>
            </TabList>

            <TabPanel>
                <div className="grid grid-cols-3 gap-4 p-24 mx-auto">
                    {
                        catNature.map(img => <img className='duration-500 filter h-full object-cover hover:brightness-50 cursor-pointer' onClick={() => showBigImg(img.picture)} src={img.picture} alt="" />)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className="grid grid-cols-3 gap-4 p-24 mx-auto">
                    {
                        catWedding.map(img => <img className='duration-500 filter h-full object-cover hover:brightness-50 cursor-pointer' onClick={() => showBigImg(img.picture)} src={img.picture} alt="" />)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className="grid grid-cols-3 gap-4 p-24 mx-auto">
                    {
                        catFashion.map(img => <img className='duration-500 filter h-full object-cover hover:brightness-50 cursor-pointer' onClick={() => showBigImg(img.picture)} src={img.picture} alt="" />)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className="grid grid-cols-3 gap-4 p-24 mx-auto">
                    {
                        catBeach.map(img => <img className='duration-500 filter h-full object-cover hover:brightness-50 cursor-pointer' onClick={() => showBigImg(img.picture)} src={img.picture} alt="" />)
                    }
                </div>
            </TabPanel>
        </Tabs>
    )
};