import React, { useEffect, useState } from "react";
import EmptyView from "../../components/common/EmptyView";
import FilterPanel from "../../components/Home/FilterPanel";
import List from "../../components/Home/List";
import SearchBar from "../../components/Home/SearchBar";
import { dataList } from "../../constants";
import { options } from "../../constants";
import Select from "react-select";
import "./styles.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [selectedOption, setSelectedOption] = useState({});
  const [selectedOption2, setSelectedOption2] = useState({});
  const [selectedOption3, setSelectedOption3] = useState({});

  const { value:value } = selectedOption;
  const { value:value2 } = selectedOption2;
  const { value:value3 } = selectedOption3;

  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: "American" },
    { id: 2, checked: false, label: "Chinese" },
    { id: 3, checked: false, label: "Italian" },
  ]);

  const [list, setList] = useState(dataList);
  const [list2, setList2] = useState(dataList);
  const [list3, setList3] = useState(dataList);

  const [resultsFound1, setResultsFound1] = useState(true);
  const [resultsFound2, setResultsFound2] = useState(true);
  const [resultsFound3, setResultsFound3] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const cusinesStateList = cuisines;
    const changeCheckedCuisines = cusinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const applyFilters = () => {
    let updatedList = dataList;
    let updatedList2 = dataList;
    let updatedList3 = dataList;

    // Rating Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    if (selectedRating) {
      updatedList2 = updatedList2.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }
    if (selectedRating) {
      updatedList3 = updatedList3.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }

    // Category Filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }
    if (selectedCategory) {
      updatedList2 = updatedList2.filter(
        (item) => item.category === selectedCategory
      );
    }
    if (selectedCategory) {
      updatedList3 = updatedList3.filter(
        (item) => item.category === selectedCategory
      );
    }

    if (value) {
      updatedList = updatedList.filter((item) => item.title === value);
    }
    
    if (value) {
      updatedList2 = updatedList2.filter((item) => item.title === value2);
    }
    
    if (value) {
      updatedList3 = updatedList3.filter((item) => item.title === value3);
    }


    // Cuisine Filter
    const cuisinesChecked = cuisines
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (cuisinesChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisinesChecked.includes(item.cuisine)
      );
    }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );
     
    updatedList2 = updatedList2.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    updatedList3 = updatedList3.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);
    setList2(updatedList2);
    setList3(updatedList3);

    !updatedList.length ? setResultsFound1(false) : setResultsFound1(true);
    !updatedList2.length ? setResultsFound2(false) : setResultsFound2(true);
    !updatedList3.length ? setResultsFound3(false) : setResultsFound3(true);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory, cuisines, searchInput, selectedPrice,value]);

  return (
    <>
    {/*
    <div style={{ border: "1px solid black" }}>
     
      <div style={{ display: "flex" }}>
        <div style={{ width: "30%", border: "1px solid black", height: "60px" }}>
          
        </div>

        
          
          <div style={{ width: "30%" }}>
            
          </div>
        
        
      </div>
     
      
    </div>

   */}

 
    <div style={{display:"flex"}}>
      <div style={{height:"140px",width:"70%"}}>
      <FilterPanel
              selectedCategory={selectedCategory}
              selectCategory={handleSelectCategory}
              selectedRating={selectedRating}
              selectedPrice={selectedPrice}
              selectRating={handleSelectRating}
              cuisines={cuisines}
              changeChecked={handleChangeChecked}
              changePrice={handleChangePrice}
            />

      </div>
      <div style={{height:"140px",width:"30%",float:"right",marginLeft:"50px"}}>
      <SearchBar
            value={searchInput}
            changeInput={(e) => setSearchInput(e.target.value)}
          />
      </div>
   
    </div>
    <div style={{height:"50px",width:"100%",background:"green" ,display:"flex"}}>
    <div style={{ width: "33%",margin:"5px" }}>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder="Select"
          />
        </div>
        <div style={{ width: "33%",margin:"5px" }}>
          <Select
            defaultValue={selectedOption2}
            onChange={setSelectedOption2}
            options={options}
            placeholder="Select"
          />
        </div>
        <div style={{ width: "33%",margin:"5px" }}>
          <Select
            defaultValue={selectedOption2}
            onChange={setSelectedOption3}
            options={options}
            placeholder="Select"
          />
        </div>
    

</div>
<div style={{display:"flex"}}>
<div style={{width:"32%" ,border:"1px solid black",margin:"1%"}}>

{resultsFound1 ? <List list={list} /> : <EmptyView />}
      
</div>
<div style={{width:"32%",border:"1px solid red",margin:"1%"}}>

{resultsFound2 ? <List list={list2} /> : <EmptyView />}
      
</div>
<div style={{width:"32%",border:"1px solid blue",margin:"1%"}}>

{resultsFound3 ? <List list={list3} /> : <EmptyView />}
      
</div>

</div>


  </>

  );
};

export default Home;
