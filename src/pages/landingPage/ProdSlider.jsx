import React, { useEffect, useState } from 'react'
import { product_1, product_2, product_3 } from '../../assets'

const ProdSlider = () => {
 
        
    const imageSlides = [
        {
            img: product_1
        },
        {
            img: product_2
        },
        {
            img: product_1
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    // const prevSlide = () => {
    //     const isFirstSlide = currentIndex === 0
    //     const newIndex = isFirstSlide ? imageSlides.length-1 : currentIndex -1
    //     setCurrentIndex(newIndex)
    // }

    useEffect(()=>{
        for(let i = 0; i < imageSlides.length ; i++){
            setTimeout(()=>{
                const nextSlide = () => { 
                    const isLastSlide =currentIndex === imageSlides.length -1 
                    const newIndex = isLastSlide ? 0 : currentIndex + 1
                    setCurrentIndex(newIndex)
                }
                nextSlide()
            }, 6000)
        }
    })


  return (
    <div className='  m-auto   '>
        {/* Image Here to display */}
        <div style={{ backgroundImage: `url(${imageSlides[currentIndex].img})`}} className='w-[200px] h-[400px] p-40 object-scale-down bg-center bg-cover duration-500 rounded-3xl'>
        </div>
    </div>
  )
}

export default ProdSlider
