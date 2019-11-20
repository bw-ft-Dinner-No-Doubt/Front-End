// import React from "react";
// import Slot from "react-slot-machine";
// import RestaurantList from "./RestaurantList";


// const list = [
//   { name: '? ? ?', color: '#000' },
//   { name: 'Sakuranomiya\nMaika', color: '#f05274' },
//   { name: 'Hinata\nKaho', color: '#48cefb' },
//   { name: 'Hoshikawa\nMahuyu', color: '#fedf38' },
//   { name: 'Amano\nMiu', color: '#ba5ad1' },
//   { name: 'Kanzaki\nHideri', color: '#5bd096' },
//   { name: 'Dino', color: '#9fa0a0' },
//   { name: 'Akiduki\nKouyou', color: '#50b15c' },
// ];

// class SlotMachine extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       target: Math.round(Math.random()*10),
//       times: 2,
//       duration: 3000,
//       turn: false,
//     };
//   }
//   render() {
//     return (
//       <div>
       
//         <Slot
//           className="slot"
//           duration={this.state.duration}
//           target={this.state.turn ? this.state.target : 0}
//           times={this.state.times}
//         >
//           {props.restaurantList.map(
//             restaurant  => (
//               <div className="slot-style">
//                 {restaurant.name}
//               </div>
//           ))}
//         </Slot>
//         <h2>List</h2>
//         <table>
//           {list.map(({ name, color }, i) => (
//             <tr style={{ color }}>
//               <th>{i}</th>
//               <td>{name}</td>
//             </tr>
//           ))}
//         </table>
//       </div>
//     );
//   }
// }
// export default SlotMachine;