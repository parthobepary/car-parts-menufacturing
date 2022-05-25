import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;

    const currentUser = { email: email };
    if (email) {
      fetch(`https://rocky-fjord-46983.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const token = data.token;
          setToken(token)
          localStorage.setItem('token', token)
        });
    }
  }, [user]);
  return [token];
};
export default useToken;
