import icon from "../../assets/home/product_icon.png";
import Containar from "../containar/Containar";
import { IoCart } from "react-icons/io5";
import { useEffect, useState } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import api from "../axios/Axios";
import { addToAgroCart } from "../../redux/slices/cart/agroCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const handleAddtoCart = (product) => {
    dispatch(addToAgroCart({ ...product, quantity: 1 }));
  };

  const handleBuyNow = (product) => {
    dispatch(addToAgroCart({ ...product, quantity: 1 }));
    navigate("/checkout");
  };

  const getProducts = async () => {
    try {
      const response = await api.get(`/products?limit=12`);
      setProducts(response.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="py-12 sm:py-[0px] font-robo relative">
      <Containar>
        <div className="py-2 text-center">
          <div className="flex justify-center">
            <img
              src={icon}
              className="w-[70px] h-[70px]"
              alt="leaf-icon"
            />
          </div>
          <div className="text-center mt-[10px]">
            <h5 className="text-primary font-bold text-[16px] sm:text-xl mb-3 uppercase tracking-widest">
              Our Latest Products
            </h5>
            <h2 className="text-[20px] sm:text-[36px] max-w-3xl mx-auto font-semibold">
              Explore Our Latest Products.
            </h2>
          </div>
          <div className="mt-8">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(12)].map((_, index) => (
                  <Skeleton key={index} height={300} />
                ))}
              </div>
            ) : products?.doc?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products?.doc?.map((product) => (
                  <div
                    key={product._id}
                    className="rounded-lg overflow-hidden bg-white p-4"
                  >
                    <Link to={`/shop/${product?.slug}`}>
                      <img
                        src={product?.photos[0]}
                        alt={product?.title || "Product Image"}
                        className="w-full h-64 object-cover"
                      />
                    </Link>
                    <div className="mt-4">
                      <Link
                        to={`/shop/${product?.slug}`}
                        className="font-bold text-xl capitalize"
                      >
                        {product?.title}
                      </Link>
                      <p className="text-gray-600 text-[16px] mt-3">
                        {product?.discountValue > 0 ? (
                          <>
                            <span className="line-through text-red-500 mr-2">
                              <FaBangladeshiTakaSign className="inline" />
                              {product?.price}
                            </span>
                            <span>
                              <FaBangladeshiTakaSign className="inline" />
                              {product?.salePrice}
                            </span>
                          </>
                        ) : (
                          <span>
                            <FaBangladeshiTakaSign className="inline" />
                            {product?.salePrice}
                          </span>
                        )}
                      </p>
                      <div className="flex justify-between items-center mt-4 w-[80%] mx-auto">
                        <button
                          onClick={() => handleBuyNow(product)}
                          className="rounded-full text-white bg-[#178843] hover:bg-secondary transition-all px-4 py-1 text-sm"
                        >
                          Buy Now
                        </button>
                        <button
                          onClick={() => handleAddtoCart(product)}
                          className="bg-[#178843] hover:bg-secondary transition-all text-white rounded-full px-1.5 py-1"
                        >
                          <IoCart className="inline w-5 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="h-32 flex items-center justify-center text-2xl font-semibold text-primary">
                No Products Available!
              </p>
            )}
          </div>
          <div className="flex justify-center mt-8">
            <Link to="/shop">
              <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition-all duration-300">
                View Shop
              </button>
            </Link>
          </div>
        </div>
      </Containar>
    </div>
  );
};

export default Product;
