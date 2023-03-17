import { useState, useEffect } from 'react';

function Card({ title, body, onClick }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <button className="btn btn-primary" onClick={onClick}>Click me</button>
      </div>
    </div>
  );
}

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  function handleClick(title) {
    alert(`You clicked ${title}`);
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        {posts.map(post => (
          <div className="col-md-4 mb-3" key={post.id}>
            <Card title={post.title} body={post.body} onClick={() => handleClick(post.title)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

