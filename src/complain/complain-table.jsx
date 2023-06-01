import React from "react";
import { formatDistanceToNow } from "date-fns";
const ComplainTable = ({ headings, complains, show, setshow }) => {
  return (
    <>
      <div>
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
                {/* <table className="min-w-full text-left text-sm font-light">
                  <thead className="dark:border-neutral-500 border-b font-medium">
                    <tr>
                      {headings?.map((e) => (
                        <th>{e}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {complains?.map((item) => (
                      <tr
                        key={item?._id}
                        className="dark:border-neutral-500 border-b"
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {item.category.name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {item.subcategory.name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <span>{item.description?.substring(0, 40)}</span>

                          {show.id === item._id && show.display && (
                            <span>{item.description?.substring(40)}</span>
                          )}

                          {item.description.length > 40 && (
                            <span
                              onClick={() =>
                                setshow((prev) => ({
                                  ...prev,
                                  display:
                                    show.id === item._id ? !show.display : true,
                                  id: item._id,
                                }))
                              }
                              className="text-sm text-blue-800"
                            >
                              {show.id === item._id && show.display
                                ? "See Less"
                                : "...See More"}
                            </span>
                          )}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {formatDistanceToNow(new Date(item.date), {
                            addSuffix: true,
                          })}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div>{item?.status?.name}</div>
                          <ComplainStatus name={item?.status?.name} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table> */}
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {complains?.map((item) => (
                    <div
                      key={item?._id}
                      className="bg-white dark:bg-neutral-900 shadow rounded-lg p-4"
                    >
                      <div className="font-medium">{item.subcategory.name}</div>
                      <div className="text-gray-500">
                        {item.description?.substring(0, 40)}
                      </div>

                      {show.id === item._id && show.display && (
                        <div className="text-gray-500">
                          {item.description?.substring(40)}
                        </div>
                      )}

                      {item.description.length > 40 && (
                        <div
                          onClick={() =>
                            setshow((prev) => ({
                              ...prev,
                              display:
                                show.id === item._id ? !show.display : true,
                              id: item._id,
                            }))
                          }
                          className="text-sm text-blue-800 cursor-pointer"
                        >
                          {show.id === item._id && show.display
                            ? "See Less"
                            : "...See More"}
                        </div>
                      )}

                      <div className="text-gray-500">
                        {formatDistanceToNow(new Date(item.date), {
                          addSuffix: true,
                        })}
                      </div>
                      <div>{item?.status?.name}</div>
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
