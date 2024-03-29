"use client";

import { User } from "@prisma/client";
import UserBox from "./UserBox";
import { UserList } from "@/types/User";

interface UserListProps {
  items: UserList;
}

const UserList: React.FC<UserListProps> = ({ items }) => {
  return (
    <aside
      className="
        fixed 
        inset-y-0 
        pb-20
        lg:pb-0
        lg:left-20 
        lg:w-80 
        lg:block
        overflow-y-auto 
        border-r 
        border-gray-200
        block w-full left-0
      "
    >
      <div className="px-5">
        <div className="flex-col">
          <div
            className="
              text-2xl 
              font-bold 
              text-neutral-800 
              py-4
            "
          >
            People
          </div>
        </div>

        {items?.users?.map((item, key) => (
          <>
            <UserBox key={key} data={item} />
          </>
        ))}
      </div>
    </aside>
  );
};

export default UserList;
