import {Navbar, Welcome, Footer, Services, Transaction} from './components';
const App = () => {
  return (
    <div className="App">
  <div className='min-h-screen'>
   <div className='gradient-bg-welcome wrapp-welcome'>
   <Navbar></Navbar>
     <Welcome>
      
     </Welcome>
     
   </div>

   <div className='spacer'></div>

  
   <Transaction/>
   <Footer/>


  </div>
    </div>
  )
}

export default App;
