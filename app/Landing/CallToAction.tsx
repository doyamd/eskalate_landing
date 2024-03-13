import React from 'react';

const CallToAction = () => {
  return (
    <div className='h-[400px] md:mx-0 lg:mx-36 mt-20 shadow-lg relative lg:rounded-[40px] overflow-hidden' style={{ boxShadow: '0px 5px 15px 0px rgba(0, 0, 0, 0.1)' }}>
      <div
        className={`h-full flex flex-col justify-center lg:rounded-[40px] items-center bg-cover bg-no-repeat bg-center relative`}
        style={{ backgroundImage: `url(/footer.png)` }}  
      >
        <div className="absolute inset-0 bg-[#4DAAF5] opacity-50"></div>
        <div className='text-md flex flex-col justify-center items-center text-white relative z-10'>
          <p className='m-2 text-center text-2xl lg:text-[50px] font-bold'>Diverse Perspectives, Global impact </p>
          <p className='m-2 text-center text-[15px] md:text-[20px] w-[75%]'>
            Hire African Developers to bring diverse perspectives and experience.
            <br />
            <span>Ensure your products are tailored for a global audience and adaptable to ever-evolving needs.</span>
          </p>
          <button className='px-3 py-2 m-5 text-[15px] rounded-[4px] bg-white text-[#2195F3]'>Schedule a call</button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
