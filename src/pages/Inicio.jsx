import React from 'react'
import Hero from '../components/Hero'
import HeaderInfo from '../components/HeaderInfo'

const Inicio = () => {
  return (

    <>
    
    <Hero/>
    <hr />
    <HeaderInfo/>
    <hr />
    <div className='container py-5 mx-auto text-center'>
    <h3>deja una valoracion</h3>
    <div className="rating">
      <hr />
      
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>

    </div>
    
 
<section className='bg-amber-600'>
  <div className="container mx-auto">
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4">
        <div className="flex flex-wrap items-center justify-center">
          <a href="javascript:void(0)" className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]">
            <img src="https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids.svg" alt="image" className="h-10 w-full dark:hidden" />
            <img src="https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids-white.svg" alt="image" className="hidden h-10 w-full dark:block" />
          </a>
          <a href="javascript:void(0)" className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]">
            <img src="https://cdn.tailgrids.com/2.2/assets/images/brands/lineicons.svg" alt="image" className="h-10 w-full dark:hidden" />
            <img src="https://cdn.tailgrids.com/2.2/assets/images/brands/lineIcons-white.svg" alt="image" className="hidden h-10 w-full dark:block" />
          </a>
          <a href="javascript:void(0)" className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]">
            <img src="https://cdn.tailgrids.com/2.2/assets/images/brands/uideck.svg" alt="image" className="h-10 w-full dark:hidden" />
            <img src="https://cdn.tailgrids.com/2.2/assets/images/brands/uideck-white.svg" alt="image" className="hidden h-10 w-full dark:block" />
          </a>
          <a href="javascript:void(0)" className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]">
            <img src="https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui.svg" alt="image" className="h-10 w-full dark:hidden" />
            <img src="https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui-white.svg" alt="image" className="hidden h-10 w-full dark:block" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>





    
    </>
    
  )
}

export default Inicio