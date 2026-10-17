import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './PricingOptions/PricingOptions'
import Banner from './components/Banner/Banner'
import ResultsChart from './components/ResultsChart/ResultsChart'
import GymPieChart from './components/ResultsChart/GymPieChart'


const pricingPromise = fetch('pricingData.json').then(res => res.json())


function App() {

  return (
    <>



      <header>
        <Navbar></Navbar>
      </header>

      <Banner></Banner>


      <main>

        <Suspense fallback={
          <div className='flex justify-center mx-auto py-10'>
            <span className="loading loading-dots loading-3xl text-white"></span>
          </div>}>

          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      </main>



      <ResultsChart></ResultsChart>
      <GymPieChart></GymPieChart>




    </>
  )
}

export default App
