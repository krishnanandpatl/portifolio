import{r as a,a as t,F as o}from"./index-da4cc1a3.js";import"./carousel.min-e3a87d35.js";function g({val:r}){const[n,i]=a.useState([]);return a.useEffect(()=>{fetch(`/api/image/${r}`).then(e=>e.json()).then(e=>{i(e.images)}).catch(e=>{console.log(e)})},[]),t(o,{children:n.map(function(e,s){return t("div",{children:t("img",{src:e,alt:"",loading:"eager"})},s)})})}export{g as W};
