async function get_motivational_message(req, res) {
  function generateRandom(min = 0, max = 3) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;

    return rand;
  }

  if (req.method === "POST") {
    // console.log("hellow world2");
    const endpoint = process.env.STEPZEN_END_POINT;

    const headers = {
      "content-type": "application/json",
      authorization: "apikey " + process.env.SETPZEN_ADMIN_KEY,
    };

    const graphqlQuery = {
      operationName: "get_motivational_message",
      query: `query get_motivational_message($id: ID = "") {
        getMotivation(id: $id) {
          message
          author
        }
      }
      `,
      variables: { id: generateRandom() },
    };

    const options = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(graphqlQuery),
    };

    const response = await fetch(endpoint, options);
    const data = await response.json();

    // console.log("server data", data.data.getMotivation.message); // data
    //   console.log("errors", data.errors); //

    if (data.data) {
      res.status(200).json({ data: data.data.getMotivation });
    }

    if (data.errors) {
      res.status(500).json({ errors: data.errors });
    }

    return;
  } else {
    res.status(500).json({ error: "Invalid request" });
  }
}

export default get_motivational_message;
