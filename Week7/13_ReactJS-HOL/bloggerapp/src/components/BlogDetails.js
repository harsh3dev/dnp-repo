export default function BlogDetails() {
  const blogsData = [
    {
      id: 1,
      title: "Introduction to Node.js",
      author: "John Doe",
      content:
        "Node.js is a runtime environment for executing JavaScript code outside the browser.",
    },
    {
      id: 2,
      title: "Why Choose Vue.js?",
      author: "Emily Stone",
      content:
        "Vue.js is a progressive framework for building user interfaces.",
    },
    {
      id: 3,
      title: "Django vs Flask",
      author: "Robert Martin",
      content:
        "Both Django and Flask are popular Python web frameworks with distinct advantages.",
    },
  ];

  return (
    <div className="content">
      <h2>Blog Details</h2>
      {blogsData.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <h4>{blog.author}</h4>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}
