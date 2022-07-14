import React from "react";
import Main from "../../../components/CourseDetail/Main";
import PageLayout from "../../../components/layouts/PageLayout";

const index = ({ data2 }) => {
  return (
    <PageLayout>
      <Main data={data2} />
    </PageLayout>
  );
};

export default index;

export async function getStaticPaths() {
  const endpoint = process.env.STEPZEN_END_POINT;

  const headers = {
    authorization: "apikey " + process.env.SETPZEN_ADMIN_KEY,
    "content-type": "application/json",
  };

  const graphqlQuery = {
    operationName: "get_all_slug",
    query: `
    query get_all_slug {
      getPs_courseList {
        slug
      }
    }`,
    variables: {},
  };

  const options = {
    method: "POST",
    headers: headers,
    body: JSON.stringify(graphqlQuery),
  };

  const response = await fetch(endpoint, options);
  const data = await response.json();
  const data2 = data.data.getPs_courseList;

  // console.log("Get Static Paths", data2);

  const paths = data2.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const endpoint = process.env.STEPZEN_END_POINT;

  const headers = {
    authorization: "apikey " + process.env.SETPZEN_ADMIN_KEY,
    "content-type": "application/json",
  };

  const graphqlQuery = {
    operationName: "get_single_lesson",
    query: `
    query get_single_lesson($slug: String = "") {
      getPs_course(slug: $slug) {
        slug
        course_preview
        price
        length_in_minutes
        language
        is_free
        img_url
        highlight
        rating
        total_reviews
        trainer_avatar
        trainer_name
        short_desc
        long_desc
        overview
        level
        number_of_enrollments
        img_url
        ps_course_categoryList {
          id
          sort_id
          slug
          total_lessons
          category
          ps_lessonsListUsingCat_id {
            id
            sort_id
            lesson_desc
            video_length_in_minutes
            video_url_main
            video_url_preview
          }
        }
        ps_seoList {
          id
          title
          desc
          image
        }
        ps_what_you_will_learnList {
          id
          sort_id
          desc
        }
        ps_skills_you_will_gainList {
          id
          sort_id
          desc
        }
      }
    }       
     `,
    variables: {
      slug: params.slug,
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

  // console.log("Get Serverside Props", data2);

  return {
    props: { data2 },
  };
}
