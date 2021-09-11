import React from "react"
import CollectionPreview from "../../components/Collection-Preview/CollectionPreview";
import SHOP_DATA from "./ShopDATA"

class ShopPage extends React.Component {

    constructor(props)
    {
        super(props);
        this.state=
        {
            DATA:SHOP_DATA
        }
    }

    render() { 
     const SHOP_DATA=this.state.DATA
    
        return (
        <div className='shop-page'>
            {
                SHOP_DATA.map(({id,...otherShopProps})=>(
                    <CollectionPreview key={id} {...otherShopProps}  />
                ))
            }
        </div>);
    }
}
 
export default ShopPage;