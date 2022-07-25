import React, { FC } from 'react';
import './App.css';
import CurrencyComparator from './features/binance/currency-comparator';
import useBinance from './hooks/use-binance';

const App: FC = () => {
  const { coursesInfo, isAskPriceGoingUp ,isBidPriceGoingUp } = useBinance();

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen '>
      { coursesInfo.a[5] ?
      <div className='flex flex-col items-center justify-center w-3/4 px-16 py-20 text-white rounded-md lg:w-1/2 xl:w-1/3 bg-zinc-800'>
        <div className='mb-8 text-3xl font-semibold text-yellow-400'>
          { coursesInfo.s }
        </div>
        <div className='flex flex-row justify-between w-full mt-2 text-lg'>
          <CurrencyComparator 
            name='Ask price'
            condition={isAskPriceGoingUp} 
            currencyValue={parseFloat(coursesInfo.a[0][0]).toFixed(2)}
            quantityValue={coursesInfo.a[1][1]}
          />
          <CurrencyComparator 
            name='Bid price'
            condition={isBidPriceGoingUp} 
            currencyValue={parseFloat(coursesInfo.b[0][0]).toFixed(2)}
            quantityValue={coursesInfo.b[1][1]}
          />
        </div> 
        <div className='mt-4 text-sm font-thin text-center uppercase'>
          <div>ask, bid price different</div>
          { parseFloat(coursesInfo.a[0][0]) - parseFloat(coursesInfo.b[0][0])}
        </div> 
      </div>
      : (
        <div className='text-3xl'>
          Loading...
        </div>
      ) }
    </div>
  );
}

export default App;
