import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav>
      <ul className="flex flex-col gap-[0.8rem]">
        <li>
          <NavLink to="/dashboard" className="">
            {/* <HiOutlineHome /> */}
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/bookings" className="">
            {/* <HiOutlineCalendarDays /> */}
            <span>Bookings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
