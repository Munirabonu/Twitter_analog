import "./PostList.css"
import PostListItem from "../PostListItem";

const PostList = ({ posts, onDelete, onToggleLiked, onToggleImportant }) => {
    const elements = posts.map((item) => {
        const { id, ...itemProps } = item
        return (
            <li key={id} className='list-group-item'>
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                />
            </li>
        )
    })


    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
export default PostList;