import Card from './Card' 
import Button from '.Button'
import search from 
import React, { useState, useEffect } from "react";


const CardList = ({data}) => {

  const limit = 10;
  const defaultDataset = data.slice(0, limit);
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(defaultDataset);
  const handlePrevious = () => {
    setOffset(offset - 10); 
 }
 const handleNext = () => {
  setOffset(offset + 10);
  }
 useEffect(() => {
  setProducts(data.slice(offset, offset + limit));
 }, [offset, limit, data]);

 const filterTags =(tag) => {
  const filtered = data.filter(product =>){
    if(!tag){
      return product
    }
    return product.tags.find(({title}) => title == tag
  )}
  setOffset(0)
  setProducts(filtered)
  
 }
   return (
    <div className="cf pa2">
      <Search/>
      <div className="mt2 mb2">
        {products && products.map((product) =>
           )}  
           </div>

           <div className="flex items-center justify-center pa4">   
        <Button text="Previous" handleClick={handlePrevious} />
        <Button text="Next" handleClick={handleNext} />
      </div>
  )
}
export default CardList;
