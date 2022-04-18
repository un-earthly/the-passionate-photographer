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

    return (
        <Tabs focusTabOnClick={false} className=' mt-14 text-center'>
            <TabList>
                <Tab>Nature</Tab>
                <Tab>Wedding</Tab>
                <Tab>Fashion And Beauty</Tab>
                <Tab>Beach</Tab>
            </TabList>

            <TabPanel>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:p-24 mx-auto">
                    {
                        catNature.map(img => <img key={img.id} className='duration-500 filter h-full object-cover hover:brightness-50 cursor-pointer' src={img.picture} alt="" />)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:p-24 mx-auto">
                    {
                        catWedding.map(img => <img key={img.id} className='duration-500 filter h-full object-cover hover:brightness-50 cursor-pointer' src={img.picture} alt="" />)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:p-24 mx-auto">
                    {
                        catFashion.map(img => <img key={img.id} className='duration-500 filter h-full object-cover hover:brightness-50 cursor-pointer' src={img.picture} alt="" />)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:p-24 mx-auto">
                    {
                        catBeach.map(img => <img key={img.id} className='duration-500 filter h-full object-cover hover:brightness-50 cursor-pointer' src={img.picture} alt="" />)
                    }
                </div>
            </TabPanel>
        </Tabs>
    )
};