import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faGrip,
  faHeart,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import InputField from "../components/elements/input";
import SelectField from "../components/elements/select";
import Pagination from "../components/elements/pagination";
import Header from "../components/pages/header";

const Home: React.FC = () => {
  return (
    <><Header/>
    <div className="filter_page_holder">
      <div className="container">
        <div className="row">
          <div className="col-3 left_side">
            <div className="sec1">
              <div className="tit">
                <h3>Category</h3>
              </div>

              <ul className="categories_list">
                <li className="single_cat  active ">All</li>
                <li className="single_cat  ">cat 1</li>
                <li className="single_cat  ">cat 2</li>
                <li className="single_cat  ">cat 3</li>
                <li className="single_cat  ">cat 4</li>
              </ul>
            </div>

            <div className="sec2 form_holder">
              <div className="tit">
                <h3>Order By</h3>
              </div>
              <SelectField
                options={[
                  { value: "10", label: "price asc" },
                  { value: "20", label: "price desc" },
                ]}
              />
              <div></div>
            </div>
            <div className="sec3">
              <div className="tit">
                <h3>Display Only Favorites</h3>
              </div>
              <div className="yn">
                <div className="btn yes ">Yes</div>
                <div className="btn no active">No</div>
              </div>
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

              <div className="search_section form_holder">
                <InputField placeholder="Search..." />
                <div className="search_btn">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
              </div>
              <div className="prod_by_page form_holder">
                <div>
                  <SelectField
                    options={[
                      { value: "10", label: "10" },
                      { value: "20", label: "20" },
                      { value: "50", label: "50" },
                      { value: "100", label: "100" },
                    ]}
                  />
                </div>
                <div>Per page</div>
              </div>
            </div>
            <div className="products_list">
              <div className="row">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div className="col-4">
                    <div className="single_prod">
                      <div className="prod_img">
                        <img src="https://placehold.co/400" alt="prod" />
                      </div>
                      <div className="prod_info">
                        <div className="sec1">
                          <div className="category">sqsdqsd</div>
                          <div className="price">10 TND</div>
                        </div>
                        <div className="sec2">
                          <div className="title">prod name</div>
                          <div className="description">prod description</div>
                        </div>
                        <div className="sec3">
                          <div className="fav">
                            <FontAwesomeIcon icon={faHeart} />
                          </div>
                          {/*  <div className="fav"><FontAwesomeIcon icon={faHeartRegular} /></div>  */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Pagination
                currentPage={1}
                totalPages={10}
                onPageChange={() => null}
              />
            </div>
          </div>
        </div>
      </div>
    </div></>
  );
};

export default Home;
