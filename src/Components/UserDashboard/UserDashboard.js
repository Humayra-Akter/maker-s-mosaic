import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const UserDashboard = () => {
  const [user] = useAuthState(auth);
  const [loggedUser, setLoggedUser] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`/users.json?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            const matchingUser = data.find(
              (userData) => userData.email === user.email
            );
            if (matchingUser) {
              setLoggedUser(matchingUser);
            }
          }
        });
    }
  }, [user]);
  console.log(loggedUser);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1
          style={{ fontFamily: "rockwell" }}
          className="text-center text-2xl text-primary font-bold"
        >
          User Dashboard
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-lg font-bold text-primary">User Profile</h3>
          <div className="flex items-center mt-4">
            <img
              src={loggedUser?.img}
              alt={loggedUser?.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="text-primary">Name: {loggedUser?.name}</p>
              <p className="text-primary">Email: {loggedUser?.email}</p>
              <p className="text-primary">Phone: {loggedUser?.phone}</p>
              <p className="text-primary">Address: {loggedUser?.address}</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-lg font-bold text-primary">Order Summary</h3>
          {loggedUser?.orders?.map((order, index) => (
            <div key={index} className="mt-4">
              <p className="text-primary">Order Number: {order?.orderNumber}</p>
              <p className="text-primary">Order Date: {order.orderDate}</p>
              <p className="text-primary">
                Product: {order?.items[0].productName}
              </p>
              <p className="text-primary">
                Quantity: {order?.items[0].quantity}
              </p>
              <p className="text-primary">
                Price: ${order?.items[0].price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-lg font-bold text-primary">Order Status</h3>
          <p className="text-primary mt-4">Status: {loggedUser?.status}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
