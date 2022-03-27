import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FormContainer, Form, H1, H4, Submit, Textarea, InputContainer, Input, StyledInput, Label, Label2, InputButton} from './ContactElements'

const Contact = () => {
  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

     emailjs.sendForm('service_04jdhuh', 'template_14qarcs', form.current, '_Hgms8Yx9pgBIDpMC')
       .then((result) => {
           console.log(result.text);
       }, (error) => {
           console.log(error.text);
       });
       e.target.reset();
   };

  return (
    <FormContainer id="contact">
    <H1>Contact us</H1>
    <H4>We'd love to talk business with you!</H4>
      <form ref={form} onSubmit={sendEmail}>
      <InputContainer>    
				<StyledInput>
					<Input type="text" name="name" placeholder="" required />
					<Label>Name</Label> 
				</StyledInput>
				<StyledInput>
					<Input type="text" name="email" placeholder="" required />
					<Label>Email</Label> 
				</StyledInput>
				<StyledInput>
					<Textarea name="message" placeholder="" required></Textarea>
					<Label2>Message</Label2>
				</StyledInput>
          <InputButton type="submit"  value="Send Message"/>
      </InputContainer>
      </form>
    </FormContainer>
  );
};

export default Contact

