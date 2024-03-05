import { Shirt, Laptop2, Book, ChevronDown, Watch, Armchair, ChevronRight } from 'lucide-react'
import { NavLink } from "react-router-dom";

function Category_Bar() {
    return (
        <div className="categories-box flex justify-center border mb-4 border-black ">
            <ul className=" category-buttons">
                <li className="dropdown px-2 py-[17px] text-[18px]  transition cursor-pointer">
                    <Shirt size={18} />Clothing<ChevronDown />
                    <div className='dropdown-content '>
                        <NavLink to="/clothes/men" activeClassName="active"><p className='flex justify-between'>Men  <ChevronRight /></p></NavLink>
                        <NavLink to="/clothes/women" activeClassName="active"><p className='flex justify-between'>Women  <ChevronRight /></p></NavLink>
                    </div>
                </li>
                <NavLink to='/furnitures' activeClassName="active"><li className="px-2 py-[17px] text-[18px]  transition cursor-pointer"> <Armchair size={18} /> Furniture <ChevronDown /> </li></NavLink>
                <li className="dropdown px-2 py-[17px] text-[18px]  transition cursor-pointer">
                    <Laptop2 size={18} /> Electronics <ChevronDown />
                    <div className='dropdown-content '>
                        <NavLink to="/electronics/ac" activeClassName="active"><p className='flex justify-between'>Ac  <ChevronRight /></p></NavLink>
                        <NavLink to="/electronics/comps" activeClassName="active"><p className='flex justify-between'>Computers  <ChevronRight /></p></NavLink>
                        <NavLink to="/electronics/fridges" activeClassName="active"><p className='flex justify-between'>Fridges  <ChevronRight /></p></NavLink>
                        <NavLink to="/electronics/kitchens" activeClassName="active"><p className='flex justify-between'>Kitchen  <ChevronRight /></p></NavLink>
                        <NavLink to="/electronics/mobiles" activeClassName="active"><p className='flex justify-between'>Mobiles  <ChevronRight /></p></NavLink>
                        <NavLink to="/electronics/promobiles" activeClassName="active"><p className='flex justify-between'>Pro Mobiles  <ChevronRight /></p></NavLink>
                        <NavLink to="/electronics/speakers" activeClassName="active"><p className='flex justify-between'>Speakers  <ChevronRight /></p></NavLink>
                        <NavLink to="/electronics/tv" activeClassName="active"><p className='flex justify-between'>Tv  <ChevronRight /></p></NavLink>
                    </div>
                </li>
                <NavLink to='/books' activeClassName='active'><li className="px-2 py-[17px] text-[18px]  transition cursor-pointer "><Book size={18} /> Books <ChevronDown /></li></NavLink>
                <NavLink to='/watches' activeClassName='active'><li className="px-2 py-[17px] text-[18px]  transition cursor-pointer "><Watch size={18} /> Watches <ChevronDown /></li></NavLink>
            </ul>
        </div>
    )
}

export default Category_Bar;


