import React from "react";
import "./ViewTask";
import Todotable from "./Todotable";
import Ongoingtable from "./Ongoingtable";
import Completedtable from "./Completedtable";
export const ViewTask = () =>
 {
  return (
    <div >
           

    </div>
  );
};
  
export const Todo = () => {
  return (
    <div >
      
      <Todotable></Todotable>
    </div>
  );
};
  
export const Ongoing = () => {
  return (
    <div >
      <Ongoingtable></Ongoingtable>
    </div>
  );
};

export const Completed = () => {
  return (
    <div >
      <Completedtable></Completedtable>
    </div>
  );
};


