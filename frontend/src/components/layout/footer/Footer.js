import "bootstrap-icons/font/bootstrap-icons.css";
import "./footer.css";

const Footer = () => {
    const year = new Date().getFullYear();
  return (<>
    <footer className="text-center text-white">
  {/* <!-- Grid container --> */}
  <div className="container-fluid pt-4">
    {/* <!-- Section: Social media --> */}
    <section className="mb-4">
      {/* <!-- Facebook --> */}
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="bi bi-facebook"></i></a>

      {/* <!-- Twitter --> */}
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="bi bi-twitter"></i></a>

      {/* <!-- Instagram --> */}
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="bi bi-instagram"></i></a>

      {/* <!-- Linkedin --> */}
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="bi bi-linkedin"></i></a>
      {/* <!-- Github --> */}
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="bi bi-github"></i></a>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div className="ourFooter text-center text-dark p-3" >
    © {year} Copyright: PrepLog
  </div>
  {/* <!-- Copyright --> */}
</footer>
  </>);
};

export default Footer;
