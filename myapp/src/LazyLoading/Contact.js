function Contact() {
  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "10px",
          border: "1px solid black",
          borderRadius: "10px",
          margin: "10px",
          width: "300px",
        }}
      >
        <label>Name </label>
        <input type="text" placeholder="Enter your name" />
        <label>Email </label>
        <input type="email" placeholder="Enter your email" />
        <button>Submit</button>
      </form>
    </>
  );
}
export default Contact;
