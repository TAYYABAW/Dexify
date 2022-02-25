import React from "react";
import { Link } from "react-router-dom";
import Table from "../../Table/Table";
import Homecard from "../Cards/Homecard";
import "./Homepage.css";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

function Homepage() {
  return (
    <div className="">
      <div>
        <h3 className="pt-7 pl-5 font-medium text-2xl">Homepage</h3>

            <div className="lg:flex lg:flex-wrap lg:justify-center  grid place-items-center w-screen ">
              <Link to="/inside">
                <Homecard user={user.imageUrl} />
              </Link>

              <Link to="/inside">
                <Homecard user={user.imageUrl} />
              </Link>

              <Link to="/inside">
                <Homecard user={user.imageUrl} />
              </Link>

              <Link to="/inside">
                <Homecard user={user.imageUrl} />
              </Link>

              <Link to="/inside">
                <Homecard user={user.imageUrl} />
              </Link>

              <Link to="/inside">
                <Homecard user={user.imageUrl} />
              </Link>
          </div>

        <Table />
      </div>
    </div>
  );
}

export default Homepage;
