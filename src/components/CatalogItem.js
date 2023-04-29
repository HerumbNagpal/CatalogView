import React from 'react';
function CatalogItem(props) {
  return (
    <div className="catalog-item">
      <img style={{borderRadius:"70px"}} src={props.src} alt={props.title} className="catalog-image" />
      <div className="l-side">
        <h3>{props.title}</h3>
        <p className="catalog-text" >{props.description}</p>
      </div>
    </div>
  );
}

export default CatalogItem;
