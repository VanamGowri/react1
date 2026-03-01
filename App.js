import Link from "./Bookstore/Link";
import {BrowserRouter} from "react-router-dom";
import Welcome from "./Bookstore/Welcome";

function App(){
    return(
        <>
        <BrowserRouter>
        <Welcome/>
        <Link />
        
        </BrowserRouter>
        </>
    )
}
export default App;
// // import Api integration from "./UsersTable";

// // function App() {
// //   return (
// //     <div>
// //       <h1>Users Data</h1>
// //       <UsersTable />
// //     </div>
// //   );
// // }

// // export default App;
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";

// import Navbar from "./Components/Navbar";
// import Signup from "./Pagess/Signup";
// import Login from "./Pagess/Login";
// import Dashboard from "./Pagess/Dashboard";
// import SubmitTicket from "./Pagess/SubmitTicket";
// import MyTickets from "./Pagess/MyTickets";
// import AdminDashboard from "./Pagess/AdminDashboard";

// function App() {

//   const [employees, setEmployees] = useState([]);
//   const [tickets, setTickets] = useState([]);
//   const [loggedUser, setLoggedUser] = useState(null);
//   const [admin, setAdmin] = useState(false);

//   return (
//     <BrowserRouter>
//       <Navbar loggedUser={loggedUser} setLoggedUser={setLoggedUser} setAdmin={setAdmin} />

//       <Routes>

//         <Route path="/" element={<Login employees={employees} setLoggedUser={setLoggedUser} setAdmin={setAdmin} />} />

//         <Route path="/signup" element={<Signup employees={employees} setEmployees={setEmployees} />} />

//         <Route path="/dashboard" element={<Dashboard loggedUser={loggedUser} />} />

//         <Route path="/submit" element={
//           <SubmitTicket tickets={tickets} setTickets={setTickets} loggedUser={loggedUser}/>
//         }/>

//         <Route path="/mytickets" element={
//           <MyTickets tickets={tickets} setTickets={setTickets} loggedUser={loggedUser}/>
//         }/>

//         <Route path="/admin" element={<AdminDashboard tickets={tickets} setTickets={setTickets} employees={employees}/>
//         }/>

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
