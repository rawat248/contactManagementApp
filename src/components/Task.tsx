import { FormEventHandler, useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { editContact, deleteContact } from "../state";

interface Task {
  id: string; 
  FirstName: string;
  LastName: string;
  Status: string;
}

const Task = ({ tasks }: { tasks: Task }) => {
  const dispatch = useDispatch();

  const [modalEdit, setModalEdit] = useState<boolean>(false);
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(tasks.FirstName);
  const [description, setDescription] = useState<string>(tasks.LastName);
  const [status, setStatus] = useState<string>(tasks.Status);

  const handleEditSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(
      editContact({
        id: tasks.id,
        FirstName: taskToEdit,
        LastName: description,
        Status: status,
      })
    );

    setModalEdit(false);
  };
  const handleDeleteTask = (id: string) => {
    dispatch(deleteContact(id));
    setModalDelete(false);
  };

  return (
    <tr key={tasks.id} className="bg-base-200">
      <td className="w-200">{tasks.FirstName}</td>
      <td className="w">{tasks.LastName}</td>
      <td className="w">{tasks.Status}</td>
      <td className="flex gap-10">
        <BiEdit
          cursor="pointer"
          className="text-blue-500"
          size={25}
          onClick={() => setModalEdit(true)}
        />
        <div className={`modal ${modalEdit ? "modal-open" : ""}`}>
          <div className="modal-box relative">
            <label
              onClick={() => setModalEdit(false)}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <form onSubmit={handleEditSubmit}>
              <h3 className="font-bold text-lg">Edit task</h3>
              <div className="modal-action">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                  value={taskToEdit}
                  onChange={(e) => setTaskToEdit(e.target.value)}
                />
                <textarea
                  placeholder="Description"
                  className="input input-bordered w-full"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Status"
                  className="input input-bordered w-full"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <BiTrash
          cursor="pointer"
          className="text-red-500"
          size={25}
          onClick={() => setModalDelete(true)}
        />
        <div className={`modal ${modalDelete ? "modal-open" : ""}`}>
          <div className="modal-box relative">
            <label
              onClick={() => setModalDelete(false)}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="text-lg">
              Are you sure you want to delete this task?
            </h3>
            <div className="modal-action">
              <button
                onClick={() => handleDeleteTask(tasks.id)}
                className="btn"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Task;
