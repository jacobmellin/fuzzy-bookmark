import { css } from 'solid-styled';
function AddBookmark() {
    css`
        div {
            width: 100%;
            height: 100%;
            position:absolute;
            top:0;
            left:0;
            right:0;
            bottom:0;
            background:red;
        }
    `;
    return <div class="container">Hello Add Bookmark</div> 
}

export default AddBookmark
