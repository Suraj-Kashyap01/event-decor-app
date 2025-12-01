function Header() {
  return (
    <header className="w-full bg-white shadow-md">
      <nav className="max-w-6xl mx-4 flex items-center justify-between p-4">

        {/* Left Side: Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <img height={133} width={190}  src="https://pioneereventshq.com/wp-content/uploads/2024/05/WHOLESALE_WEDDING_DECOR__1_-removebg-preview-e1738877458254.png" alt="logo image"/>
        </div>

        {/* Center: Nav Links */}
      
        <ul className="hidden md:flex gap-6 text-gray-700 font-Cabin font-bold uppercase">
          <li className="cursor-pointer hover:text-blue-600">Home</li>
          <li className="cursor-pointer hover:text-blue-600">Products</li>
          <li className="cursor-pointer hover:text-blue-600">Categories</li>
          <li className="cursor-pointer hover:text-blue-600">Contact</li>
        </ul>

        {/* Right Side: Buttons */}
        <div className="hidden md:flex gap-4 ">
         
          
          <div className="">
            <img src="https://pioneereventshq.com/wp-content/uploads/2025/03/hello@pioneereventshq.com_-2.png" alt="info." />
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-3xl cursor-pointer">
          ☰
        </div>

      </nav>
    </header>
  );
}

export default Header;
