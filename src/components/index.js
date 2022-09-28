import axios from "axios";

const baseURL = "http://localhost:3001/profile";

export const createResource = async (state) => {
  try {
    await axios.post(`${baseURL}`, {
      name: state.name,
      company: state.company,
      designation: state.designation,
      experience: state.experience,
      current_ctc: state.current_ctc,
      expected_ctc: state.expected_ctc,
    });
  } catch (error) {
    return <h1>Page not found</h1>;
  }
};

export const updatingEntry = async (state) => {
  await axios.put(`${baseURL}/${state.id}`, {
    name: state.name,
    company: state.company,
    designation: state.designation,
    experience: state.experience,
    current_ctc: state.current_ctc,
    expected_ctc: state.expected_ctc,
  });
};

export const fetchData = async () => {
  try {
    const { data } = await axios.get(`${baseURL}`);
    return data;
  } catch (error) {
    return <h3>Data not found</h3>;
  }
};

export const deleteEntry = async (userId) => {
  try {
    await axios.delete(`${baseURL}/${userId}`);
    return true;
  } catch (error) {
    return <h3>Data not deleted</h3>;
  }
};
