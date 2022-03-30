import { Outlet } from 'react-router-dom';
import CategoryList from "../components/CategoryList";


export default function Home () {
  

  return (
    <div>
      <CategoryList />
      <Outlet />
    </div>
  );
};