import React from "react";

const Home: React.FC = () => {
  return (
    <div className="filter_page_holder">
      <div className="container">
        <div className="row">
          <div className="col-3 left_side">
            <div className="categories_box">
              <div className="tit"> 
                <h2>Categories</h2>
              </div>

              <ul>
                <li>cat 1</li>
                <li>cat 2</li>
                <li>cat 3</li>
                <li>cat 4</li>
              </ul>
            </div>
          </div>

          <div className="col-9 right_side">
            <div className="top_section">prod by page | view | search</div>
            <div className="products_list">
              <div className="row">
                <div className="col-4">prod</div>
                <div className="col-4">prod</div>
                <div className="col-4">prod</div>
                <div className="col-4">prod</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
