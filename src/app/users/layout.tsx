import getUsers from "@/actions/getUsers";
import UserList from "@/components/pageContainers/users/UserList";
import Sidebar from "@/components/ui/sidebar/Sidebar";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const users = await getUsers();
  const response: any = await fetch(`https://dummyjson.com/users?limit=3`);
  const data: any = await response.json();
  console.log("Data =>", data);

  return (
    <Sidebar>
      <div className="bg-white">
        <UserList items={data} />
        {children}
      </div>
    </Sidebar>
  );
}
