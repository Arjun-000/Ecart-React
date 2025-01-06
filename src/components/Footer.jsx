import React from 'react'

const Footer = () => {
  return (
    <div style={{height:"230px" , marginTop:'100px'}} className='mt-5 w-full bg-violet-600 text-white'>
      <div className='flex justify-between p-4'>
        <div className='intro' style={{width:'400px'}}>
          <h5 className='text-xl font-bold mb-2'><i className='fa-solid fa-truck-fast me-2'></i> E Cart</h5>
          <p className='mb-2'>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
          <p className='mb-2'>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        <div className='flex flex-col'>
          <h5 className='text-xl font-bold mb-2'>Link</h5>
          <a href="" className='mb-2'>Landing Page</a>
          <a href="" className='mb-2'>Home Page</a>
          <a href="" className='mb-2'>Wishlist</a>
          <a href="">Cart</a>
        </div>
        <div className='flex flex-col'>
          <h5 className='text-xl font-bold mb-2'>Guides</h5>
          <a href="https://react.dev/" style={{textDecoration:'none', color:'white'}} target='_blank' className='mb-2'>React</a>
          <a href="https://react-bootstrap.netlify.app/" style={{textDecoration:'none', color:'white'}} target='_blank' className='mb-2'>React Bootstrap</a>
          <a href="https://www.npmjs.com/package/react-router-dom" style={{textDecoration:'none', color:'white'}} target='_blank' className='mb-2'>React Router</a>
        </div>
        <div className='flex flex-col'>
          <h5 className='text-xl font-bold mb-2'>Contact</h5>
          <div>
            <input type="text" className='p-2 rounded me-1' placeholder='Enter email here...'/>
            <button className='rounded  px-3 py-2 bg-violet-950'><i class="fa-solid fa-arrow-right"></i></button>
            <div className='flex justify-between mt-3'>
            <a href="https://en.wikipedia.org/wiki/Twitter" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-twitter"></i></a>
            <a href="https://www.instagram.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.linkedin.com/feed/" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-github"></i></a>
            <a href="https://github.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-solid fa-phone"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer