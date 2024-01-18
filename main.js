AOS.init();
       
   class Main extends React.Component {
         render() {
           const img = "https://qu.ax/SEeO.jpeg"
           return (
             <div className = "main">
               <h1 id = "main"> Selamat Datang </h1>
             </div>
           )
      }
   }
   
ReactDOM.render(<Main/>, document.getElementById("app"))