import { Link } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

export function Illustrations() {
  return (
    <div className="right-container">
      <div className="card-top">Illustrations</div>
      <img
        className="right-container-image"
        src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
        alt="Illustration"
      />
      <p className="right-container-content">
        Add some quality, svg illustrations to your project courtesy of{" "}
        <Link href="https://undraw.co/" underline="hover">
          unDraw
        </Link>{" "}
        , a constantly updated collection of beautiful svg images that you can
        use completely free and without attribution!
      </p>
      <p className="right-link">
        <Link href="https://undraw.co/" underline="hover">
          Browse Illustrations on unDraw
          <EastIcon />
        </Link>
      </p>
      <div className="right-bottom-container">
        <div className="card-top">Development Approach</div>
        <p className="right-bottom-content1">
          SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order
          to reduce CSS bloat and poor page performance. Custom CSS classes are
          used to create custom components and custom utility classes.
        </p>
        <p className="right-bottom-content2">
          Before working with this theme, you should become familiar with the
          Bootstrap framework, especially the utility classes.
        </p>
      </div>
    </div>
  );
}
