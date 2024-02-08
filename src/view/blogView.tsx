import Post from "../components/blog/Post";
import blogs from "../blogs";

export default function BlogView() {
    return (
        <div className='BlogView'>
            {
                blogs.map(el => <Post {...el} />)
            }
        </div>
    )
}

