
import './App.css'
import Logo from "./images/logo.png"
import Hero from "./images/heroimage.png"
import Cape from "./images/capge.png"
import Ckbirla from "./images/ckbirla.png"
import Dell from "./images/dell.png"
import Shell from "./images/shell.png"
import Yamasha from "./images/yamaha.png"
import Biocon from "./images/biocon.png"
import Talk from "./images/talk.png"



function App() {

  return (
    <>
     {/* ____________navbarr____________ */}
<div className='flex items-center bg-white justify-between px-8 shadow-md mx-auto justify-center md:px-12 '>
<ul className='flex gap-12 font-medium'>
  <li className="cursor-pointer hover:text-blue-500 font">Features</li>
    <li className="cursor-pointer hover:text-blue-500">Pricing</li>
      <li className="cursor-pointer hover:text-blue-500">Testimonials</li>
        <li className="cursor-pointer hover:text-blue-500">Resources</li>
        <img src={Logo} alt="Logo" />
         <li className="cursor-pointer hover:text-blue-500">Company</li>
    <li className="cursor-pointer hover:text-blue-500">Contact</li>
  </ul>
  <div className='px-8 py-3'>
  <button className='px-8 py-3 border-2 border-[#0CBBC7] text-[#0CBBC7] font-bold hover:bg-[#0CBBC7] hover:text-white rounded-lg transition duration-300 justify-end'>Login</button>
</div>

</div>
   {/* ____________navbarr end____________ */}


   {/* ____________________herosection__________________ */}
   <div className="bg-[#EDFEFF] w-full">
   <div className=' p-80  px-6 py-20 md:px20 md:py-32 text-center  max-w-7xl mx-auto '>
    <h1 className='text-3xl md:text-5xl font-bold text-gray-800 mb-6'>A powerful online engagement tool that’s intuitive and simple to use.</h1>
    <p className="text-gray-400 text-center font-medium ">With stellar one-click reports and unmatched support, see how Circle will <br />
    make a difference in your business.</p>
    <br />
  <button className="px-8 py-3 border-2 border-[#0CBBC7] text-[#0CBBC7] font-bold hover:bg-[#0CBBC7] hover:text-white rounded-lg transition duration-300">
    Get started free
  </button>
  <br />
  <br />
  <br />
    <img src={Hero} alt="Hero"  className='mx-auto'/>
   </div>
</div>
   {/* ____________________herosectionend__________________ */}



{/* _____________________section2______________________ */}
<div className="px-6 md:px-20 py-16 text-center">

  {/* Button */}
  <button className="px-2 py- mb-8 text-center text-[#0CBBC7] font-normal bg-[#EFFEFF] hover:text-white rounded-2xl transition duration-300 mx-auto">
    Our Customers
  </button>

  {/* Heading */}
  <h1 className="text-2xl md:text-4xl  mb-12">
    Trusted by <span className="text-black font-bold">100,000+ customers</span> in 90+ countries
  </h1>

  {/* Company logos */}
  <div className="flex flex-wrap gap-8 justify-center items-center mb-12">
    <img src={Biocon} alt="Biocon" className=""/>
    <img src={Yamasha} alt="Yamasha" className=""/>
    <img src={Dell} alt="Dell" className=""/>
    <img src={Ckbirla} alt="CK Birla" className=""/>
    <img src={Shell} alt="Shell" className=""/>
    <img src={Cape} alt="Cape" className=""/>
  </div>

  {/* Stats */}
  <div className="flex flex-col md:flex-row gap-4 md:gap-12 justify-center text-gray-600 font-medium">
    <p><span className='text-[#38d8e3] font-bold'>18281</span> signed up last month</p>
    <p><span className='text-[#38d8e3] font-bold'>GDPR </span> - & <span className='text-[#38d8e3] font-bold'>CCPA</span>-ready </p>
    <p><span className='text-[#38d8e3] font-bold'>Leader @ G2</span> Summer</p>
  </div>

</div>

{/* _____________________section2 end______________________ */}

{/* _____________________section3______________________ */}
<div className='bg-white'>
    <div className="max-w-7xl mx-auto px-6 md:px-20 py-16 flex flex-col md:flex-row items-center gap-12">
      <div className='flex-1 text-center md:text-left'>
 <button className="px-2 py- mb-8 text-center text-[#0CBBC7] font-normal bg-[#EFFEFF] hover:text-white rounded-2xl transition duration-300 mx-auto">
    Our Customers
  </button>
  <h1 className="text-3xl md:text-5xl font-normal mb-6">Tool <span className='font-bold'>built for people.</span></h1>
  <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">Whether you want to edit your Google Docs,
    <br />
     resolve Jira issues, or collaborate over Zoom.
<br />
<br />
Circle has 100+ integrations with tools you 
<br />
already use and love.</p>

  <button className="px-8 py-3 border-2 border-[#0CBBC7] text-white font-bold bg-[#0CBBC7] hover:text-white  ">
    Get started free
  </button>
  </div>


    <div className="flex-1">
      <img src={Talk} alt="talk" className="w-full h-auto object-contain" />
    </div>


</div>
</div>
    </>
  )
}

export default App
