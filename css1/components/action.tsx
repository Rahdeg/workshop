import React from 'react'
import { Bell, Heart, } from 'lucide-react'
import { NavButton } from './navButton'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export const Action = () => {
    return (
        <div className=' flex gap-x-4'>
            <NavButton icon={Heart} />
            <NavButton icon={Bell} />
            <Avatar className=' bg-sky-500/50'>
                <AvatarImage />
                <AvatarFallback className=' bg-sky-500/50'>
                    CN
                </AvatarFallback>
            </Avatar>
        </div>
    )
}
