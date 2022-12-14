import React from 'react';
import './styles.css';

const ListItem = ({
  item: { coverSrc, title, price, serviceTime, rating,SuperArea,CarpetArea,NoofBalconies,Loading,Electricload,Powerbackup,FurnishedorSemifernished,CeilingHeight, MainDoorHeight,InternalDoorHeights },
}) => (
  <div className='listItem-wrap'>
    <img src={coverSrc} alt='' />
    <header>
      <h4>{title}</h4>
      <span ><b>{rating}</b> BHK</span>
    </header>
    <footer>
      <div>
      <div> Possession Date  <b>{serviceTime}</b>  </div> 
      <div> Super Area <b>{SuperArea}</b>  </div> 
      <div> Carpet Area  <b>{CarpetArea}</b>  </div> 
      <div> No of Balconies  <b>{NoofBalconies}</b>  </div> 
      <div> Loading  <b>{Loading}</b>  </div> 
      <div> Electric load  <b>{Electricload}</b>  </div> 
      <div> Powerback up <b>{Powerbackup}</b>  </div> 
      <div> Furnished or Semifernished  <b>{FurnishedorSemifernished}</b>  </div> 
      <div> Main Door Height  <b>{MainDoorHeight}</b>  </div> 
      <div> Ceiling Height <b>{CeilingHeight}</b>  </div> 
      <div> Internal Door Heights  <b>{InternalDoorHeights}</b>  </div> 

      </div>
      <div></div>
        <b>{price}Cr</b>
      
    </footer>
  </div>
);

export default ListItem;
