import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-black text-white pl-6 pr-3 py-2 navbar">
      <a href="#" className="font-semibold text-lg flex">
        <Image
          src="/img/brand-icon.png"
          alt="brand-icon"
          width={25}
          height={25}
        />
        <span>ramos</span>
      </a>
      <ul className="flex justify-between space-x-10 text-sm bg-neutral-800 p-4 inner-nav">
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">Reports</a>
        </li>
        <li>
          <a href="#">Documents</a>
        </li>
        <li>
          <a href="#">History</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul>

      <button className="text-black bg-white px-10 py-4 text-sm nav-btn">
        Sign Up
      </button>
    </div>
  );
};

export default Navbar;
