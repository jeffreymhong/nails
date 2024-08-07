export default function Footer() {
  return (
    <footer>
      <p id="top">
        Phone Number: (212)-509-0777 <br />
        Address: 125 Maiden Ln, New York, NY 10038
      </p>
      <p>
        Weekday Hours: 10:30AM - 8PM <br />
        Weekend Hours: 10AM - 7:30PM
      </p>
      <p>
        ©{new Date().getFullYear()} by @
        <a href="mailto:jeffreyhong32@gmail.com">freelancer_jeff</a>
      </p>
    </footer>
  );
}
