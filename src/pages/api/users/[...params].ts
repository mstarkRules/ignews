import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log(request.query);
  const users = [
    { id: 1, name: "Marcos" },
    { id: 2, name: "Neymar" },
    { id: 3, name: "Messi" },
  ];

  return response.json(users);
};
