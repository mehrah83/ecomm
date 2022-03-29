const initialState = {
  products: [
    {
      id: 1,
      name: "Men t-shirt summer season",
      image: "1.jpg",
      price: 400,
      discount: 2,
      discountPrice: 400 - (2 / 100) * 400,
      quantity: 1,
      desc: "Cross-sell products throughout the user journey to increase add to cart & avg order value. Deliver customers personalized, frictionless product discovery and recommendations. 24/7/365 support. Boost conversion. Increase Engagement. Improve Retention. White Glove Service. Improve your data quality. Free Demo. Fully Integrated Suite. Unique approach. Increase Conversions.",
    },
    {
      id: 2,
      name: "Women blazzer",
      image: "2.jpg",
      price: 2000,
      discount: 5,
      discountPrice: 2000 - (5 / 100) * 2000,
      quantity: 1,
      desc: "Cross-sell products throughout the user journey to increase add to cart & avg order value. Deliver customers personalized, frictionless product discovery and recommendations. 24/7/365 support. Boost conversion. Increase Engagement. Improve Retention. White Glove Service. Improve your data quality. Free Demo. Fully Integrated Suite. Unique approach. Increase Conversions.",
    },
    {
      id: 3,
      name: "Men trouser's for all seasons",
      image: "3.jpg",
      price: 800,
      discount: 3,
      discountPrice: 800 - (3 / 100) * 800,
      quantity: 1,
      desc: "Cross-sell products throughout the user journey to increase add to cart & avg order value. Deliver customers personalized, frictionless product discovery and recommendations. 24/7/365 support. Boost conversion. Increase Engagement. Improve Retention. White Glove Service. Improve your data quality. Free Demo. Fully Integrated Suite. Unique approach. Increase Conversions.",
    },
    {
      id: 4,
      name: "Men shoes",
      image: "4.jpg",
      price: 2500,
      discount: 4,
      discountPrice: 2500 - (4 / 100) * 2500,
      quantity: 1,
      desc: "Cross-sell products throughout the user journey to increase add to cart & avg order value. Deliver customers personalized, frictionless product discovery and recommendations. 24/7/365 support. Boost conversion. Increase Engagement. Improve Retention. White Glove Service. Improve your data quality. Free Demo. Fully Integrated Suite. Unique approach. Increase Conversions.",
    },
    {
      id: 5,
      name: "Women frook for summer",
      image: "5.jpg",
      price: 600,
      discount: 2,
      discountPrice: 600 - (2 / 100) * 600,
      quantity: 1,
      desc: "Cross-sell products throughout the user journey to increase add to cart & avg order value. Deliver customers personalized, frictionless product discovery and recommendations. 24/7/365 support. Boost conversion. Increase Engagement. Improve Retention. White Glove Service. Improve your data quality. Free Demo. Fully Integrated Suite. Unique approach. Increase Conversions.",
    },
    {
      id: 6,
      name: "Men short jeans",
      image: "6.jpg",
      price: 1000,
      discount: 6,
      discountPrice: 1000 - (6 / 100) * 1000,
      quantity: 1,
      desc: "Cross-sell products throughout the user journey to increase add to cart & avg order value. Deliver customers personalized, frictionless product discovery and recommendations. 24/7/365 support. Boost conversion. Increase Engagement. Improve Retention. White Glove Service. Improve your data quality. Free Demo. Fully Integrated Suite. Unique approach. Increase Conversions.",
    },
    {
      id: 7,
      name: "Men trackpants",
      image: "7.jpg",
      price: 1100,
      discount: 2,
      discountPrice: 1100 - (2 / 100) * 1100,
      quantity: 1,
      desc: "Cross-sell products throughout the user journey to increase add to cart & avg order value. Deliver customers personalized, frictionless product discovery and recommendations. 24/7/365 support. Boost conversion. Increase Engagement. Improve Retention. White Glove Service. Improve your data quality. Free Demo. Fully Integrated Suite. Unique approach. Increase Conversions.",
    },
    {
      id: 8,
      name: "Men Jackets",
      image: "8.jpg",
      price: 4000,
      discount: 7,
      discountPrice: 4000 - (7 / 100) * 4000,
      quantity: 1,
      desc: "Cross-sell products throughout the user journey to increase add to cart & avg order value. Deliver customers personalized, frictionless product discovery and recommendations. 24/7/365 support. Boost conversion. Increase Engagement. Improve Retention. White Glove Service. Improve your data quality. Free Demo. Fully Integrated Suite. Unique approach. Increase Conversions.",
    },
    {
      id: 9,
      name: "Men Shirt",
      image: "9.jpg",
      price: 500,
      discount: 4,
      discountPrice: 500 - (4 / 100) * 500,
      quantity: 1,
      desc: "Cross-sell products throughout the user journey to increase add to cart & avg order value. Deliver customers personalized, frictionless product discovery and recommendations. 24/7/365 support. Boost conversion. Increase Engagement. Improve Retention. White Glove Service. Improve your data quality. Free Demo. Fully Integrated Suite. Unique approach. Increase Conversions.",
    },
    {
      id: 10,
      name: "Men Jacket",
      image: "10.jpg",
      price: 5000,
      discount: 3,
      discountPrice: 5000 - (3 / 100) * 5000,
      quantity: 1,
      desc: "Cross-sell products throughout the user journey to increase add to cart & avg order value. Deliver customers personalized, frictionless product discovery and recommendations. 24/7/365 support. Boost conversion. Increase Engagement. Improve Retention. White Glove Service. Improve your data quality. Free Demo. Fully Integrated Suite. Unique approach. Increase Conversions.",
    },
  ],
  product: {},
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PRODUCT":
      return {
        ...state,
        product: state.products.find(
          (product) => product.id === parseInt(action.id)
        ),
      };
    default:
      return state;
  }
};

export default ProductsReducer;
