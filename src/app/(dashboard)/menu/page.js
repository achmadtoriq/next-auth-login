import MenuList from "@/components/dashboard/pages/MenuList";
import { getMenus } from '@/lib/data-mysql';

const UserPage = async() => {
  const menus = await getMenus();
  return (
    <>
      <h1 className="text-2xl font-bold">Menu List</h1>
      <MenuList initValue={menus}/>
    </>
  );
};

export default UserPage;
