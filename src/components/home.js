import { useState, useEffect } from "react";
import {
  createResource,
  updatingEntry,
  fetchData,
  deleteEntry,
} from "../components/index";
const initialState = {
  name: "",
  company: "",
  designation: "",
  experience: "",
  current_ctc: "",
  expected_ctc: "",
  id: "",
};

// const dummyData = [
//   {
//     name: "mona",
//     company: "tcs",
//     designation: "system engineer",
//     experience: "2",
//     current_ctc: "8 lpa",
//     expected_ctc: "10 lpa",
//     id: 2,
//   },
// ];

const Home = () => {
  // const [employeeData, setEmployeeData] = useState(dummyData);
  const [employeeData, setEmployeeData] = useState([]);
  const [data, setData] = useState(initialState);
  // const [newEmployee, editEmployeeData] = useState(initialState);
  //<h1>Hello world</h1>
  console.log("employeeData", employeeData);

  useEffect(() => {
    // debugger
    fetchEmployeeData();
  }, [employeeData.length]);

  const onChangeHandler = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const submitData = async () => {
    const {
      name,
      company,
      designation,
      experience,
      current_ctc,
      expected_ctc,
    } = data;
    if (
      validate(name) ||
      validate(company) ||
      validate(designation) ||
      validate(experience) ||
      validate(current_ctc) ||
      validate(expected_ctc)
    ) {
      alert("Please fill all the mandatory details");
      return;
    }
    //console.log(employeeData.id);
    //   if(!employeeData.id){
    // employeeData.id = 2
    if (!data.id) {
      await createResource(data);
      alert("Details submitted successfully");
      // console.log(employeeData.id);
      console.log(name);
      console.log(company);
      console.log(designation);
      console.log(experience);
      console.log(current_ctc);
      console.log(expected_ctc);
    } else {
      await updatingEntry(data);
      alert("User Details updated successfully");

      console.log(name);
      console.log(company);
      console.log(designation);
      console.log(experience);
      console.log(current_ctc);
      console.log(expected_ctc);
    }
    fetchEmployeeData();
    setData(initialState);
  };
  const validate = (str) => {
    if (str === "") return true;
    else return false;
  };
  const fetchEmployeeData = async () => {
    const data = await fetchData();
    console.log("data", data);
    setEmployeeData(data);
  };

  const editEmployee = (data) => {
    console.log(data);
    setData(data);
  };

  const deleteEmployee = async (userId) => {
    await deleteEntry(userId);
    alert("User Details Deleted Successfully");
    fetchEmployeeData();
  };
  // console.log(data,"setEmployeeData")
  const { name, company, designation, experience, current_ctc, expected_ctc } =
    data;

  return (
    <>
      <h4>Please fill the given details :- </h4>
      Name =
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChangeHandler}
      ></input>
      <br></br>
      <br></br>
      Company =
      <input
        type="text"
        name="company"
        value={company}
        onChange={onChangeHandler}
      ></input>
      <br></br>
      <br></br>
      Designation =
      <input
        type="text"
        name="designation"
        value={designation}
        onChange={onChangeHandler}
      ></input>
      <br></br>
      <br></br>
      Experience =
      <input
        type="text"
        name="experience"
        value={experience}
        onChange={onChangeHandler}
      ></input>
      <br></br>
      <br></br>
      Current CTC =
      <input
        type="text"
        name="current_ctc"
        value={current_ctc}
        onChange={onChangeHandler}
      ></input>
      <br></br>
      <br></br>
      Expected CTC =
      <input
        type="text"
        name="expected_ctc"
        value={expected_ctc}
        onChange={onChangeHandler}
      ></input>
      <br></br>
      <br></br>
      <input type="button" value="Submit" onClick={() => submitData()}></input>
      <br></br>
      <br></br>
      <h3>Employee Data Records</h3>
      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Company</th>
          <th>Designation</th>
          <th>Experience</th>
          <th>Current CTC</th>
          <th>Expected CTC</th>
          <th>Action</th>
        </thead>
        <tbody>
          {employeeData?.map((res, index) => (
            <tr key={index}>
              <td>{res.id}</td>
              <td>{res.name}</td>
              <td>{res.company}</td>
              <td>{res.designation}</td>
              <td>{res.experience}</td>
              <td>{res.current_ctc}</td>
              <td>{res.expected_ctc}</td>
              <td>
                <input
                  type="button"
                  value="Edit"
                  onClick={() => editEmployee(res)}
                ></input>
                <input
                  type="button"
                  value="Delete"
                  onClick={() => deleteEmployee(res.id)}
                ></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
