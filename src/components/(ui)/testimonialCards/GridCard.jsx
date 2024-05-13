import React from 'react'

const GridCard = () => {

    const data = [
        {
            title: "",
            img: "",
            para: ""
        },
        {
            title: "",
            img: "",
            para: ""
        },
        {
            title: "",
            img: "",
            para: ""
        },
        {
            title: "",
            img: "",
            para: ""
        },
        {
            title: "",
            img: "",
            para: ""
        },
        {
            title: "",
            img: "",
            para: ""
        },
    ]
    return (
        <div className='w-[90%] m-auto gri grid-cols-4'>
            {
                data.map((item, index) => (
                    <div key={index}>
                        nknaaaa
                    </div>
                ))
            }

        </div>
    )
}

export default GridCard
