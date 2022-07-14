import * as React from "react";
import { courses } from "../../data/courses";
import CourseCard from "./CourseCard";
import CourseGrid from "./CourseGrid";

const CardLayout = ({ data }) => {
  // console.log("card log2", data);
  return (
    <div>
      <CourseGrid>
        {data.getPs_courseList.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </CourseGrid>
    </div>
  );
};

export default CardLayout;
