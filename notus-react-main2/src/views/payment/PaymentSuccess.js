import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { UpdatePaymentSuccess } from './../../redux/actions/payment.js';
import { loadUser } from './../../redux/actions/user.js';
import paymentsuccess from "./../../assets/img/PaymentSuccess.webp"

function PaymentSuccess() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const referenceNum = queryParams.get('reference');
  // const {isAuthenticated, user, error, message} = useSelector(state=>state.user);
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(loadUser());
  // }, [dispatch]);
  // useEffect(()=>{
  //     dispatch(UpdatePaymentSuccess(referenceNum));
  //   }, [dispatch]);
  return (
    // <div className='mt-20 pt-10'>PaymentSuccess

    //     Reference : ${referenceNum}
    // </div>
    <>
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  {/* <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img
                      alt="..."
                      src={require("assets/img/team-2-800x800.jpg").default}
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    />
                  </div>
                </div> */}
                  {/* <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <button
                      className="bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Connect
                    </button>
                  </div>
                </div> */}
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <h3 className="text-4xl font-semibold leading-normal text-blueGray-700">
                          Payment Successful
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="mt-0 mb-2">
                    <img src={paymentsuccess} alt="Not Found" style={{ maxWidth: '100%' }} />
                    <span className="flex justify-center text-xl font-bold uppercase tracking-wide text-blueGray-600 mb-8">
                      Reference : ${referenceNum}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default PaymentSuccess