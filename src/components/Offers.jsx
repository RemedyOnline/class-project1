// import React from 'react'
// we had the above and a pre-code snippet by typing... "rafce" and then TAB!

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import K from "../constants/index"

// adding index can always be omitted and no harm will be caused because index is always the first page/site a browser accesses...

const Offers = () => {
  return (
    <div className="grid grid-cols-3 w-3/5 mx-auto my-24 gap-12">
        {
            K.OFFERS.map((offer, index) => {
                console.log(`${index}: ${offer.heading}`);
                return <div key={index} className="flex flex-col gap-y-6">
                    <span className="p-2 border w-fit bg-slate-600 rounded-full text-white text-2xl">
                        <FontAwesomeIcon icon={offer.icon} />
                    </span>
                    <h3 className="text-2xl font-semibold">{offer.heading}</h3>
                    <p>{offer.desc}</p>
                </div>
            })
        }
    </div>
  )
}

export default Offers