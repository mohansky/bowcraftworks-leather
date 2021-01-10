import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';




const initialValues= {
  name: '',
  email: '',
  message: '',
}

const onSubmit= (values, actions) => {        
    fetch("/", {          
      method: "POST",          
      headers: { "Content-Type": "application/x-www-form-urlencoded" },          
      body: encode({ "form-name": "contact", ...values })        
    })        
    .then(() => { 
      alert('Success');          
      actions.resetForm()        
      })        
      .catch(() => {          
      alert('Error');        
      })        
      .finally(() => actions.setSubmitting(false))      
    }    

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    message: Yup.string().required('Required'),
      });


function SignupForm () {

return (
  <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
     <Form>
        <h2>Get in touch</h2>


      <div className="form-control">  
      <Field id="name" name="name" type="text" placeholder="Name" />
      <br/>
      <ErrorMessage name="name">{msg => <div className="errormsg">{msg}</div>}</ErrorMessage>
      </div><br/>

      <div className="form-control">    
      <Field id="email" name="email" type="email" placeholder="Email" />
      <br/>
      <ErrorMessage name="email">{msg => <div className="errormsg">{msg}</div>}</ErrorMessage>
      </div><br/>

      <div className="form-control"> 
      <Field as="textarea" id="message" name="message" type="text" placeholder="Your Message" />
      <br/>
      <ErrorMessage name="message">{msg => <div className="errormsg">{msg}</div>}</ErrorMessage>
      </div> 

        <br/>
       <button className="btn" type="submit">Submit</button>

     </Form>

  </Formik>
      

   );
 };

 
export default SignupForm
