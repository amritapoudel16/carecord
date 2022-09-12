import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const API = process.env.REACT_APP_SERVER_URL;

const apicall = async ({ method = "get", url = "", data = {} }) => {
  let token = localStorage.getItem("token");
  let res;
  try {
    res = await axios({
      method: method,
      url: API + url,
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    toast.error(error.message);
  }

  if (method !== "get") {
    if (res.status === 200 || 201) {
      toast.success("success");
    }
  }

  return res;
};

export default apicall;
