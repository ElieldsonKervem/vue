<template>
    <div class='form-container'>
      <form @submit.prevent='handleSubmit'>
        <div class='form-group'>
          <label for='nameCreate'>Name</label>
          <input type='text' id='nameCreate' v-model='nameCreate'/>
          <span v-if='errors.nameCreate' class='error'>{{ errors.nameCreate }}</span>
        </div>
  
        <div class="form-group">
          <label for="emailCreate">Email:</label>
          <input type="email" id="emailCreate" v-model="emailCreate" />
          <span v-if="errors.emailCreate" class="error">{{ errors.emailCreate }}</span>
        </div>
  
        <div class="form-group">
          <label for="passwordCreate">Password</label>
          <input type="password" id="passwordCreate" v-model="passwordCreate"/>
          <span v-if="errors.passwordCreate" class="error">{{ errors.passwordCreate }}</span>
        </div>
  
        <div class="form-group">
          <label for="passwordConfirm">Password Confirm</label>
          <input type="password" id="passwordConfirm" v-model="passwordConfirm"/>
          <span v-if="errors.passwordConfirm" class="error">{{ errors.passwordConfirm }}</span>
        </div> 
  
        <button type="submit" class="btn btn-primary  btn-lg btnSubmit">Create count</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'FormComponent',
  
    setup() {
      const nameCreate = ref("");
      const emailCreate = ref("");
      const passwordCreate = ref("");
      const passwordConfirm = ref("");
      const errors = ref({});
  
      const validateForm = () => {
        const newErrors = {};
        if (!nameCreate.value) newErrors.nameCreate = 'Name is required';
        if (!emailCreate.value) newErrors.emailCreate = 'Email is required';
        if (!passwordCreate.value) newErrors.passwordCreate = 'Password is required';
        if (!passwordConfirm.value) newErrors.passwordConfirm = 'Confirm password is required';
        errors.value = newErrors;
        return Object.keys(newErrors).length === 0;
      };
  
      const handleSubmit = async () => {
        if (validateForm()) {
          try {
            const response = await fetch('http://localhost:3000/submit', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                nameCreate: nameCreate.value,
                emailCreate: emailCreate.value,
                passwordCreate: passwordCreate.value,
                passwordConfirm: passwordConfirm.value,
              }),
            });
  
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
  
            const data = await response.json();
            console.log('Success:', data);
          } catch (error) {
            console.error('Error:', error);
          }
        }

        console.log(nameCreate)
      };
  
      return {
        nameCreate,
        emailCreate,
        passwordCreate,
        passwordConfirm,
        errors,
        handleSubmit,
      };
    },
  };
  </script>
  
  <style scoped>
  .form-container {
    display:flex;
    flex-direction:column;
    margin: 5rem auto;
  }

  form{
    max-width:100rem
  }
  input{
    box-shadow: 0px 4px 4px 0px #00000040;
    border:none;
    margin-bottom:2rem;
    height: 4rem;
    
  }

  label{
    font-size:2.3rem;
    margin-bottom:1rem;
    font-weight: 300;
  }

  .form-group {
    display:flex;
    flex-direction:column;
    margin-bottom: 1rem;
  }

  .btnSubmit[data-v-c86d86ae] {
    width: 50rem;
    margin: 0 auto;
    font-size: 2rem;
    text-align: center;
    display: block;
    height: 5rem;
    font-weight: 800;
    margin-top: 5rem;
  }
  .error {
    color: red;
    font-size: 1.25rem;
  }
  </style>
  