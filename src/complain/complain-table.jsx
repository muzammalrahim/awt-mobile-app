import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import Navbar from "../layout/navbar";
import { Route, useNavigate } from "react-router-dom";
import { Button, Option, Select, Textarea } from "@material-tailwind/react";
import useAddReview from "../apiHooks/complain/useAddReview";
import Feedback from "./feedback";

const ComplainTable = ({
  fetchComplains,
  headings,
  complains,
  show,
  setshow,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [openCardId, setOpenCardId] = useState(null);
  // const [review, setReview] = useState("");\
  console.log(complains);
  const handleOpenDialog = (cardId) => {
    setIsDialogOpen(true);
    setOpenCardId(cardId);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setOpenCardId(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "gray";
      case "In-Progress":
        return "orange";
      case "Fixed":
        return "green";
      case "Not-Fix":
        return "red";
      default:
        return "black";
    }
  };
  const navigate = useNavigate();
  const handleAddComplain = () => {
    navigate("/complain");
  };
  return (
    <>
      <Navbar />
      <div className="p-5">
        <Button
          variant="outlined"
          color="green"
          className="w-full h-10 "
          onClick={handleAddComplain}
        >
          Add new complaint
        </Button>
      </div>
      <div className="px-5">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                {!complains && <span>Loading...</span>}
                {complains?.length === 0 && (
                  <span className="text-3xl text-gray-700">
                    No Complains Found
                  </span>
                )}

                <div className="">
                  {complains?.map((item) => (
                    <div
                      key={item?._id}
                      className="bg-gray-100 dark:bg-neutral-900 shadow rounded-lg p-4 border-t-2 border-b-2 border-gray-200 mb-5"
                    >
                      <div className="flex items-baseline gap-5 text-[24px] ">
                        <div className="flex items-center justify-center w-12 h-12 bg-white text-gray-600 text-xl font-bold  mb-4">
                          {item.subcategory.name.charAt(0)}
                        </div>
                        <div className="grow font-bold">
                          {item.subcategory.name}

                          <div className=" text-black-500 text-[14px] ">
                            {formatDistanceToNow(new Date(item.date), {
                              addSuffix: false,
                            })}
                          </div>
                        </div>
                        <div className="">
                          <div className="flex justify-end text-[16px]">
                            <span
                              style={{
                                color: getStatusColor(item?.status?.name),
                                fontWeight: "600",
                              }}
                            >
                              ({item?.status?.name})
                            </span>
                          </div>

                          {item.status.name === "Fixed" ||
                          item.status.name === "Not-Fix" ? (
                            <div
                              className="flex justify-center"
                              onClick={() => handleOpenDialog(item._id)}
                            >
                              {!item.review && (
                                <span className="text-blue-400 text-normal text-[14px]">
                                  Add Review
                                </span>
                              )}
                            </div>
                          ) : null}
                          {item.status.name === "In-Progress" ? (
                            <div
                              className="flex justify-center"
                            >
                              {!item.review && (
                                <span className="text-yellow-900 text-normal text-[12px]">
                                  <span className="font-bold text-black">Assigned to </span>{item?.worker?.name}
                                </span>
                              )}
                            </div>
                          ) : null}

                          {item.review && (
                            <span className="text-green-600 text-normal text-[14px]">
                              Submitted
                            </span>
                          )}
                        </div>
                      </div>
                      {isDialogOpen && openCardId === item._id && (
                        <Feedback
                          fetchComplains={fetchComplains}
                          handleCloseDialog={handleCloseDialog}
                          complainId={item._id}
                          userId={item.userId}
                        />
                      )}
                      {!isDialogOpen && (
                        <div className="text-black px-5">
                          {item.description?.substring(0, 40)}
                        </div>
                      )}

                      {!isDialogOpen &&
                        show.id === item._id &&
                        show.display && (
                          <div className="px-5 text-black">
                            {item.description?.substring(40)}
                          </div>
                        )}

                      {!isDialogOpen && item.description.length > 40 && (
                        <div
                          onClick={() =>
                            setshow((prev) => ({
                              ...prev,
                              display:
                                show.id === item._id ? !show.display : true,
                              id: item._id,
                            }))
                          }
                          className="px-5 text-sm text-blue-800 cursor-pointer"
                        >
                          {show.id === item._id && show.display
                            ? "See Less"
                            : "...See More"}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComplainTable;
