/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import db from "../firebase";
import { selectUser } from "../features/userSlice";
import { loadStripe } from "@stripe/stripe-js";

const PlansScreen = () => {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products); //TODO: RIGHT PLACE
      });
    // setProducts(products); //!!wring place
    return null;
  }, []);

  //SUBSCRIPTION USE EFFECT
  useEffect(() => {
      //get customers data
      db.collection('customers')
      .doc(user.uid) //select user based on Id
      .collection('subscriptions') //select subscription
      .get()  //get IT
      .then( querySnapshot =>{
        querySnapshot.forEach( async subscription =>{
          //set subscrition by looping in subscription data 
          setSubscription({
            role: subscription.data().role,
            // googl seconds
            current_period_start :subscription.data().current_period_start.seconds,
            current_period_end : subscription.data().current_period_end.seconds,
          })
        })
      })


    return () => {
      
    }
    //!! this depends of userid and dispatch
  }, [user.uid]);

  console.log(products);
  console.log("SUBSCRIPTION",subscription);

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection('checkout_sessions')
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();

      if (error) {
        //* show error to customers
        //* inspect and your cloud function log in firebase console
        alert(`wait error occured${error.message}`);
      }

      if (sessionId) {
        //!! load stripe page

        const stripe = await loadStripe(
          'pk_test_51GyeEbEVqeovhuWgKOG0k2zaYQzKtq6dfg4yRDfXqV9vW71aCw70imLxLEGTsdiNBWwaNAo4exnNGd31eD0vkfrz00LrjpTIZQ'
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });

  };

  return (
    <>
      {Object.entries(products).map(([productId, productData]) => {
        //TODO: add some logic to check active subscsription

        const isCurrentPackage = productData.name?.toLowerCase().includes(subscription?.role);

        return (
          <div className="body__plans d-flex justify-content-between align-items-center">
            <p className="body__plans__type">
              netflix {productData.name}
              <br />
              {productData.description}
            </p>
            <button
              onClick={() => loadCheckout(productData.prices.priceId)}
              className={`btn btn-danger ${!isCurrentPackage ? 'body__plans__btn' : 'body__plans__btn__currentplan'}`}
            >
              {isCurrentPackage ? 'Current Plan' : 'Subscribe' }
            </button>
          </div>
        );
      })}
    </>
  );
};

export default PlansScreen;

//  <div className="body__plans d-flex justify-content-between align-items-center">
//         <p className="body__plans__type">
//           netflix basic
//           <br />
//           480p
//         </p>
//         <button className="btn btn-danger body__plans__btn">Subscribe</button>
//       </div>

//       <div className="body__plans d-flex justify-content-between align-items-center">
//         <p className="body__plans__type">
//           netflix premium
//           <br />
//           4k- HDR
//         </p>
//         <button className="btn btn-danger  body__plans__btn__currentplan ">
//           current plan
//         </button>
//       </div>
