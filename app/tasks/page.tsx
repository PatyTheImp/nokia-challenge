type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export default async function Tasks() {
  const data = await fetch("http://localhost:3008/api/tasks/ ");
  const posts: Task[] = await data.json();

  return (
    <>
      <h2>Tasks:</h2>
      <ul>
        {posts.map((post) => (
          <li className={post.completed ? "line-through" : ""} key={post.id}>
            {post.text}
          </li>
        ))}
      </ul>
    </>
  );
}
