import useAxios from "../../apiConfig/axiosInstance";
import { toast } from "react-hot-toast";

const useAddReview = () => {
  const api = useAxios();

  const addReview = async (review) => {
    try {
      const { data, status } = await api.post("/review", review);
      if (status === 200) {
        toast.success("Review added successfully");
        return true
      }
    } catch (e) {
      console.log(e);
      toast.error(e?.response?.data?.error);
    }
  };

  return addReview;
};

export default useAddReview;
