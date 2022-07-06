//swr
import useSWR from "swr";
//Components
import CircularLoading from "../Util/CircularLoading";
import MyEnrollmentComponentData from "./MyEnrollmentComponentData";

const fetcher = async (...args) => {
  const response = await fetch(...args, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

const MyEnrollmentComponent = () => {
  const { data, error } = useSWR("/api/get_my_enrollments", fetcher);

  if (error) return "Error...";
  if (!data) return <CircularLoading />;
  if (data) {
    console.log("enrollmentData", data);
  }

  return (
    <div>
      <MyEnrollmentComponentData data={data.data} />
    </div>
  );
};

export default MyEnrollmentComponent;
