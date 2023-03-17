import React, {useEffect, useState} from 'react'
import { img1, img2, img3 } from '../../assets'

const ImgSlider = () => {
    
        // Import Image 

        
    const imageSlides = [
        {
            img: img1
        },
        {
            img: img2
        },
        {
            img: img3
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
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16  relative'>
        {/* Image Here to display */}
        <div style={{ backgroundImage: `url(${imageSlides[currentIndex].img})`}} className='w-full h-full  bg-center bg-cover duration-500 rounded-3xl'>
        </div>
    </div>
  )
}

export default ImgSlider
