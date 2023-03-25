function Listing(props)
{
    const item = props;
    
    return(
        item.map(item.listing_id => 
            <div>
                <div class="item-list">
                <div class="item">
                    <div class="item-image">
                    <a href={item.url}>
                        <img src={item.MainImage.url_570xN}>
                    </a>
                    </div>
                    <div class="item-details">
                    <p class="item-title">{item.title}</p>
                    <p class="item-price">{item.currency}{item.price}</p>
                    <p class="item-quantity level-medium">{item.quantity}</p>
                    </div>
                </div>
                </div>            
            </div>
        );
    );

}

export default Listing;