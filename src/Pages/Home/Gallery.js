import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useImgs from '../../Hooks/useImgs';

export default function Gallery() {
    const { imgs } = useImgs()
    const catNature = imgs.filter(img => img.category === 'nature')

    return (
        <Tabs focusTabOnClick={false} className=' mt-14 text-center'>
            <TabList>
                <Tab>All</Tab>
                <Tab>Nature</Tab>
                <Tab>Fashion And Beauty</Tab>
            </TabList>

            <TabPanel>
                <div className="grid grid-cols-3 gap-4">
                    {
                        catNature.map(nature => <img src={nature.picture} alt="" />)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className="grid grid-cols-3 gap-4">
                    {
                        imgs.length
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className="grid grid-cols-3 gap-4">
                    {
                        imgs.length
                    }
                </div>
            </TabPanel>
        </Tabs>
    )
};