import { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setTodo] = useState("");
//   const [toDoError, setToDoError] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDoError("");
//     setTodo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (toDo.length < 10) {
//       return setToDoError("To do should be longer");
//     }
//     console.log("Submit");
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//         <button>Add</button>
//         {toDoError !== "" ? toDoError : null}
//       </form>
//     </div>
//   );
// }

function ToDoList() {
  const { register, handleSubmit } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("Email", { required: true })}
        required
        placeholder="Email"
      />
      <input
        {...register("firstName", { required: true })}
        placeholder="First Name"
      />
      <input
        {...register("lastName", { required: true })}
        placeholder="Last Name"
      />
      <input
        {...register("username", { required: true, minLength: 10 })}
        placeholder="Username"
      />
      <input
        {...register("password", { required: true })}
        placeholder="Password"
      />
      <input
        {...register("password1", { required: true })}
        placeholder="Password1"
      />
      <button>Add</button>
    </form>
  );
}

export default ToDoList;
