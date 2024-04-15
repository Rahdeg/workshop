
import { Header } from '@/components/header'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const SearchLayout = ({ children }: Props) => {
    return (
        <div className='h-full'>
            <Header />
            {children}
        </div>
    )
}

export default SearchLayout