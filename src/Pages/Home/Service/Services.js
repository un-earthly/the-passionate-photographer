import React from 'react'
import Service from './Service'
export default function Services() {
    return (
        <div>
            <h1 className='text-3xl text-center text-orange-500'>Services I Provide</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-7 px-8 py-4'>

                <Service name='Wedding Photography' img='images/Compressed/wdding-1.jpg' pricing='$39.99' desc="Wedding Is one of the most wonderful event in one's life. In Order to capture that special moment i want to be the one who captures that very special moment of yours for you." />
                <Service name='Travel Photography' img='images/Compressed/beach-1.jpg' pricing='$24.99' desc="travelling gives us happiness &amp; We All love to travel enjoy. we want to see that moment that we enjoyed again and again.i'd like to help your with it. lets travel" />
                <Service name='Modeling Photography' img='images/Compressed/fashion-6.jpg' pricing='$23.99' desc="To Become a succesful model you need a right photographer who can capture the hindden start within you.I'd like to capture that hiddine You. Lets Start the journey of Shine Along!!" />
            </div>
        </div>
    )
}
