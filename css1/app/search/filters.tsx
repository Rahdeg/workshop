import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import React from 'react'

const FilterButton = ({ label, active }: any) => {
    return (
        <button className={cn("p-2 px-3 rounded-xl text-muted-foreground", active && " bg-sky-500/40 text-neutral-800")}>
            {label}
        </button>
    )
}

const FilterInput = ({ label, placeholder, className }: any) => {
    return (
        <div className=' space-y-1 w-full'>
            <p className=' text-[12px] text-muted-foreground'> {label}</p>
            <Input placeholder={placeholder} className={cn(' border-0  border-r  ', className)} />
        </div>
    )
}

export const Filters = () => {
    return (
        <div className='bg-[#f4f6f9] rounded-xl p-6 space-y-4'>
            <div className=' flex items-center justify-between'>
                <div className='flex items-center gap-x-2'>
                    <FilterButton label={"Hotel"} active />
                    <FilterButton label={"House"} />
                    <FilterButton label={"Village"} />
                </div>
                <div>
                    Today: Oct 10, Tue
                </div>
            </div>
            <div className=' flex drop-shadow-2xl items-end w-full'>
                <FilterInput placeholder="let me in" label="City or Hotel" className=" rounded-l-xl rounded-r-none" />
                <FilterInput placeholder="let me in" label="City or Hotel" className=" rounded-l-none rounded-r-none" />
                <FilterInput placeholder="let me in" label="City or Hotel" className=" rounded-l-none rounded-r-none" />
                <Button className=' rounded-l-none w-full'>
                    Search
                </Button>
            </div>

        </div>
    )
}
