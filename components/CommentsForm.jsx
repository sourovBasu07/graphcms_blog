import React, { useState, useEffect } from "react";
import { submitComment } from "../services";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    storeData: false,
  });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initialFormData = {
      name: window.localStorage.getItem("name"),
      email: window.localStorage.getItem("email"),
      storeData:
        window.localStorage.getItem("name") ||
        window.localStorage.getItem("email"),
    };
    setFormData(initialFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handlePostSubmission = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = { name, email, comment, slug };

    if (storeData) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
    }

    submitComment(commentObj).then((res) => {
      if (res.createComment) {
        if (!storeData) {
          formData.name = "";
          formData.email = "";
        }
        formData.comment = "";
        setFormData((prevFormData) => ({
          ...prevFormData,
          ...formData,
        }));
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl font-semibold border-b pb-4 mb-8">
        Leave a Reply
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          value={formData.comment}
          onChange={onInputChange}
          className="w-full h-40 rounded-lg bg-gray-100 text-gray-700 outline-none focus:ring-2 focus:ring-gray-700 p-4"
          name="comment"
          placeholder="Comment"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={onInputChange}
          className="w-full outline-none rounded-lg bg-gray-100 text-gray-700 px-4 py-2 focus:ring-2 focus:ring-gray-200"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={onInputChange}
          className="w-full outline-none rounded-lg bg-gray-100 text-gray-700 px-4 py-2 focus:ring-2 focus:ring-gray-200"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="">
          <input
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
            checked={formData.storeData}
            onChange={onInputChange}
          />
          <label htmlFor="storeData" className="text-gray-500 cursor-pointer">
            Save my name, email in the browser for the next time I comment
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">All fields are mandatory</p>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handlePostSubmission}
          className="inline-block font-medium text-lg text-white bg-pink-600 hover:bg-indigo-900 rounded-full px-8 py-3 transition duration-500 ease-linear cursor-pointer"
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="float-right font-semibold text-xl text-green-500 mt-3">
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
