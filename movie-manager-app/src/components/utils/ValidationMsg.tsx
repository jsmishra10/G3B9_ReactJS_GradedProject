import React from "react";


type Props = {
    messageTxt: string,
    messageType: string

}
const ValidationMsg = ({ messageTxt, messageType }: Props) => {

    return (

        <>
            {
                (`${messageType}` === "error") && <p style={{ color: 'red', font: '1px' }}>{messageTxt}</p>

            }

            {

                (`${messageType}` !== "error") && <p style={{ color: 'blue', font: '1px' }}>{messageTxt}</p>
            }

        </>



    );
}

export default ValidationMsg;