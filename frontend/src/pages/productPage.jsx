import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import products from "../data/data";
import ProductCard from "../components/productCard";
import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/productPage.css";

const ProductPage = () => {
    const { category } = useParams();
    const itemsPerPage = 10; // Number of products per page
    const [currentPage, setCurrentPage] = useState(0);

    // Filter products based on category
    const filteredProducts = category ? 
        products.filter(product => product.category === category) : 
        products;

    // Calculate pagination
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginatedProducts = filteredProducts.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    // Handle page change
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div>
            <Header />
            <Navbar />
            <div className="product-page">
                {paginatedProducts.length > 0 ? (
                    paginatedProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>

            {/* Pagination Component */}
            <ReactPaginate
                previousLabel="←"
                nextLabel="→"
                breakLabel="..."
                pageCount={totalPages}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                onPageChange={handlePageChange}
                containerClassName="pagination"
                activeClassName="active"
                pageClassName="page-item"
                previousClassName="page-item"
                nextClassName="page-item"
                breakClassName="page-item"
                disabledClassName="disabled"
            />

            <Footer />
        </div>
    );
};

export default ProductPage;
