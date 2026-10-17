import React, { use } from 'react';
import PricingCard from '../components/PricingCard/PricingCard';

const PricingOptions = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise)
    // console.log(pricingData);  // [{...}, {...}]

    return (

        <div className='w-[94%] md:w-[80%] mx-auto md:my-15 my-10'>
            <div className='heading text-center md:w-[70%] w-[95%] mx-auto mb-8'>
                <h2 className=' text-3xl font-bold mb-4'>Get Our Membership</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ipsa tempora? Deleniti enim est in atque exercitationem assumenda, quidem similique.</p>
            </div>


            <div className='pricing-container p-5 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }

            </div>
        </div>

    );
};

export default PricingOptions;