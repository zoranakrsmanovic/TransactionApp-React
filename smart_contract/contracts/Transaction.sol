//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Transaction { // contract === class
    uint256 transactionCount;

    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword); //function

    struct TransferStruct{ //similar to an object, constructor for an object function, these are the properties that our transaction needs to have
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions; //array of above 'object'

    function addToBlockChain(address payable receiver, uint amount, string memory message, string memory keyword) public{
        transactionCount +=1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword)); //just adding the transaction to the list of all transactions, but we are not actually making the transfer

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword); // to make a transfer we need to emit it


    }
    function getAllTransactions() public view returns(TransferStruct[] memory) { // returns an array of transferstruct from memory
        return transactions;
    }
    function getTransactionCount() public view returns(uint256){
        return transactionCount;
    }
   
}