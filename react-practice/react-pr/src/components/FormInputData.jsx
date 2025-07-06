import React, { useState, useEffect } from "react";
import { db } from "../firebase";

import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

const FormInputData = () => {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  const [editId, setEditId] = useState(null);

  const aniCollection = collection(db, "data");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      aniCollection,
      (snapshot) => {
        const newData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(newData);
      },
      (err) => {
        console.error(err);
      }
    );
    return () => {
      unsubscribe();
    };
  }, [aniCollection]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddData = async () => {
    await addDoc(aniCollection, form)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(aniCollection, id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleSave = async (id) => {
    try {
      await updateDoc(doc(aniCollection, id), form);
      setEditId(null);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    setEditId(null);
    setForm({});
    console.log("cancel");
  };

  console.log(editId);

  return (
    <div>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">เพิ่มข้อมูล</th>
            <th scope="col">
              <input
                className="form-control"
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Name"
              />
            </th>
            <th scope="col">
              <input
                className="form-control"
                onChange={handleChange}
                type="number"
                name="age"
                placeholder="Age"
              />
            </th>
            <th scope="col">
              <input
                className="form-control"
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Email"
              />
            </th>
            <th scope="col">
              <button className="btn btn-primary" onClick={handleAddData}>
                Data
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>
                {editId === item.id ? (
                  <>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="name"
                      value={form.name !== undefined ? form.name : item.name}
                      placeholder="Name"
                    />
                  </>
                ) : (
                  item.name
                )}
              </td>

              <td>
                {editId === item.id ? (
                  <>
                    <input
                      onChange={handleChange}
                      type="number"
                      name="Age"
                      value={form.age !== undefined ? form.age : item.age}
                      placeholder="Age"
                    />
                  </>
                ) : (
                  item.age
                )}
              </td>
              <td>
                {editId === item.id ? (
                  <>
                    <input
                      onChange={handleChange}
                      type="text"
                      name="email"
                      value={form.email !== undefined ? form.email : item.email}
                      placeholder="email"
                    />
                  </>
                ) : (
                  item.email
                )}
              </td>
              <td>
                {editId === item.id ? (
                  <>
                    <button
                      className="btn btn-outline-success"
                      onClick={() => handleSave(item.id)}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleCancel()}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-warning"
                      onClick={() => setEditId(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormInputData;