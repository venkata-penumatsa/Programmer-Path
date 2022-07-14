//swr
import useSWR from "swr";
//Components
import CircularLoading from "../Util/CircularLoading";
import MyEnrollmentComponentData from "./MyEnrollmentComponentData";
import { NextSeo } from "next-seo";

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

  return (
    <div>
      <NextSeo
        title="My Enrollments | Programmer Path"
        description="Programmer Path is a learning management system (LMS) that will provide technical courses."
      />
      <MyEnrollmentComponentData data={data.data} />
    </div>
  );
};

export default MyEnrollmentComponent;
