import React from "react";
import Table from "../../Table/Table";
import { Link } from "react-router-dom";
import Homecard from "../Cards/Homecard";
import ROI from "../Cards/ROI";
import Split from "../Cards/Split";
import Total from "../Cards/Total";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

function PersonalDashboard() {
  return (
    <div className="">
      <div>
        {/* <h3 className="pt-7 pl-5 font-medium">Top Dexfunds</h3> */}

        <div className="container mx-auto">
          <div className="lg:flex lg:flex-wrap  grid place-items-center w-screen ">
            <Total user={user.imageUrl} />

            <Split user={user.imageUrl} />

            <ROI user={user.imageUrl} />
          </div>
        </div>

        <div className="container mx-auto">
          <h3 className="pt-7 pl-7 font-medium">My Dexfunds</h3>
          <div className="lg:flex lg:flex-wrap  grid place-items-center w-screen  ">
            <Link to="/manage">
              <Homecard user={user.imageUrl} />
            </Link>
            <Link to="/manage">
              <Homecard user={user.imageUrl} />
            </Link>
            <Link to="/manage">
              <Homecard user={user.imageUrl} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDashboard;
