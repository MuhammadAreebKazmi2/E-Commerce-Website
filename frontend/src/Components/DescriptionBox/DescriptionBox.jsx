import './DescriptionBox.css'
import React from 'react'

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="description-box-navbox">
                    Description
                </div>
                <div className="description-box-navbox fade">
                    Reviews (122)
                </div>
            </div>
            <div className="descriptionbox-description">
                <p>E-commerce is the activity of electronically buying or selling products on online services or over the Internet. E-commerce draws on technologies such as mobile commerce, electronic funds transfer, supply chain management, Internet marketing, online transaction processing, electronic data interchange, inventory management systems, and automated data collection systems. E-commerce is the largest sector of the electronics industry and is in turn driven by the technological advances of the semiconductor industry.</p>
                <p>
                Real Madrid, Spanish professional football (soccer) club based in Madrid. Playing in all-white uniforms, which led to its nickname “Los Blancos,” Real Madrid is one of the world’s best-known teams, with fans in many countries. Real Madrid grew out of Football Club Sky, a team formed in Madrid in 1897.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox