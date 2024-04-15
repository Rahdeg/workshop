import { Button } from "@/components/ui/button"
import { Heart, Star } from "lucide-react"
import Image from "next/image"


const Item = ({ image, title, price }: any) => {
    return (
        <div className=" bg-white p-2 rounded-md drop-shadow-lg flex gap-x-3">

            <Image src={image} alt="" width={100} height={100} className=" rounded-2xl" />

            <div className=" flex flex-col w-full">
                <div className=" w-full  ">
                    <div className=" flex items-center justify-between ">
                        <p className=" text-xl"> {title}</p>
                        <Heart className=" w-5 h-5 stroke-sky-500 fill-sky-500" />
                    </div>

                    <div className=" flex items-center gap-x-3  ">
                        <div className=" flex items-center justify-center text-sm">
                            <Star className="w-4 h-4 mr-2 stroke-sky-500 fill-sky-500" />
                            4.9 &nbsp;<span className=" text-muted-foreground">(75)</span></div>
                        <p className=" text-sm">2.2km</p>
                    </div>



                </div>
                <div className=" flex-1 flex flex-col justify-end">
                    <div className=" flex items-center justify-between ">
                        <p className=" font-semibold text-xl"> {price} <span className=" text-sm font-normal">/night</span></p>
                        <Button>
                            Details
                        </Button>
                    </div>
                </div>
            </div>


        </div>
    )

}



export const Results = () => {
    return (
        <div className='bg-[#f4f6f9] rounded-xl p-6 space-y-4'>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3">

                <Item image="/image3.jpg" title="Ghostone" price="$360" />
                <Item image="/image3.jpg" title="Ghostone" price="$360" />
                <Item image="/image3.jpg" title="Ghostone" price="$360" />


            </div>


        </div>
    )
}
