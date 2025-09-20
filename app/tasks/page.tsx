type Task = {
  id: number;
  text: string;
  completed: boolean;
};

// so it refreshes the data every time the tasks page is open
export const revalidate = 0; // no ISR
export const dynamic = "force-dynamic"; // render on every request
export const fetchCache = "force-no-store"; // don't cache fetches on this route

export default async function Tasks() {
  try {
    const res = await fetch("http://localhost:3008/api/tasks/", {
      cache: "no-store", // refresh on every navigation
    });

    if (!res.ok)
      return (
        <p role="alert">
          HTTP {res.status} {res.statusText}
        </p>
      );

    const posts: Task[] = await res.json();
    if (posts.length === 0) return <p>No tasks yet.</p>;

    return (
      <>
        <h2>Tasks:</h2>
        <ul className="list-disc pl-2">
          {posts.map((post) => (
            <li key={post.id} className={post.completed ? "line-through" : ""}>
              {post.text}
            </li>
          ))}
        </ul>
      </>
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return <p role="alert">Request failed: {message}</p>;
  }
}
