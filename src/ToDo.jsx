
// conditional rendaring option 6 variable
export default function ToDo({task, isDone}){
 
  let listItem;
   if(isDone){
    listItem = <li>Finish: {task} </li>
   }
   else{
      return <li>work on: {task} </li>
     }
     return listItem;

 }
// // conditional rendaring option 5 ||
// export default function ToDo({task, isDone}){
 
//    return ( 
//     // ja kora hoy ni take korte bolbe means true hobe 
//    <li> {task} {isDone || ':Do it'} </li>
//    )

//  }

// conditional rendaring option 4 &&
// export default function ToDo({task, isDone}){
 
//    return ( 
//    <li> {task} {isDone && ':Done'} </li>
//    )

//  }

// // conditional rendaring option 3 ternary
// export default function ToDo({task, isDone}){
 
//    return <li> {isDone ? ' finished': 'work on:' } {task}</li>

//  }


// conditional rendaring option 2
// export default function ToDo({task, isDone}){
//  if(isDone){
//   return <li>finished: {task}</li>
//  }
//   return <li>work on: {task} </li>

// }
// conditional rendaring option 1
// export default function ToDo({task, isDone}){
//  if(isDone === true){
//   return <li>finished: {task}</li>
//  }
//  else{
//   return <li>work on: {task} </li>
//  }
// }

// export default function ToDo({task}){
//   return (
//     <li>Task: {task}</li>
//   )
// }