import React, { useEffect, useState } from "react";
import { Button, Textarea, navbar } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import useGetCategory from "../apiHooks/Category/useGetCategory";
import useAddComplain from "../apiHooks/complain/useAddComplain";
import { useUserContext } from "../context/UserContext";
import Navbar from "../layout/navbar";
export const Complain = () => {
  const { user } = useUserContext();
  const user1 = JSON.parse(localStorage.getItem("user"));

  const { data, getCatogery } = useGetCategory();
  const addComplain = useAddComplain();
  useEffect(() => {
    getCatogery();
  }, []);
  const [name, setname] = useState(user1?.name);
  const [email, setEmail] = useState(user1?.email);
  const [category, setCategory] = useState("");
  const [subcategory, setSubCategory] = useState("");
  const [complainType, setComplainType] = useState("");
  const [description, setDescription] = useState("");
  // SubCategory List
  const [subcategories, setsubcategories] = useState([]);

  const handleComplainTypeChange = (e) => {
    setComplainType(e);
  };
  // Making Categories For Selectors
  const handleParentSelect = (e) => {
    setsubcategories([]);
    const subCat = data?.find((o) => o.name === e);
    if (subCat) {
      setsubcategories(subCat?.subcategories);
    }
    setCategory(e);
    // setComplainType(e);
  };
  // Handling Form Submit

  const handleSubmit = (e) => {
    e.preventDefault();
    // Getting Category Id
    const { _id } = data?.find((o) => o.name === category);
    console.log(e);
    addComplain({
      name,
      category: _id,
      subcategory,
      email,
      complainType,
      description,
    });
    // Reset the form fields
    setCategory("");
    setSubCategory("");
    // setEmail("");
    // setDescription("");
  };
  return (
    <>
      <Navbar />
      <div className="p-5 ">
        <form
          className="space-y-7 p-5 border border-green-500 bg-gray-50"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="text-teal-600 font-bold text-sm">Name:</label>
            <Input
              value={name}
              onChange={(e) => setname(e.target.value)}
              size="lg"
              disabled
            />
          </div>
          <div>
            <label className="text-teal-600 font-bold text-sm">Email:</label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="lg"
              disabled
            />
          </div>
          {/* Parent Selector */}
          <div>
            <Select
              defaultValue={category}
              onChange={(e) => handleParentSelect(e)}
              label="Select Category"
              size="lg"
              color="teal"
            >
              {data?.map((category, index) => (
                <Option key={index} value={category?.name}>
                  {category?.name}
                </Option>
              ))}
            </Select>
          </div>

          {/* Child Selector */}

          <div>
            <Select
              disabled={subcategories?.length > 0 ? false : true}
              onChange={(e) => setSubCategory(e)}
              label="Select Sub Category"
              size="lg"
              color="teal"
            >
              {subcategories?.map((category, index) => (
                <Option key={index} value={category?._id}>
                  {category?.name}
                </Option>
              ))}
            </Select>
          </div>

          <div>
            <Select
              label="Select Complain Type"
              size="lg"
              value={complainType}
              onChange={handleComplainTypeChange}
              color="teal"
            >
              <Option value="Resident">Residential</Option>
              <Option value="Commercial">Commercial</Option>
            </Select>
          </div>

          <Textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            label="Description:"
            size="lg"
            style={{ height: "100px", resize: "vertical" }}
            color="teal"
          />

          <Button type="submit" color="teal">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Complain;
