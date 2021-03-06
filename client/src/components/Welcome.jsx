import React, { useContext } from "react";
import { AiOutlineApi } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import backgound from '../../images/pngwing.com (3).png'


import { Navbar } from ".";
import { Loader } from ".";
import { shortenAddress } from "../utils/shortenAdress";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center  text-sm font-light text-white background: rgba(255, 255, 255) backdrop-blur-sm bg-white/10 hover:bg-white/40  mx-5 my-2 ";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  

  
  const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading  } = useContext(TransactionContext);


  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };



  return (
    <div className="flex-col w-full justify-center items-center wrapper-welcome ">
      <div className="flex  sm:flex-col md:flex-col lg:flex-row 2xl:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 ">
        <div className="flex flex-1 justify-start  items-start flex-col md:mr-10 lg:mb-80">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl text-white text-gradient py-1 send">
            Send Ethereum <br />all around the globe
          </h1>
          <p className="text-left lg:text-start   mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
           
          </p>



          {!currentAccount && (<button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center mt-20 my-10 p-3 rounded-md  border-none cursor-pointer white-glassmorphism "
          >
            <AiOutlineApi className="text-white  icon" />
            <p className="text-white text-base font-semibold connect">
              Connect Wallet
            </p>
          </button>)}

        </div>


        <div className="flex flex-col  flex-1 items-center justify-start w-full md:mt-0  ">
          <div className='wrappeth rounded-xl my-5'>
            <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-0 eth-card .white-glassmorphism ">
              <div className="flex justify-between flex-col w-full h-full">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10  flex justify-center items-center">
                  <SiEthereum fontSize={28} color="#fff" />
                  </div>
                
                </div>
                <div>
                  <p className="text-white font-light text-sm">
                    {shortenAddress(currentAccount)}
                  </p>
                  <p className="text-white font-semibold text-lg mt-1">
                    Ethereum
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;