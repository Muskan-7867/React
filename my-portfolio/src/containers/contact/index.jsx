import React from 'react';
import { BsPersonFill, BsEnvelopeFill, BsFillFileTextFill } from 'react-icons/bs';
import Pageheader from '../../components/pageheader';

const Contact = () => {
  return (
    <section className="p-8 border border-[#A52A2A] ">
      <Pageheader headertext="Contact Me" icon={<BsPersonFill size={30} />} />
      <div className="mt-6 border-t border-[#A52A2A]  pt-4">
        <div className="mb-12 border border-[#A52A2A] p-4 flex items-center animate-slide-in-left ">
          <BsPersonFill size={24} className="mr-3 text-[#A52A2A]" />
          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#A52A2A] slide-In-Left">Name</h2>
            <p className='text-[#A52A2A]'>Muskan</p>
          </div>
        </div>
        <div className="mb-12 border border-[#A52A2A]  p-4 flex items-center animate-slideInRight">
          <BsEnvelopeFill size={24} className="mr-3 text-[#A52A2A]" />
          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#A52A2A]">Email</h2>
            <p className='text-[#A52A2A]'>muskanloach984@gmail.com</p>
          </div>
        </div>
        <div className="border border-[#A52A2A]  p-4 flex items-center animate-slide-in-left ">
          <BsFillFileTextFill size={24} className="mr-3 text-[#A52A2A]" />
          <div>
            <h2 className="text-xl font-semibold mb-2 text-[#A52A2A]">Description</h2>
            <p className='text-[#A52A2A]'>
              I am a passionate developer with experience in building web applications.
              Feel free to reach out if you have any questions or opportunities!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
