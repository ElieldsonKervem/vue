<template>
   <div class="main">
     <div class="container-fluid bg-dark" >
       <div class="row">
         <div class="col-4" id='homePage'>
           <h1 class="text-light space">Start your tasks with us</h1>
           <h2 class="text-light doubleSpace">
             "Stay organized and boost productivity with our intuitive task management system."
           </h2>
          
           <SliderHome  />
         </div>
         <div class="col-8 bg-light " id='form' >
           <h2>Sign up 
            <p class='paragrh'>Have an a count? <span class='span'> <a class="text-sucess"> Sign in </a></span>
            </p>
          </h2>
          <FormComponent/>
         </div>
       </div>
     </div>
   </div>
 </template>
 
 <script>
 import SliderHome from "../sliderHomeComponent/sliderHome.vue";
 import FormComponent from "../formHome/formHomeLogin.vue"
 export default {
   name: "LeftSideHome",
   components: {
     SliderHome,
     FormComponent
   },
 };
 </script>
 
 <style scoped>
 /* Adicione seu estilo aqui, se necessário */
 #homePage{
    height:100vh;
    margin-top:15rem;
    padding:3rem
 }
 #form{
     height:100vh;
  
    padding:22rem 5rem
 }
 .paragrh{
   font-size:3rem;
   font-weight:300
 }
 
 </style>
 