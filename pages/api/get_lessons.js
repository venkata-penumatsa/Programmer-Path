import { withAuth } from "@clerk/nextjs/api";

export default withAuth(async (req, res) => {
  if (req.method === "POST") {
    const { userId, sessionId } = req.auth;
    const slug = req.body.slug;

    if (!userId || !sessionId || !slug) {
      return res.status(500).json({ error: "user not logged in, try again" });
    } else {
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
                trainer_profile
                overview
              ps_course_categoryList {
                sort_id
                category
                total_lessons
                ps_lessonsListUsingCategory2 {
                  id
                  sort_id
                  lesson_desc
                  video_url_main
                  video_length_in_minutes
                  
                }
              }
            }
          }          
        `,
        variables: { slug: slug },
      };

      const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(graphqlQuery),
      };

      const response = await fetch(endpoint, options);
      const data = await response.json();

      // console.log("server data", data.data.getPs_course); // data
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
