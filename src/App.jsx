import { Route, Routes } from 'react-router-dom'
import Landingpage from './stores/pages/Landingpage'
import Furniture from './stores/pages/Furniture'
import Books from './stores/pages/Books'
import Waatches from './stores/pages/Waatches'
import MenClothing from './stores/pages/MenClothing'
import WomenC from './stores/pages/WomenC'
import Ac from './stores/pages/Ac'
import Computers from './stores/pages/Computers'
import Fridges from './stores/pages/Fridges'
import Kitchens from './stores/pages/Kitchens'
import Mobiles from './stores/pages/Mobiles'
import ProMobiles from './stores/pages/ProMobiles'
import Tvs from './stores/pages/Tvs'
import Speaker from './stores/pages/Speaker'


import './App.css';
import ProductsDetailPage from './stores/components/ProductsDetailPage'
import WomenProduct from './stores/components/WomenProduct'
import FurnitureProduct from './stores/components/FurnitureProduct'
import SingleElectronics from './stores/components/SingleElectronics'
import BookProduct from './stores/components/BookProduct'
import WatchData from './stores/components/WatchData'
import UserCart from './stores/UserCart'
import Footer from './stores/components/Footer'

function App() {
  return (
    <Routes>


      <Route path='/cart' element={<UserCart />}></Route>



      <Route path="/" element={<Landingpage />}></Route>


      <Route path='/clothes/men' element={<MenClothing />}></Route>
      <Route path='/clothes/men/:id' element={<ProductsDetailPage />}></Route>
      <Route path='/clothes/women' element={<WomenC />}></Route>
      <Route path='/clothes/women/:id' element={<WomenProduct />}></Route>



      <Route path='/electronics/ac' element={<Ac />}></Route>
      <Route path='/electronics/:category/:id' element={<SingleElectronics />}></Route>
      <Route path='/electronics/comps' element={<Computers />}></Route>
      <Route path='/electronics/fridges' element={<Fridges />}></Route>
      <Route path='/electronics/kitchens' element={<Kitchens />}></Route>
      <Route path='/electronics/mobiles' element={<Mobiles />}></Route>
      <Route path='/electronics/promobiles' element={<ProMobiles />}></Route>
      <Route path='/electronics/tv' element={<Tvs />}></Route>
      <Route path='/electronics/speakers' element={<Speaker />}></Route>


      <Route path='/furnitures' element={<Furniture />}></Route>
      <Route path='/furniture/:id' element={<FurnitureProduct />}></Route>

      <Route path='/books' element={<Books />}></Route>
      <Route path='/books/:id' element={<BookProduct />}></Route>

      <Route path='/watches' element={<Waatches />}></Route>
      <Route path='/watches/:id' element={<WatchData />}></Route>


      <Route path='/footer' element={<Footer />}></Route>
    </Routes>
  )
}

export default App
