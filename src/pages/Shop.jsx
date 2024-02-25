import { Col, Container, Row } from "react-bootstrap";
import HeroSection from "../components/HeroSection/HeroSection";
import styles from "../styles/Shop.module.scss";

import SearchIcon from "remixicon-react/SearchLineIcon";
import { useMemo, useState } from "react";
import ProductList from "../components/ProductList/ProductList";
import { useSelector } from "react-redux";
import SpinnerFullPage from "../components/SpinnerFullPage/SpinnerFullPage";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

export default function Shop() {
  const { products, isLoading, error } = useSelector((store) => store.product);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [searchBar, setSearchBar] = useState("");

  const categories = useMemo(
    () =>
      products.reduce((prev, current) => {
        return !prev.includes(current.category)
          ? [...prev, current.category]
          : prev;
      }, []),
    [products]
  );
  const options = useMemo(
    () =>
      categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      )),
    [categories]
  );
  if (isLoading) {
    return <SpinnerFullPage />;
  }
  if (error) {
    return <ErrorMessage>error</ErrorMessage>;
  }
  let filteredProduct = filterProducts(products, filter, searchBar);
  filteredProduct = sortProducts(filteredProduct, sort);

  return (
    <div>
      <HeroSection title={"Products"} />
      <section>
        <Container>
          <Row className="justify-content-cente">
            <Col lg="3" md="3" className="mb-4 text-center">
              <div className={styles.filter}>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="">Filter by Category</option>
                  {options}
                </select>
              </div>
            </Col>
            <Col className="mb-4 text-center">
              <div className={styles.filter}>
                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option value="">Sort By</option>
                  <option value="ascending">Alphabetically Ascending</option>
                  <option value="descending">Alphabetically Descending</option>
                  <option value="rating-high">Highest Rating</option>
                  <option value="rating-low">Lowest Rating</option>
                  <option value="price-high">Highest Price</option>
                  <option value="price-low">Lowest Price</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6" className="text-center">
              <div className={styles.searchBox}>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchBar}
                  onChange={(e) => setSearchBar(e.target.value)}
                />
                <div className={styles.iconContainer}>
                  <SearchIcon size={15} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            {filteredProduct.length === 0 && (
              <h1 className={styles.notFound}>No Products found!</h1>
            )}
            {filteredProduct.length > 0 && (
              <ProductList products={filteredProduct} />
            )}
          </Row>
        </Container>
      </section>
    </div>
  );
}

function filterProducts(products, filter, searchBar) {
  if (!filter && !searchBar) {
    return products;
  }

  return products.filter((product) => {
    if (filter) {
      if (!searchBar) {
        return product.category === filter;
      } else {
        return (
          product.category === filter &&
          product.productName.toLowerCase().includes(searchBar.toLowerCase())
        );
      }
    } else {
      if (searchBar) {
        return product.productName
          .toLowerCase()
          .includes(searchBar.toLowerCase());
      }
    }
  });
}

function sortProducts(products, option) {
  if (option === "") {
    return products;
  } else if (option === "ascending") {
    return products.slice().sort((a, b) => {
      return a.productName
        .toLowerCase()
        .localeCompare(b.productName.toLowerCase());
    });
  } else if (option === "descending") {
    return products
      .slice()
      .sort((a, b) =>
        b.productName.toLowerCase().localeCompare(a.productName.toLowerCase())
      );
  } else if (option === "rating-high") {
    return products.slice().sort((a, b) => b.avgRating - a.avgRating);
  } else if (option === "rating-low") {
    return products.slice().sort((a, b) => a.avgRating - b.avgRating);
  } else if (option === "price-high") {
    return products.slice().sort((a, b) => b.price - a.price);
  } else if (option === "price-low") {
    return products.slice().sort((a, b) => a.price - b.price);
  } else {
    return products;
  }
}
