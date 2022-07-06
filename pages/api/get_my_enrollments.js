import { withAuth } from "@clerk/nextjs/api";

export default withAuth(async (req, res) => {
  console.log("hellow world");
  if (req.method === "POST") {
    const { userId, sessionId } = req.auth;
    if (!userId || !sessionId) {
      return res.status(500).json({ error: "user not logged in, try again" });
    } else {
      console.log("hellow world2");
      const endpoint = process.env.STEPZEN_END_POINT;

      const headers = {
        "content-type": "application/json",
        authorization: "apikey " + process.env.SETPZEN_ADMIN_KEY,
      };

      const graphqlQuery = {
        operationName: "get_my_enrollments",
        query: `query get_my_enrollments($user_id: String = "") {
          getPs_course_enrollmentsUsingUserOnly(user_id: $user_id) {
            slug
            user_id
            enrollment_start_date
            created_at
          }
        }`,
        variables: { user_id: userId },
      };

      const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(graphqlQuery),
      };

      const response = await fetch(endpoint, options);
      const data = await response.json();

      console.log("server data", data.data); // data
      //   console.log("errors", data.errors); //

      if (data.data) {
        res
          .status(200)
          .json({ data: data.data.getPs_course_enrollmentsUsingUserOnly });
      }

      if (data.errors) {
        res.status(500).json({ errors: data.errors });
      }

      return;
    }
  } else {
    res.status(500).json({ error: "Invalid request" });
  }
});
