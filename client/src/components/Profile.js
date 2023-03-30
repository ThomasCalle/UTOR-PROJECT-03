import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_ONE_USER } from "../utils/queries";

const Profile = () => {
  const { userId } = useParams();

  const { loading, data } = useQuery(GET_ONE_USER, {
    variables: { id: userId },
  });

    console.log(data);

  const user = data?.user || {}


  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          This is {user.username}
        </h2>

        {/* <div className="col-12 col-md-10 mb-5">
          <ThoughtList
            thoughts={user.thoughts}
            title={`${user.username}'s thoughts...`}
            showTitle={false}
            showUsername={false}
          />
        </div>
        {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: "1px dotted #1a1a1a" }}
          >
            <ThoughtForm />
          </div>
        )} */}
      </div>
    </div>
  );
};
export default Profile;
