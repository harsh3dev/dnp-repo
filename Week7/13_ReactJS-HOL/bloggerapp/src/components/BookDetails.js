export default function BookDetails() {
  const booksData = [
    { id: 201, name: "Mastering Vue.js", price: 720 },
    { id: 202, name: "Node.js in Action", price: 850 },
    { id: 203, name: "Flask Web Development", price: 500 },
    { id: 204, name: "Learning Django", price: 780 },
  ];

  return (
    <div className="content">
      <h2>Book Details</h2>
      {booksData.map((book) => (
        <div key={book.id}>
          <h3>{book.name}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </div>
  );
}
