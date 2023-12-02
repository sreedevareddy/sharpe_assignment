import React, { useState, useEffect } from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const PostData = () => {
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(1);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        // Filter posts for user ID 1
        setTotalPosts(data.length);
        const filteredPosts = data.filter((post) => post.userId === 1);
        setPosts(filteredPosts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Calculate the percentage of posts by user ID 1
  const userPosts = posts.length;

  // Define colors for the pie chart
  const COLORS = ["#0088FE", "#00C49F"];

  return (
    <div className="container mt-5">
      <h1>Posts by User ID 1</h1>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={post.id} className={index % 2 === 0 ? "row-even" : ""}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pie Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={[
              { name: "User ID 1", value: userPosts },
              { name: "Others", value: totalPosts - userPosts },
            ]}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {posts.length > 0 &&
              COLORS.map((color, index) => <Cell key={index} fill={color} />)}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PostData;
