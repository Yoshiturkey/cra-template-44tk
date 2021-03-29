import React from 'react'

const Message: React.FC<{message: string}> = (props) => {
    const msg = props.message 
    return <><span className="greeting">{ msg }</span></>
}

export default Message