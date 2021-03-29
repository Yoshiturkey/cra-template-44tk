import React, { useState, useEffect } from 'react'

const AnkerLink: React.FC<{url: string}> = (props) => {
    const [ link, setLink ] = useState('')

    useEffect(()=> {
        setLink((p) =>props.url)
    },[props.url])
    
    return (
        <>
        <a href={link} target="_blank" rel="noreferrer">{link}</a>
        </>
    )
}

export default AnkerLink;