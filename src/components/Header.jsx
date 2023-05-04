import React from 'react'

const Header = () => {
  return (
    <>
    <div class="container-fluid bg-dark px-5 d-none d-lg-block">
    <div class="row gx-0">
        <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div class="d-inline-flex align-items-center">
                <small class="me-3 text-light"><i class="fa fa-map-marker-alt me-2"></i>A-15, Nizamuddin West, Delhi 110013</small>
                <small class="me-3 text-light"><i class="fa fa-phone-alt me-2"></i>+00000</small>
                <small class="text-light"><i class="fa fa-envelope-open me-2"></i>infosankatmochak@gmailcom</small>
            </div>
        </div>
        <div class="col-lg-4 text-center text-lg-end">
            <div class="d-inline-flex align-items-center">
                <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="/"><i class="fab fa-twitter fw-normal"></i></a>
                <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="/"><i class="fab fa-facebook-f fw-normal"></i></a>
                <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="/"><i class="fab fa-linkedin-in fw-normal"></i></a>
                <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="/"><i class="fab fa-instagram fw-normal"></i></a>
                <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="/"><i class="fab fa-youtube fw-normal"></i></a>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default Header