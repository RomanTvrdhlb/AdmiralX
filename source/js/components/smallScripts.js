import {
    removeClassInArray,
    addCustomClass,
    toggleCustomClass,
  } from "../functions/customFunctions";
  import vars from "../_vars";

const { burger, asideMenu } = vars;

burger.addEventListener('click', function(e){
  e.preventDefault();
  toggleCustomClass(asideMenu, 'active');
})