import { withAuth } from "@clerk/nextjs/api";

export default withAuth(async (req, res) => {
  const { userId, sessionId } = req.auth;

  const slug = req.body.slug;

  console.log("req iss------", slug, "userid", userId);

  if (!userId || !sessionId || !slug) {
    return res.status(500).json({ error: "user not logged in, try again" });
  } else {
    if (req.method === "POST") {
      try {
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
        const data2 = data.data;
        console.log("server data", data2);

        return res.status(200).json({ message: "success", data: data2 });

        // const data = await graphQLClient.request(query, variables);
        // // console.log(JSON.stringify(data, undefined, 2));
        // // const data2 = JSON.stringify(data, undefined, 2);
        // const data_final = await data.json();
        // console.log("data_final", data_final);
      } catch (error) {
        return res.status(500).json({ error: error });
      }
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  }
});
