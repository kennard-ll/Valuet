import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
   return ( 
   <>
   <header className="h-[88px] flex justify-between items-center borderhead">
   <div className="flex items-center w-[299px] h-[32px] bg-[#161245] rounded-[25px] shadow-inpShadow pr-[7px]">
   <input type="text" className='w-[98%] bg-transparent outline-none px-[10px] text-[14px] text-[#fff] font-openSans'/>
   <SearchIcon className='invert-[100%] cursor-pointer'/>
   </div>
   <div className="mail w-[36px] h-[33px] bg-contain bg-no-repeat cursor-pointer"></div>
   </header>
   </> );
}
 
export default Header;