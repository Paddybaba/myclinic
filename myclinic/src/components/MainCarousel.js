import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const MainCarousel = () => {
  const slides = [
    "https://lh3.googleusercontent.com/s4_cyX4hv-kLhmKUSi7DKV8Mdhdwhh-kNpqDDNyiidQFVG3nYORIrjYooFNC-Wn57epWQ3Y8TW159AsWbC1v9yQ52OEFl9VDzVCYOFua_kCAtbUDjsSNxBhifBs07oWShCmwDgpuiHC7gLoQQuyResjOseXrb2sHzvnLGCBq4NZQIrcpvDg5pepfyjcCLb9yq4wEZaJfVhIVjlp1p7YPFYbBycDsK9GS2Sp9xz_pSjpML7_83jKb0ANrm5za0eyEii83BMLoquUDbpAMunrfvIOcgj2l7js4TMe18XG1vu25OWXcHGujwiNbGneWNV99tSHUXtCBP7Yev_1IxmYh65sYnan1kkWm2Lz-SGOO0eccMq_Zb82zgb-6LAI9VaO2VlaSDhJL8bVRElgqKgfgjKho0UFNDjiOI3x4g6W79mk50aj5QeULDq-i1kwu7FtSidadyF-xcIsxcHXdEfNeyI5B6hmKBobNMRiCqEwZ_fkTFOm4pf73u-j7mPzo5cvYCgVfFBA1gobpopWK--TFIIs2VwlyJUXy5fhxWF55MUnD8UOeFvzkD2yg7U3sAX9rQNYUgq36iPiQYhZaeLyq-i9KIvrR8N9aOXOJBV5VwtTBX_rK5LtxADfB3XKauxFX1uPajF-a_BR1vwHJxE2JBXKfKHww0HuKNBnmyKuAVGBvhCJfI04LiE25BiigzxsF7ZDHlErGj2qt5VEqLMhKb8qp=w800-h600-no?authuser=0",
    "https://lh3.googleusercontent.com/2z5rnFDShrP8CZ8EFrLSivDJUmYgEwFkDRjW8vVUmOB4AGym8CIc3Ew7OMVXsT9H2mgVNNPocEHE13j2PxCwWH1aEQI0zXfXi2Ox76ZKGMH6Bl60iaf7gPN2DpONgpPWAUhFlk8fQD-dNAawdtvuTqeloINlQtduUEnEXZOQ1tIZ3qJq-QEI1K74S83JCvFYCKaL48snIm-tIK1dSf19rON0flkeLn50obFzbJwRfRof4FnzwVhN-KNs_TAPc5Ssqu-54WjT4zDQjvHEGEtTejUB7L7VSMwkElrNk3DelQM8Z3kbGKcNRXmfhsfRfcO4wVulsJ7KpnIB2iNfm45Le9IiEnlBCIr6UcAUfip2nl-6xkaYeLORQDX3tLRpmHDYbAyNFBUiDwB82lx-e4ooqRrEuMnOXnVxUJa67eD1Yid7usUVkauFqSqdbcFYX91p7PsSwp_-b95NKggqSC6bg2CbvVKHDDmRgqcXSgbqp7Zhv0iqm3jqYbj-KDLAS1AjcE_40Fo6KYTyti_cGD3jaheXxGupYk5xE4k4Y0gvlxUfaz5bSJdYHUyJyyfgmZvcTy_Xxpf_WYDys3oFgqzrXgLGLVMiCw1j5IJTbgJs2UFd_VmrE6DzeS7-RW2jMkktEr1Y6MsEC7rvo_QKRvqj5awnTtsaplr0w_3BfhotQy3X9qya91APA99kxkYjoKU6oX1deeURINnFEWMA_J3MkzQO=w800-h600-no?authuser=0",
    "https://lh3.googleusercontent.com/t9zBGd75tW4CzNJUreQoHLCFOjirOJVYLIB5xB7sw7V7dzsbINQcYxAXpsOnFsuMgsx2-lYQEiUZJBDrECrfUtYGtmSvxzCznrcPlQ_RaJg-XyGIq_yaiaT36tEHOsCOc8_glTEVtlgmtZt2n4_tl6y-ZNUNuiT-MOPBk0dDtT8O0PHWahjLpfHOBo4h_bkKRXYPkeE8GTCp9345PGaG1CIkGGVFZTsll-tTlBmXcwu70ekWY0wD89KGH54CKxcQX0hCbIx9gke-nilDwyqhE8PxqPafYYEEWH3jcXE1fVyl0y8K6QPw88B501txH4AaQYJkSGEFiID03jS0b9s_cqteT1XHkgzrU8e1ghJ2ZQoyKUsy5Knja-6k-WxeeNGJuglRk-_mcAkfYAoyJ42woUH29ndjO-fmuh5P32wDUHIatVPJI6HdHcjzxrj_shCUWmw7GG2ZAKeNkJt2BIh6DJlNHfnTSBWX0Ypxrr79pflVqUbHzYd9uYk9bZKJBYn7iv8HeGeGOWMVl1VPRl5kO6DUwdTSikjYXw6zF5IIrkToTNuSQRPzHUwJfDbd8AgVZ3Amr94mqhe-Vx2cZzMN8diWJkdrIy3uMmX0fZioyG-YteJb-i2NfGL16Dxjtda5JzqkwKjsS6Mg4YhaUa8TxZUawhlmy9t8sOed5dxiOHXZVO424BxEfG315p2OMES9Jp1jkYf2Pq1nYq8pWSIbLT8Y=w800-h600-no?authuser=0",
  ];
  return (
    <>
      <div className="">
        <Carousel fade interval={10000} controls={false} indicators={false}>
          {slides.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 p-2 border-rounded"
                  src={item}
                  alt=""
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default MainCarousel;
