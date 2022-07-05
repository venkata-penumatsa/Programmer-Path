import { withAuth } from "@clerk/nextjs/api";

export default withAuth(async (req, res) => {
  if (req.method === "POST") {
    const { userId, sessionId } = req.auth;
    const slug = req.body.slug_in;

    if (!userId || !sessionId || !slug) {
      return res.status(500).json({ error: "user not logged in, try again" });
    } else {
      const endpoint = process.env.STEPZEN_END_POINT;

      const headers = {
        authorization: "apikey " + process.env.SETPZEN_ADMIN_KEY,
        "content-type": "application/json",
      };

      const graphqlQuery = {
        operationName: "check_enrollment",
        query: `
        query check_enrollment($user_id: String = "", $slug: String = "") {
          getPs_course_enrollmentsUsingSlugAndUser(slug: $slug, user_id: $user_id) {
            id
            enrollment_start_date
          }
        } `,
        variables: {
          user_id: userId,
          slug: slug,
        },
      };

      const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(graphqlQuery),
      };

      const response = await fetch(endpoint, options);
      const data = await response.json();

      console.log(
        "server data",
        data.data.getPs_course_enrollmentsUsingSlugAndUser
      ); // data
      //   console.log("errors", data.errors); //

      if (data.data) {
        res
          .status(200)
          .json({ data: data.data.getPs_course_enrollmentsUsingSlugAndUser });
      }

      if (data.errors) {
        res.status(500).json({ errors: data.errors });
      }

      return;
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
});
