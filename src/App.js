import logo from './logo.svg';
import './App.css';
import Footer from './Components/footer/Footer';
import Profile from './Components/profile/Profile';

function App() {
  return (
    <div className="relative overflow-hidden h-[100vh] m-auto max-w-[330px] min-w-[250px]">
    <Profile/>
   <Footer/>

       
    </div>
  );
}

export default App;
