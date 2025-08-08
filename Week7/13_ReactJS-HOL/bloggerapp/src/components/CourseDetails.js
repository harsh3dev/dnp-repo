export default function CourseDetails() {
  const coursesData = [
    { id: 1, name: "Node.js", date: "12/8/2022" },
    { id: 2, name: "Vue.js", date: "15/9/2022" },
    { id: 3, name: "Python", date: "21/10/2022" },
    { id: 4, name: "Django", date: "30/11/2022" },
  ];
  return (
    <div className="content">
      <h2>Course Details</h2>
      {coursesData.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <h4>{course.date}</h4>
        </div>
      ))}
    </div>
  );
}
