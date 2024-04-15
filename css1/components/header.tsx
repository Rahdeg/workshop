import React from 'react'
import { Logo } from './ui/logo'
import { Navigation } from './navigation'
import { Action } from './action'

export const Header = () => {
    return (
        <header className=' h-16  border-b-2 '>
            <nav className=' flex mx-auto max-w-screen-xl justify-between h-full items-center px-4' >

                <Logo />

                <Navigation />

                <Action />

            </nav>

        </header>
    )
}

