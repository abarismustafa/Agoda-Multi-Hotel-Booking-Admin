import { Link } from "react-router-dom";

function GalleryImage() {
  return (
    <>
      <div className="aiz-user-panel overflow-hidden">
        <div className="aiz-titlebar mt-2 mb-4">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="h3">Gallery Images</h1>
            </div>
          </div>
        </div>
        <div className="row gutters-10">
          <div className="col-md-5 mx-auto mb-3">
            <div className="bg-grad-1 text-white rounded-lg overflow-hidden">
              <span className="size-30px rounded-circle mx-auto bg-soft-primary d-flex align-items-center justify-content-center mt-3">
                <i className="las la-image la-2x text-white" />
              </span>
              <div className="px-3 pt-3 pb-3">
                <div className="h4 fw-700 text-center">75</div>
                <div className="opacity-50 text-center">
                  Remaining Gallery Image Upload
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 mx-auto mb-3">
            <Link to="/packages">
              <div className="p-3 rounded mb-3 c-pointer text-center bg-white shadow-sm hov-shadow-lg has-transition">
                <span className="size-60px rounded-circle mx-auto bg-secondary d-flex align-items-center justify-content-center mb-3">
                  <i className="las la-plus la-3x text-white" />
                </span>
                <div className="fs-18 text-primary">Add New Image</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="card-columns">
          <div className="card hov-overlay">
            <img
              src="https://demo.activeitzone.com/matrimonial/public/uploads/all/4vLHEqTzJ6pURqb9wnVIPMt4WTjmPcX9wykeyhwE.jpg"
              className="card-img"
              alt="Image"
            />
            <div className="overlay">
              <div className="absolute-center">
                <a
                  target="_blank"
                  href="https://demo.activeitzone.com/matrimonial/public/uploads/all/4vLHEqTzJ6pURqb9wnVIPMt4WTjmPcX9wykeyhwE.jpg"
                  className="btn btn-light btn-icon btn-circle btn-sm"
                  title="View"
                >
                  <i className="las la-search" />
                </a>
                <a
                  onclick="remove_shortlist('https://demo.activeitzone.com/matrimonial/gallery_image/destroy/97')"
                  className="btn btn-light btn-icon btn-circle btn-sm"
                  title="Remove"
                >
                  <i className="las la-trash-alt" />
                </a>
              </div>
            </div>
          </div>
          <div className="card hov-overlay">
            <img
              src="https://demo.activeitzone.com/matrimonial/public/uploads/all/eD401Dp8V7uKYR9qKVZPZIZ4tk99P1n4yYJP7Hwt.jpg"
              className="card-img"
              alt="Image"
            />
            <div className="overlay">
              <div className="absolute-center">
                <a
                  target="_blank"
                  href="https://demo.activeitzone.com/matrimonial/public/uploads/all/eD401Dp8V7uKYR9qKVZPZIZ4tk99P1n4yYJP7Hwt.jpg"
                  className="btn btn-light btn-icon btn-circle btn-sm"
                  title="View"
                >
                  <i className="las la-search" />
                </a>
                <a
                  onclick="remove_shortlist('https://demo.activeitzone.com/matrimonial/gallery_image/destroy/96')"
                  className="btn btn-light btn-icon btn-circle btn-sm"
                  title="Remove"
                >
                  <i className="las la-trash-alt" />
                </a>
              </div>
            </div>
          </div>
          <div className="card hov-overlay">
            <img
              src="https://demo.activeitzone.com/matrimonial/public/uploads/all/3AGxwfosUOibn4oaMdwIM3Bt3vqRQVwASdU524j3.jpg"
              className="card-img"
              alt="Image"
            />
            <div className="overlay">
              <div className="absolute-center">
                <a
                  target="_blank"
                  href="https://demo.activeitzone.com/matrimonial/public/uploads/all/3AGxwfosUOibn4oaMdwIM3Bt3vqRQVwASdU524j3.jpg"
                  className="btn btn-light btn-icon btn-circle btn-sm"
                  title="View"
                >
                  <i className="las la-search" />
                </a>
                <a
                  onclick="remove_shortlist('https://demo.activeitzone.com/matrimonial/gallery_image/destroy/95')"
                  className="btn btn-light btn-icon btn-circle btn-sm"
                  title="Remove"
                >
                  <i className="las la-trash-alt" />
                </a>
              </div>
            </div>
          </div>
          <div className="card hov-overlay">
            <img
              src="https://demo.activeitzone.com/matrimonial/public/uploads/all/U7RugpxxGRXcLbXPen3n4ttZT9xRlaVqyIBnxzUB.jpg"
              className="card-img"
              alt="Image"
            />
            <div className="overlay">
              <div className="absolute-center">
                <a
                  target="_blank"
                  href="https://demo.activeitzone.com/matrimonial/public/uploads/all/U7RugpxxGRXcLbXPen3n4ttZT9xRlaVqyIBnxzUB.jpg"
                  className="btn btn-light btn-icon btn-circle btn-sm"
                  title="View"
                >
                  <i className="las la-search" />
                </a>
                <a
                  onclick="remove_shortlist('https://demo.activeitzone.com/matrimonial/gallery_image/destroy/94')"
                  className="btn btn-light btn-icon btn-circle btn-sm"
                  title="Remove"
                >
                  <i className="las la-trash-alt" />
                </a>
              </div>
            </div>
          </div>
          <div className="card hov-overlay">
            <img
              src="https://demo.activeitzone.com/matrimonial/public/uploads/all/2dctS2CapY1xK1Tj22OnUVDLSvwGKqgj9qtzKRHJ.jpg"
              className="card-img"
              alt="Image"
            />
            <div className="overlay">
              <div className="absolute-center">
                <a
                  target="_blank"
                  href="https://demo.activeitzone.com/matrimonial/public/uploads/all/2dctS2CapY1xK1Tj22OnUVDLSvwGKqgj9qtzKRHJ.jpg"
                  className="btn btn-light btn-icon btn-circle btn-sm"
                  title="View"
                >
                  <i className="las la-search" />
                </a>
                <a
                  onclick="remove_shortlist('https://demo.activeitzone.com/matrimonial/gallery_image/destroy/93')"
                  className="btn btn-light btn-icon btn-circle btn-sm"
                  title="Remove"
                >
                  <i className="las la-trash-alt" />
                </a>
              </div>
            </div>
          </div>
          <div className="card hov-overlay">
            <img
              src="https://demo.activeitzone.com/matrimonial/public/uploads/all/rBwLVW8cIENDlGPIn7x89nptDdFHS8sjrUVI5uaK.jpg"
              className="card-img"
              alt="Image"
            />
            <div className="overlay">
              <div className="absolute-center">
                <a
                  target="_blank"
                  href="https://demo.activeitzone.com/matrimonial/public/uploads/all/rBwLVW8cIENDlGPIn7x89nptDdFHS8sjrUVI5uaK.jpg"
                  className="btn btn-light btn-icon btn-circle btn-sm"
                  title="View"
                >
                  <i className="las la-search" />
                </a>
                <a
                  onclick="remove_shortlist('https://demo.activeitzone.com/matrimonial/gallery_image/destroy/92')"
                  className="btn btn-light btn-icon btn-circle btn-sm"
                  title="Remove"
                >
                  <i className="las la-trash-alt" />
                </a>
              </div>
            </div>
          </div>
          <div className="card hov-overlay">
            <img
              src="https://demo.activeitzone.com/matrimonial/public/uploads/all/lF2N0QnCekAwrZufcmhVlygBoH4kJ8ardlh0pPKa.jpg"
              className="card-img"
              alt="Image"
            />
            <div className="overlay">
              <div className="absolute-center">
                <a
                  target="_blank"
                  href="https://demo.activeitzone.com/matrimonial/public/uploads/all/lF2N0QnCekAwrZufcmhVlygBoH4kJ8ardlh0pPKa.jpg"
                  className="btn btn-light btn-icon btn-circle btn-sm"
                  title="View"
                >
                  <i className="las la-search" />
                </a>
                <a
                  onclick="remove_shortlist('https://demo.activeitzone.com/matrimonial/gallery_image/destroy/91')"
                  className="btn btn-light btn-icon btn-circle btn-sm"
                  title="Remove"
                >
                  <i className="las la-trash-alt" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default GalleryImage;
