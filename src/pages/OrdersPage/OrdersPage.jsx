import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import "./OrdersPage.css";

import socksImage from "../../assets/images/products/athletic-cotton-socks-6-pairs.jpg";

import tshirtImage from "../../assets/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg";
import basketballImage from "../../assets/images/products/intermediate-composite-basketball.jpg";
import buyAgainIcon from "../../assets/images/icons/buy-again.png";
import axios, { formToJSON } from "axios";
import dayjs from "dayjs";
import { formatMoney } from "../../utils/money";

const OrdersPage = ({ carts }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("/api/orders?expand=products")
      .then((response) => setOrders(response.data));
  }, []);
  return (
    <>
      <Helmet>
        <title>orders page</title>
        <link rel="icon" type="image/svg+xml" href="/orders-favicon.png" />
      </Helmet>
      <link rel="icon" type="image/svg+xml" href="/orders-favicon.png" />
      <Header />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => {
            return (
              <div key={order.id} className="order-container">
                <div className="order-header">
                  <div className="order-header-left-section">
                    <div className="order-date">
                      <div className="order-header-label">Order Placed:</div>
                      <div>{dayjs(order.orderTimeMs).format("MMMM D")}</div>
                    </div>
                    <div className="order-total">
                      <div className="order-header-label">Total:</div>
                      <div>{formatMoney(order.totalCostCents)}</div>
                    </div>
                  </div>

                  <div className="order-header-right-section">
                    <div className="order-header-label">Order ID:</div>
                    <div>{order.id}</div>
                  </div>
                </div>

                <div className="order-details-grid">
                  {order.products.map((orderProduct) => {
                    return (
                      <Fragment key={orderProduct.product.id}>
                        <div className="product-image-container">
                          <img src={orderProduct.product.image} />
                        </div>

                        <div className="product-details">
                          <div className="product-name">
                            {orderProduct.product.name}
                          </div>
                          <div className="product-delivery-date">
                            Arriving on:{" "}
                            {dayjs(
                              orderProduct.product.estimatedDeliveryTimeMs
                            ).format("MMMM D")}
                          </div>
                          <div className="product-quantity">Quantity: {orderProduct.quantity}</div>
                          <button className="buy-again-button button-primary">
                            <img
                              className="buy-again-icon"
                              src={buyAgainIcon}
                            />
                            <span className="buy-again-message">
                              Add to Cart
                            </span>
                          </button>
                        </div>

                        <div className="product-actions">
                          <Link to="/tracking">
                            <button className="track-package-button button-secondary">
                              Track package
                            </button>
                          </Link>
                        </div>

                        <div className="product-image-container">
                          <img src={tshirtImage} />
                        </div>

                        <div className="product-details">
                          <div className="product-name">
                            Adults Plain Cotton T-Shirt - 2 Pack
                          </div>
                          <div className="product-delivery-date">
                            Arriving on: August 19
                          </div>
                          <div className="product-quantity">Quantity: 2</div>
                          <button className="buy-again-button button-primary">
                            <img
                              className="buy-again-icon"
                              src={buyAgainIcon}
                            />
                            <span className="buy-again-message">
                              Add to Cart
                            </span>
                          </button>
                        </div>

                        <div className="product-actions">
                          <Link to="/tracking">
                            <button className="track-package-button button-secondary">
                              Track package
                            </button>
                          </Link>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            );
          })}

        
        </div>
      </div>
    </>
  );
};

export default OrdersPage;
