import { GraphQLClient, gql } from "graphql-request";
import { withAuth } from "@clerk/nextjs/api";
const axios = require("axios");

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
        operationName: "lessons_by_slug",
        query: `query lessons_by_slug($slug: String = "") {
            getPs_course(slug: $slug) {
                slug
                trainer_name
              ps_course_categoryList {
                sort_id
                category
                total_lessons
                ps_lessonsListUsingCategory2 {
                  id
                  video_url_main
                  video_length_in_minutes
                }
              }
            }
          }          
        `,
        variables: { slug: "what_is_graphql" },
      };

      const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(graphqlQuery),
      };

      const response = await fetch(endpoint, options);
      const data = await response.json();

      console.log("server data", data.data.getPs_course); // data
      //   console.log("errors", data.errors); //

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
