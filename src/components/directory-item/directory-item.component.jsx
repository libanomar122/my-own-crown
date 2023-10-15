import {
    BackgroundImage,
    Body,
    DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    const imageurl = imageUrl;
    
    return (
        <DirectoryItemContainer to={`shop/${category.title}`}>
            <BackgroundImage imageurl={imageurl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;