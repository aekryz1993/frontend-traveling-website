import formStyle from "../stylesheet/components/form.css";

const Form = () => {
  return (
    <form>
      <input type="text" name="name" placeholder="Enter your name" className={`${formStyle.input} ${formStyle.form}`} />
      <input type="email" name="email" placeholder="Enter a valid email address" className={`${formStyle.input} ${formStyle.form}`} />
      <input type="text" name="message" placeholder="Enter your message" className={`${formStyle.form} ${formStyle.textarea}`} />
      <input type="submit" name="submit" className={`${formStyle.form} ${formStyle.submit}`} />
    </form>
  )
}

export default Form