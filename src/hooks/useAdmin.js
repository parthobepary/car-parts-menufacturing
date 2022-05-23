import { useEffect, useState } from "react";

const useAdmin = (user) => {

  const [admin, setAdmin] = useState(true);
  const[adminLoading, setAdminLoading] = useState(false);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`http://localhost:5000/users/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setAdminLoading(false)
        });
    }
  }, [user]);
  return [admin];
};
export default useAdmin;