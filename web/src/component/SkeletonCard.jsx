import React from "react";
import "./SkeletonCard.css";

function SkeletonCard() {
    return (
        <div className="skeleton-card">
            <div className="shimmer-block skeleton-image"></div>
            
            <div className="skeleton-title-container">
                <div className="shimmer-block skeleton-title-1"></div>
                <div className="shimmer-block skeleton-title-2"></div>
            </div>
            
            <div className="skeleton-divider"></div>
            
            <div className="skeleton-desc-container">
                <div className="shimmer-block skeleton-desc-1"></div>
                <div className="shimmer-block skeleton-desc-2"></div>
            </div>
            
            <div className="shimmer-block skeleton-price"></div>
            <div className="shimmer-block skeleton-button"></div>
        </div>
    );
}

export default SkeletonCard;
