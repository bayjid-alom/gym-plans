import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './PricingOptions/PricingOptions'


const pricingPromise = fetch('pricingData.json').then(res => res.json())


function App() {

  return (
    <>



      <header>
        <Navbar></Navbar>
      </header>


      <main>

        <Suspense fallback={
          <div className='flex justify-center mx-auto py-10'>
            <span className="loading loading-dots loading-3xl text-white"></span>
          </div>}>
          
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      </main>




    </>
  )
}

export default App
