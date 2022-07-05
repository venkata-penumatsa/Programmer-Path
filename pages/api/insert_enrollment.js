import { withAuth } from "@clerk/nextjs/api";
const { uuid } = require("uuidv4");
import format from "date-fns/format";
import add from "date-fns/add";

function fDate(date, option) {
  return format(new Date(date), option || "yyyy-dd-MM");
}

export default withAuth(async (req, res) => {
  if (req.method === "POST") {
    const { userId, sessionId } = req.auth;
    const uuid_gen = uuid();
    const slug = req.body.slug;
    const today = fDate(new Date(), "yyyy-MM-dd");
    const today30 = fDate(add(new Date(today), { days: 30 }), "yyyy-MM-dd");

    if (!userId || !sessionId || !slug) {
      res.status(500).json({ error: "user not logged in, try again" });
      return;
    } else {
      const endpoint = process.env.STEPZEN_END_POINT;

      const headers = {
        authorization: "apikey " + process.env.SETPZEN_ADMIN_KEY,
        "content-type": "application/json",
      };

      const graphqlQuery = {
        operationName: "create_enrollment",
        query: `
          mutation create_enrollment(
              $id: ID = ""
              $slug: String = ""
              $user_id: String = ""
              $enrollment_start_date: Date!
              $enrollment_end_date: Date!
            ) {
              insertPs_course_enrollments(
                id: $id
                slug: $slug
                user_id: $user_id
                enrollment_start_date: $enrollment_start_date
                enrollment_end_date: $enrollment_end_date
              ) {
                id
              }
            }
          `,
        variables: {
          id: uuid_gen,
          slug: slug,
          user_id: userId,
          enrollment_start_date: today,
          enrollment_end_date: today30,
        },
      };

      const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(graphqlQuery),
      };

      const response = await fetch(endpoint, options);
      const data = await response.json();

      console.log("server data", data.data);

      if (data.data) {
        res.status(200).json({ data: data.data.getPs_course });
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
