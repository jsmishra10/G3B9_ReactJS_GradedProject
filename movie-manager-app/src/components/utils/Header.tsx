import React from "react";



type Props = {
    message: string
    
}
const Header = ({message}: Props) => {


    return (

        <>

        <h2>{message}</h2>
        <hr />
        
        
        </>

        
    )

}


export default Header;