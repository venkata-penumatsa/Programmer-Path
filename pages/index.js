import Main from "../components/Body/Main";
import PageLayout from "../components/layouts/PageLayout";

export default function Home({ data2 }) {
  return (
    <PageLayout>
      <Main data={data2} />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const endpoint = process.env.STEPZEN_END_POINT;

  const headers = {
    authorization: "apikey " + process.env.SETPZEN_API_KEY,
    "content-type": "application/json",
  };

  const graphqlQuery = {
    operationName: "get_course_data",
    query: `
    query get_course_data {
      getPs_courseList {
        slug
        img_url
        highlight
        short_desc
        price
        trainer_name
        trainer_avatar
        rating
        total_reviews
        language
        level
        length_in_minutes
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
  const data = await response.json();
  const data2 = data.data;

  console.log("-------", data2); // data
  // console.log(data2.errors); //error

  return {
    props: { data2 },
  };
}
