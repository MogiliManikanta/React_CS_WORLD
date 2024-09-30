import { Outlet, Link, useParams, useLocation } from "react-router-dom";

function User() {
  let { id, name } = useParams();
  let queryparams = useLocation();
  console.log(queryparams);
  let QueryParams = new URLSearchParams(queryparams.search);
  let category = QueryParams.get("category");
  let price = QueryParams.get("price");

  return (
    <div>
      <div>
        <button>
          <Link to="orders">Orders</Link>
        </button>
        <button>
          <Link to="profile">Profile</Link>
        </button>
      </div>
      <h1>User Id : {id}</h1>
      <h1>User Name : {name} </h1>
      <h1>User Category : {category} </h1>
      <h1>User Price : {price} </h1>
      <h1>User Component</h1>
      <Outlet />
      <p>This is User Page</p>
    </div>
  );
}
export default User;
