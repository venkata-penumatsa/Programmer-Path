// import { withServerSideAuth } from "@clerk/nextjs/ssr";

const myEnrollments = () => {
  return <div>myEnrollments</div>;
};

export default myEnrollments;

export async function getServerSideProps() {
  return {
    props: { Key: "Hello World" },
  };
}
