import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import Avatar from "@/components/ui/avatar";
import { User } from "@/types/User";

interface UserBoxProps {
  data: User;
}

const UserBox: React.FC<UserBoxProps> = ({ data }): JSX.Element => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);

    setIsLoading(false);
  }, []);
  return (
    <>
      {/* {isLoading && <LoadingModal />} */}
      <div
        onClick={handleClick}
        className="
          w-full 
          relative 
          flex 
          items-center 
          space-x-3 
          bg-gray-100 
          p-3 
          hover:bg-neutral-100
          rounded-lg
          transition
          cursor-pointer
        "
      >
        {/* <Avatar user={data} /> */}

        <div className="min-w-0 flex-1">
          <div className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            <div className="flex justify-between items-center mb-2 pb-2">
              <p className="text-sm font-medium text-gray-900">
                {data.firstName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBox;
