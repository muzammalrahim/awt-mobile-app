import React, { useEffect, useState } from "react";
import useGetComplain from "../apiHooks/complain/useGetComplain";
import ComplainTable from "../complain/complain-table";
export const ComplainList = ({ admin, official }) => {
  const { fetchComplains, loading, complains } = useGetComplain();

  useEffect(() => {
    fetchComplains();
  }, []);

  // Making Table Arrays
  const [headings, setheadings] = useState([
    "Categories",
    "Subcategories",
    "Description",
    "Date",
    "Status",
  ]);
  const [show, setshow] = useState({
    id: "",
    display: false,
  });

  if (loading) {
    return <span>Loading...</span>;
  }

  // useEffect(() => {
  //   fetchComplains();
  // }, []);

  return (
    <div>
      {/* <SelectStatus fetchComplains={fetchComplains} />
      <h1 className="py-5 text-center text-2xl ">
        You have {pending} Pending Complains
      </h1> */}
      <ComplainTable
      fetchComplains={fetchComplains}
        headings={headings}
        complains={complains}
        show={show}
        setshow={setshow}
      />
    </div>
  );
};

export default ComplainList;
