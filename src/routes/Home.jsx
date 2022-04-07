import { Outlet } from 'react-router-dom';
import DirectoryList from "../components/DirectoryList";


export default function Home () {
  

  return (
    <div>
      <DirectoryList />
      <Outlet />
    </div>
  );
};