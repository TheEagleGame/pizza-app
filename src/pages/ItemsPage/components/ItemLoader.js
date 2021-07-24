import React from "react"
import ContentLoader from "react-content-loader"

const ItemLoader = (props) => (
    <ContentLoader
        speed={2}
        width={375}
        height={600}
        viewBox="0 0 360 600"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="185" cy="175" r="155" />
        <rect x="45" y="375" rx="0" ry="0" width="275" height="40" />
        <rect x="10" y="425" rx="20" ry="20" width="350" height="115" />
        <rect x="20" y="555" rx="0" ry="0" width="85" height="40" />
        <rect x="175" y="550" rx="20" ry="20" width="180" height="50" />
    </ContentLoader>
)

export default ItemLoader