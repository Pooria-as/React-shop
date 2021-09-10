import React from "react";
import "./Directory.styles.scss"
import DATA from "./DATA"
import MenuItem from "../Menu-Item/MenuItem";


class Directory extends React.Component {
    constructor()
    {
        super();
        this.state=
        {
            DirectoryItemData:DATA
        }
    }

   render() { 
      const {DirectoryItemData}=this.state
        return (
            <div className='directory-menu'>
            {
                DirectoryItemData.map(({title,id,imageUrl,size})=>(
                    <MenuItem key={id}   title={title} size={size} imageUrl={imageUrl}   />
                ))
            }

            </div>
        );
    }
}
 

export default Directory;