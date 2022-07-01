// import { withServerSideAuth } from "@clerk/nextjs/ssr";

const myEnrollments = () => {
  return <div>myEnrollments</div>;
};

export default myEnrollments;

export async function getServerSideProps() {
  const endpoint = process.env.STEPZEN_END_POINT;

  const headers = {
    authorization: "apikey " + process.env.SETPZEN_ADMIN_KEY,
    "content-type": "application/json",
  };

  const graphqlQuery = {
    operationName: "my_enrollments",
    query: `
      query my_enrollments($slug: String = "", $user_id: String = "") {
        getPs_course_enrollmentsUsingSlugAndUser(slug: $slug, user_id: $user_id) {
          slug
          user_id
        }
      }      
      `,
    variables: {},
  };

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(graphqlQuery),
  };

  const response = await fetch(endpoint, options);
  console.log("Response", response); // data
  const data = await response.json();
  console.log("data formatted", data); // data
  const data2 = data.data;

  console.log("myEnrollmentData", data2); // data
  // console.log(data2.errors); //error

  return {
    props: { data2 },
  };
}
