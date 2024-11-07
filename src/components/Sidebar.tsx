import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <aside className="bg-light-grey-0 px-6 py-8 border-r border-light-grey-100 row-span-full flex flex-col gap-[3.2rem]">
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
