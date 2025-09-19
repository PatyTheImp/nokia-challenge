type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export default async function Tasks() {
  try {
    const res = await fetch("http://localhost:3008/api/tasks/ ");
    if (!res.ok)
      return (
        <p>
          HTTP {res.status} {res.statusText}
        </p>
      );

    const posts: Task[] = await res.json();

    return (
      <>
        <h2>Tasks:</h2>
        <ul>
          {posts.map((post) => (
            <li
              className={`list-disc pl-2 ${
                post.completed ? "line-through" : ""
              }`}
              key={post.id}
            >
              {post.text}
            </li>
          ))}
        </ul>
      </>
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return <p>Request failed: {message}</p>;
  }
}
