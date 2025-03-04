import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGrip } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import InputField from "../components/elements/input";

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

            <div className="categories_box">
              <div className="tit">
                <h2>Order By</h2>
              </div>

              <ul>
                <li> 1</li>
                <li> 2</li>
              </ul>
            </div>
          </div>

          <div className="col-9 right_side">
            <div className="top_section">
              <div className="view_style">
                <div className="single_view selected">
                  <FontAwesomeIcon icon={faGrip} />
                </div>
                <div className="single_view">
                  <FontAwesomeIcon icon={faBars} />
                </div>
              </div>

              <div className="search_section"> </div>
              <div className="prod_by_page">prod by page</div>
            </div>
          </div>
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
  );
};

export default Home;
