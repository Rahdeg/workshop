import React from 'react'
import { Info, Map, Settings, ShoppingBag } from 'lucide-react'

import { NavButton } from './navButton'



export const Navigation = () => {
    return (
        <div className=' flex gap-x-4'>
            <NavButton active={true} icon={Map} />
            <NavButton icon={ShoppingBag} />
            <NavButton icon={Info} />
            <NavButton icon={Settings} />

        </div>
    )
}
