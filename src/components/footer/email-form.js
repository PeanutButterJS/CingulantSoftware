import styled from 'styled-components';
import Input from './input';
import Textarea from './textarea';
import Button from './button';
import Field from './field';

const Form = styled.form`
  margin: 0 3em 0 0;
  width: calc(50% - 1.5em);
  box-sizing: border-box;
  @media screen and (max-width: 980px) {
    width: 100%;
    margin: 0 0 4em 0;
  }
  @media screen and (max-width: 736px) {
    margin: 0 0 3em 0;
  }
`;

const Fields = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 3em);
  margin: -1.5em 0 2em -1.5em;
  box-sizing: border-box;
  @media screen and (max-width: 480px) {
    width: calc(100% + 3em);
    margin: -1.5em 0 2em -1.5em;
  }
`;

export const EmailForm = () => (
  <Form
    className="form"
    action="https://formspree.io/aeweinraub@gmail.com"
    method="POST"
  >
    <Fields>
      <Field name="name" label="Name">
        <Input type="text" name="name" id="name" />
      </Field>
      <Field name="email" label="Email">
        <Input type="text" name="email" id="email" />
      </Field>
      <Field name="message" label="Message">
        <Textarea rows="4" name="message" id="message" />
      </Field>

      <Button type="submit" value="CONTACT" />
    </Fields>
  </Form>
);

export default EmailForm;
