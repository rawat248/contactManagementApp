import React, { ChangeEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../state/index";
import RootState from "../state/rootState";
import Task from "./Task";

interface ContactFormValues {
  id: string;
  FirstName: string;
  LastName: string;
  Status: string;
}

const defaultValue: ContactFormValues = {
  id: "",
  FirstName: "",
  LastName: "",
  Status: "",
};

const Contact: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [user, setUser] = useState<ContactFormValues>(defaultValue);

  const dispatch = useDispatch();

  const contacts = useSelector((state: RootState) => state.contact.list);
  console.log(contacts);

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission
    console.log("Before reset:", user);

    dispatch(addContact(user)); // Dispatch the action to add the contact
    setOpenModal(false); // Close the modal after submitting
    setUser((prevUser) => ({
      ...prevUser,
      id: "",
      FirstName: "",
      LastName: "",
      Status: "",
    })); // Reset the form
  };
  useEffect(() => {
    console.log("After reset:", user);
  }, [user]);
  return (
    <div>
      <div className="text-center mt-5">
        <button
          className="btn btn-active btn-secondary"
          onClick={() => setOpenModal(true)}
        >
          Create Contact
        </button>
      </div>

      <div className={`modal ${openModal ? "modal-open" : ""}`}>
        <div className="modal-box  relative">
          <label
            onClick={() => setOpenModal(false)}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleSubmit}>
            <h3 className="font-bold text-lg">Create Contact</h3>
            <div className="modal-action">
              <div>
                <label>First Name:</label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                  onChange={(e) => onValueChange(e)}
                  name="FirstName"
                  value={user.FirstName}
                />
              </div>

              <div>
                <label>Last Name:</label>
                <input
                  type="text"
                  placeholder="Status"
                  className="input input-bordered w-full"
                  onChange={(e) => onValueChange(e)}
                  name="LastName"
                  value={user.LastName}
                />
              </div>
              <div>
                {" "}
                <p>Status</p>
                <label>Active</label>
                <input
                  type="radio"
                  value="active"
                  onChange={(e) => onValueChange(e)}
                  name="Status"
                  checked={user.Status === "active" ? true : false}
                />
                <label>Inactive</label>
                <input
                  type="radio"
                  value="inactive"
                  onChange={(e) => onValueChange(e)}
                  name="Status"
                  checked={user.Status === "inactive" ? true : false}
                />
              </div>

              <div>
                <button type="submit" className="btn mt-1">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="overflow-x-auto">
        {contacts.length === 0 ? ( // Check if contacts array is empty
          <div className="text-center mt-4 font-bold">
            <p>
              No contacts found. Please add contact from create contact button.
            </p>
          </div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Task key={contact.id} tasks={contact} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Contact;
