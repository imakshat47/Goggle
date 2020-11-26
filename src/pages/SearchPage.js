import React from "react";
import SearchBar from "../components/SearchBar";
import { useStateValue } from "../middleware/StateProvider";
import useGoogleSearch from "../middleware/useGoogleSearch";
import "./SearchPage.css";
import Response from "../response";
import { Link } from "react-router-dom";
import {
  Description,
  Image,
  LocalOffer,
  MoreVert,
  Room,
  Search,
} from "@material-ui/icons";
function SearchPage(props) {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  //   const data = Response;
  console.log(data);
  return (
    <div className="search_page">
      <div className="search_header">
        <div className="header">
          <Link to="/">
            <img
              className="logo"
              src="https://parqor.com/wp-content/uploads/2020/09/1004px-Google_22G22_Logo.svg.png"
              alt="Goggle"
            />
          </Link>
        </div>
        <div className="body">
          <SearchBar hideButton text={term} />

          <div className="options">
            <div className="left">
              <div className="option">
                <Search />
                <Link to="/all">All</Link>
              </div>
              <div className="option">
                <Description />
                <Link to="/news">News</Link>
              </div>
              <div className="option">
                <Image />
                <Link to="/images">Images</Link>
              </div>
              <div className="option">
                <LocalOffer />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="option">
                <Room />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="option">
                <MoreVert />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="right">
              <div className="option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="results">
          <p className="count">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="result_card">
              <a href={item.link} className="top_title title">
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      src={item.pagemap?.cse_image[0]?.src}
                      alt="Iamge"
                      className="image"
                    />
                  )}
                <h2>{item.title}</h2>
              </a>
              {/* <a href={item.title} className="title"></a> */}
              <p className="snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
