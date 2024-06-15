import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/filter.css";

const data = [
  {
    id: 1,
    category: "Cheese Burgers",
    items: [
      { id: 101, name: "Halloumi", image: "/cheese/che1.png" },
      { id: 102, name: "American cheese", image: "/cheese/che2.png" },
      { id: 103, name: "Comté", image: "/cheese/che3.png" },
      { id: 104, name: "Stilton", image: "/cheese/che4.png" },
      { id: 105, name: "Parmigiano-Reggiano", image: "/cheese/che5.png" },
      { id: 106, name: "Brie", image: "/cheese/che6.png" },
      { id: 107, name: "Smoked Gouda", image: "/cheese/che7.png" },
      { id: 108, name: "Provolone", image: "/cheese/che8.png" },
      { id: 109, name: "Monterey Jack", image: "/cheese/che9.png" },
      { id: 110, name: "Chedder", image: "/cheese/che10.png" }
    ]
  },
  {
    id: 2,
    category: "Veggie Burgers",
    items: [
      { id: 201, name: "Crispy Quinoa Burgers", image: "/veggies/veg1.png" },
      { id: 202, name: "Vegan BBQ Tofu Burger", image: "/veggies/veg2.png" },
      {
        id: 203,
        name: "Portobello and Peach Burgers",
        image: "/veggies/veg3.png"
      },
      {
        id: 204,
        name: "Eggplant Hummus Veggie Burgers",
        image: "/veggies/veg4.png"
      },
      { id: 205, name: "Portobello Burger", image: "/veggies/veg5.png" },
      { id: 206, name: "Best Ever Beet Burger", image: "/veggies/veg6.png" },
      {
        id: 207,
        name: "Chunky Portobella Veggie Burger",
        image: "/veggies/veg7.png"
      },
      {
        id: 208,
        name: "Vegan Bean and Zucchini Cutlets",
        image: "/veggies/veg8.png"
      },
      {
        id: 209,
        name: "Freekeh Bean Burgers with Harissa Onions",
        image: "/veggies/veg9.png"
      },
      { id: 210, name: "Baked Broccoli Burgers", image: "/veggies/veg10.png" }
    ]
  },
  {
    id: 3,
    category: "Chicken Burgers",
    items: [
      { id: 301, name: "Mexican chicken burger", image: "/chicken/chi1.png" },
      { id: 302, name: "BBQ chicken burgers", image: "/chicken/chi2.png" },
      {
        id: 303,
        name: "Fully loaded Cajun chicken burgers",
        image: "/chicken/chi3.png"
      },
      { id: 304, name: "Jerk chicken burger", image: "/chicken/chi4.png" },
      {
        id: 305,
        name: "15-minute chicken & halloumi burgers",
        image: "/chicken/chi5.png"
      },
      {
        id: 306,
        name: "Sriracha-glazed chicken burger ",
        image: "/chicken/chi6.png"
      },
      { id: 307, name: "Chicken tikka burgers", image: "/chicken/chi7.png" },
      {
        id: 308,
        name: " Italian-style chicken burger & chips",
        image: "/chicken/chi8.png"
      },
      {
        id: 309,
        name: "Korean fried chicken burgers",
        image: "/chicken/chi9.png"
      },
      {
        id: 310,
        name: "Cajun chicken & pineapple burger",
        image: "/chicken/chi10.png"
      }
    ]
  }
];

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearchChange = e => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleCategoryChange = e => {
    setSelectedCategory(e.target.value);
  };

  const filteredData = data
    .map(category => ({
      ...category,
      items: category.items.filter(item =>
        item.name.toLowerCase().includes(searchTerm)
      )
    }))
    .filter(
      category =>
        selectedCategory ? category.category === selectedCategory : true
    );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="container">
      <div className="search-filter">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          {data.map(category =>
            <option key={category.id} value={category.category}>
              {category.category}
            </option>
          )}
        </select>
      </div>
      <div className="results">
        {filteredData.map(category =>
          <div key={category.id}>
            <h3>
              {category.category}
            </h3>
            {category.items.length > 0
              ? <Slider {...settings}>
                  {category.items.map(item =>
                    <div key={item.id} className="result-item">
                      <div className="main-img">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="bug-img"
                        />
                      </div>
                      <p>
                        {item.name}
                      </p>
                    </div>
                  )}
                </Slider>
              : <p>No results found</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
