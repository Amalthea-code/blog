import {FC} from 'react'
import './Post.scss'
import CodeRender from "../../vue/CodeRender.vue";
interface Props {
    title?: string;
    description?: string;
    image?: string;
}
const Post: FC<Props> = ({title, description}) => {
    return (
        <div className="post">
            <div className="post__wrapper">
                <div className="post__info">
                    <div className="post__title">{title}</div>
                    <div className="post__description">{description}</div>
                </div>
                <CodeRender />
            </div>
        </div>
    )
}
export default Post;