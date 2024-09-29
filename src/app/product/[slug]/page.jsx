import React from 'react'

const page = ({ params }) => {
    const id = params.slug;
    return (
        <div>{id}</div>
    )
}

export default page