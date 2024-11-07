import { HiOutlineSun } from "react-icons/hi";
import { Input } from "./ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

function Header() {
  return (
    <header className="p-[1.2rem_4.8rem] border-b bg-light-grey-0">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <HiOutlineSun />
        </div>
        <div>
          <Input type="search" placeholder="Search" />
        </div>
        <div className="w-8 h-8">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}

export default Header;
