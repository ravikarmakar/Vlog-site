import BlogList from "./BlogList";
import useFetch from "./useFetch";

function Home() {
  const { data: blogs, isPending, error } = useFetch(`api/vlogsite/vlogs`);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs!"} />}
    </div>
  );
}

export default Home;
