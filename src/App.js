import './App.css';

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="header-nav">
            <a className="header-logo" href="#home">
              <img
                width={50}
                height={50}
                src={process.env.PUBLIC_URL + '/logo192.png'}
                alt="Campers"
              />
            </a>
            <ul className="header-nav-list">
              <li className="header-nav-list-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="header-nav-list-item">
                <a className="nav-link" href="#catalog">
                  Catalog
                </a>
              </li>
              <li className="header-nav-list-item">
                <a className="nav-link" href="#favorites">
                  Favorites
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main">
        <section
          id="hero"
          className="hero-section"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/hero-bg.webp'})`,
          }}
        >
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Rent a camper <br /> hit the road!
              </h1>
              <p className="hero-sub-title">
                Choose the perfect camper for your next adventure from the
                largest selection of campervans in the world.
              </p>
              <a href="#catalog" className="button main-button">
                View catalog
              </a>
            </div>
          </div>
        </section>
        <section className="our-features">
          <div className="container">
            <h2 className="section-title">Our features</h2>
            <ul className="features-list">
              <li className="features-list-item">
                <svg width="64" height="64">
                  <use href={process.env.PUBLIC_URL + '/icons.svg#van'}></use>
                </svg>
                <h3 className="features-list-item-title">Wide choice</h3>
                <p className="features-list-item-text">
                  Choose from over 1000 campervans
                </p>
              </li>
              <li className="features-list-item">
                <svg width="64" height="64">
                  <use
                    href={process.env.PUBLIC_URL + '/icons.svg#map-pin'}
                  ></use>
                </svg>
                <h3 className="features-list-item-title">Location</h3>
                <p className="features-list-item-text">
                  Convenient locations in 105 countries
                </p>
              </li>
              <li className="features-list-item">
                <svg width="64" height="64">
                  <use
                    href={process.env.PUBLIC_URL + '/icons.svg#rateing'}
                  ></use>
                </svg>
                <h3 className="features-list-item-title">Safety</h3>
                <p className="features-list-item-text">
                  Your safety is our top priority
                </p>
              </li>
              <li className="features-list-item">
                <svg width="64" height="64">
                  <use href={process.env.PUBLIC_URL + '/icons.svg#users'}></use>
                </svg>
                <h3 className="features-list-item-title">Support</h3>
                <p className="features-list-item-text">24/7 customer support</p>
              </li>
            </ul>
          </div>
        </section>
        <section id="gallery" className="gallery-section">
          <h2 className="section-title">Create unforgateble memories</h2>
          <ul className="gallery-list">
            <li className="gallery-list-item">
              <img
                src={process.env.PUBLIC_URL + '/images/gallery/img-1.webp'}
                alt="camper"
              />
            </li>
            <li className="gallery-list-item">
              <img
                src={process.env.PUBLIC_URL + '/images/gallery/img-2.webp'}
                alt="camper"
              />
            </li>
            <li className="gallery-list-item">
              <img
                src={process.env.PUBLIC_URL + '/images/gallery/img-3.webp'}
                alt="camper"
              />
            </li>
            <li className="gallery-list-item">
              <img
                src={process.env.PUBLIC_URL + '/images/gallery/img-4.webp'}
                alt="camper"
              />
            </li>
            <li className="gallery-list-item">
              <img
                src={process.env.PUBLIC_URL + '/images/gallery/img-5.webp'}
                alt="camper"
              />
            </li>
            <li className="gallery-list-item">
              <img
                src={process.env.PUBLIC_URL + '/images/gallery/img-6.webp'}
                alt="camper"
              />
            </li>
            <li className="gallery-list-item">
              <img
                src={process.env.PUBLIC_URL + '/images/gallery/img-7.webp'}
                alt="camper"
              />
            </li>
            <li className="gallery-list-item">
              <img
                src={process.env.PUBLIC_URL + '/images/gallery/img-8.webp'}
                alt="camper"
              />
            </li>
            <li className="gallery-list-item">
              <img
                src={process.env.PUBLIC_URL + '/images/gallery/img-9.webp'}
                alt="camper"
              />
            </li>
            <li className="gallery-list-item">
              <img
                src={process.env.PUBLIC_URL + '/images/gallery/img-10.webp'}
                alt="camper"
              />
            </li>

            <li className="gallery-list-item">
              <img
                src={process.env.PUBLIC_URL + '/images/gallery/img-11.webp'}
                alt="camper"
              />
            </li>
            <li className="gallery-list-item">
              <img
                src={process.env.PUBLIC_URL + '/images/gallery/img-12.webp'}
                alt="camper"
              />
            </li>
            <li className="gallery-list-item">
              <img
                src={process.env.PUBLIC_URL + '/images/gallery/img-13.webp'}
                alt="camper"
              />
            </li>
            <li className="gallery-list-item">
              <img
                src={process.env.PUBLIC_URL + '/images/gallery/img-14.webp'}
                alt="camper"
              />
            </li>
            <li className="gallery-list-item">
              <img
                src={process.env.PUBLIC_URL + '/images/gallery/img-15.webp'}
                alt="camper"
              />
            </li>
          </ul>
        </section>
        <section id="reviews" className="reviews-section">
          <div className="container">
            <h2 className="section-title">What our customers say</h2>
            <ul class="reviews-list">
              <li class="reviews-list-item">
                <div class="reviews-user-info">
                  <span class="reviews-user-fl">J</span>
                  <div class="reviews-user-rate-holder">
                    <span class="reviews-user-name">John Doe</span>
                    <ul class="reviews-rate-list">
                      <li class="reviews-rate-list-item">
                        <svg width="16" height="16">
                          <use href="/goit-test-task/icons.svg#rateing"></use>
                        </svg>
                      </li>
                      <li class="reviews-rate-list-item">
                        <svg width="16" height="16">
                          <use href="/goit-test-task/icons.svg#rateing"></use>
                        </svg>
                      </li>
                      <li class="reviews-rate-list-item">
                        <svg width="16" height="16">
                          <use href="/goit-test-task/icons.svg#rateing"></use>
                        </svg>
                      </li>
                      <li class="reviews-rate-list-item">
                        <svg width="16" height="16">
                          <use href="/goit-test-task/icons.svg#rateing"></use>
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
                <p class="reviews-list-item-text">
                  The Mavericks panel truck is a great choice for those who
                  value simplicity and functionality. It has everything you need
                  for a comfortable journey.
                </p>
              </li>
              <li class="reviews-list-item">
                <div class="reviews-user-info">
                  <span class="reviews-user-fl">J</span>
                  <div class="reviews-user-rate-holder">
                    <span class="reviews-user-name">John Doe</span>
                    <ul class="reviews-rate-list">
                      <li class="reviews-rate-list-item">
                        <svg width="16" height="16">
                          <use href="/goit-test-task/icons.svg#rateing"></use>
                        </svg>
                      </li>
                      <li class="reviews-rate-list-item">
                        <svg width="16" height="16">
                          <use href="/goit-test-task/icons.svg#rateing"></use>
                        </svg>
                      </li>
                      <li class="reviews-rate-list-item">
                        <svg width="16" height="16">
                          <use href="/goit-test-task/icons.svg#rateing"></use>
                        </svg>
                      </li>
                      <li class="reviews-rate-list-item">
                        <svg width="16" height="16">
                          <use href="/goit-test-task/icons.svg#rateing"></use>
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
                <p class="reviews-list-item-text">
                  The Mavericks panel truck is a great choice for those who
                  value simplicity and functionality. It has everything you need
                  for a comfortable journey.
                </p>
              </li>
              <li class="reviews-list-item">
                <div class="reviews-user-info">
                  <span class="reviews-user-fl">J</span>
                  <div class="reviews-user-rate-holder">
                    <span class="reviews-user-name">John Doe</span>
                    <ul class="reviews-rate-list">
                      <li class="reviews-rate-list-item">
                        <svg width="16" height="16">
                          <use href="/goit-test-task/icons.svg#rateing"></use>
                        </svg>
                      </li>
                      <li class="reviews-rate-list-item">
                        <svg width="16" height="16">
                          <use href="/goit-test-task/icons.svg#rateing"></use>
                        </svg>
                      </li>
                      <li class="reviews-rate-list-item">
                        <svg width="16" height="16">
                          <use href="/goit-test-task/icons.svg#rateing"></use>
                        </svg>
                      </li>
                      <li class="reviews-rate-list-item">
                        <svg width="16" height="16">
                          <use href="/goit-test-task/icons.svg#rateing"></use>
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
                <p class="reviews-list-item-text">
                  The Mavericks panel truck is a great choice for those who
                  value simplicity and functionality. It has everything you need
                  for a comfortable journey.
                </p>
              </li>
              <li class="reviews-list-item">
                <div class="reviews-user-info">
                  <span class="reviews-user-fl">J</span>
                  <div class="reviews-user-rate-holder">
                    <span class="reviews-user-name">John Doe</span>
                    <ul class="reviews-rate-list">
                      <li class="reviews-rate-list-item">
                        <svg width="16" height="16">
                          <use href="/goit-test-task/icons.svg#rateing"></use>
                        </svg>
                      </li>
                      <li class="reviews-rate-list-item">
                        <svg width="16" height="16">
                          <use href="/goit-test-task/icons.svg#rateing"></use>
                        </svg>
                      </li>
                      <li class="reviews-rate-list-item">
                        <svg width="16" height="16">
                          <use href="/goit-test-task/icons.svg#rateing"></use>
                        </svg>
                      </li>
                      <li class="reviews-rate-list-item">
                        <svg width="16" height="16">
                          <use href="/goit-test-task/icons.svg#rateing"></use>
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
                <p class="reviews-list-item-text">
                  The Mavericks panel truck is a great choice for those who
                  value simplicity and functionality. It has everything you need
                  for a comfortable journey.
                </p>
              </li>
              <li class="reviews-list-item">
                <div class="reviews-user-info">
                  <span class="reviews-user-fl">J</span>
                  <div class="reviews-user-rate-holder">
                    <span class="reviews-user-name">John Doe</span>
                    <ul class="reviews-rate-list">
                      <li class="reviews-rate-list-item">
                        <svg width="16" height="16">
                          <use href="/goit-test-task/icons.svg#rateing"></use>
                        </svg>
                      </li>
                      <li class="reviews-rate-list-item">
                        <svg width="16" height="16">
                          <use href="/goit-test-task/icons.svg#rateing"></use>
                        </svg>
                      </li>
                      <li class="reviews-rate-list-item">
                        <svg width="16" height="16">
                          <use href="/goit-test-task/icons.svg#rateing"></use>
                        </svg>
                      </li>
                      <li class="reviews-rate-list-item">
                        <svg width="16" height="16">
                          <use href="/goit-test-task/icons.svg#rateing"></use>
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
                <p class="reviews-list-item-text">
                  The Mavericks panel truck is a great choice for those who
                  value simplicity and functionality. It has everything you need
                  for a comfortable journey.
                </p>
              </li>
              <li class="reviews-list-item">
                <div class="reviews-user-info">
                  <span class="reviews-user-fl">J</span>
                  <div class="reviews-user-rate-holder">
                    <span class="reviews-user-name">John Doe</span>
                    <ul class="reviews-rate-list">
                      <li class="reviews-rate-list-item">
                        <svg width="16" height="16">
                          <use href="/goit-test-task/icons.svg#rateing"></use>
                        </svg>
                      </li>
                      <li class="reviews-rate-list-item">
                        <svg width="16" height="16">
                          <use href="/goit-test-task/icons.svg#rateing"></use>
                        </svg>
                      </li>
                      <li class="reviews-rate-list-item">
                        <svg width="16" height="16">
                          <use href="/goit-test-task/icons.svg#rateing"></use>
                        </svg>
                      </li>
                      <li class="reviews-rate-list-item">
                        <svg width="16" height="16">
                          <use href="/goit-test-task/icons.svg#rateing"></use>
                        </svg>
                      </li>
                    </ul>
                  </div>
                </div>
                <p class="reviews-list-item-text">
                  The Mavericks panel truck is a great choice for those who
                  value simplicity and functionality. It has everything you need
                  for a comfortable journey.
                </p>
              </li>
            </ul>
            <a
              href="#catalog"
              class="button outline-button reviews-catalog-btn"
            >
              View catalog
            </a>
          </div>
        </section>
        <section className="support-section">
          <div className="container">
            <div className="modal-book-form-container">
              <h2 className="modal-title">Need help with booking a camper?</h2>
              <p className="modal-sub-title">
                Our team is here to help you with any questions you may have
              </p>
              <form className="modal-book-form">
                <fieldset>
                  <input
                    className="form-input"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    required
                  />
                  <input
                    className="form-input"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    className="form-input"
                    type="phone"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    required
                  />
                  <textarea
                    className="form-input"
                    id="comment"
                    name="comment"
                    placeholder="Comment"
                    rows="4"
                  ></textarea>
                </fieldset>
                <button
                  type="submit"
                  className="order-form-submit button main-button"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="support-info">
              <h2 className="section-title">24/7 Customer Support</h2>
              <p className="section-text support-section-text">
                Our team is here to help you with any questions you may have
              </p>
              <ul className="support-contacts">
                <li className="support-contacts-item">
                  <svg width="24" height="24">
                    <use href="/goit-test-task/icons.svg#phone"></use>
                  </svg>
                  <a href="tel:+380123456789">+38 012 345 67 89</a>
                </li>
                <li className="support-contacts-item">
                  <svg width="24" height="24">
                    <use href="/goit-test-task/icons.svg#email"></use>
                  </svg>
                  <a href="mailto:van@mail.to">
                    <span>
                      van<span>@</span>mail<span>.</span>to
                    </span>
                  </a>
                </li>
                <li className="support-contacts-item">
                  <svg width="24" height="24">
                    <use href="/goit-test-task/icons.svg#chat"></use>
                  </svg>
                  <a href="#" className="button main-button live-chat-button">
                    Live chat
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="catalog" className="catalog-section">
          <div className="container">
            <div className="sidebar">
              <form className="filter">
                <fieldset className="filter-fieldset location-fieldset">
                  <label className="filter-label" for="location">
                    Location
                  </label>
                  <div className="filter-input-wraper">
                    <svg class="filter-input-icon" width="18" height="20">
                      <use
                        href={process.env.PUBLIC_URL + '/icons.svg#map-pin'}
                      ></use>
                    </svg>
                    <input
                      className="form-input filter-input"
                      type="text"
                      id="location"
                      name="location"
                      placeholder="Kyiv, Ukraine"
                    />
                  </div>
                </fieldset>
                <fieldset className="filter-fieldset">
                  <legend className="filter-legend">Filters</legend>
                  <fieldset className="filter-fieldset">
                    <legend className="filter-fieldset-legend">
                      Vehicle equipment
                    </legend>
                    <hr />
                    <ul className="filter-list">
                      <li className="filter-list-item">
                        <label className="filter-checkbox-big">
                          <input type="checkbox" name="equipment" value="AC" />
                          <svg
                            class="filter-checkbox-icon"
                            width="32"
                            height="32"
                          >
                            <use
                              href={process.env.PUBLIC_URL + '/icons.svg#wind'}
                            ></use>
                          </svg>
                          <span className="filter-checkbox-title">AC</span>
                        </label>
                      </li>
                      <li className="filter-list-item">
                        <label className="filter-checkbox-big">
                          <input
                            type="checkbox"
                            name="equipment"
                            value="Automatic"
                          />
                          <svg
                            class="filter-checkbox-icon"
                            width="32"
                            height="32"
                          >
                            <use
                              href={
                                process.env.PUBLIC_URL + '/icons.svg#multiroute'
                              }
                            ></use>
                          </svg>
                          <span className="filter-checkbox-title">
                            Automatic
                          </span>
                        </label>
                      </li>
                      <li className="filter-list-item">
                        <label className="filter-checkbox-big">
                          <input
                            type="checkbox"
                            name="equipment"
                            value="Kitchen"
                          />
                          <svg
                            class="filter-checkbox-icon"
                            width="32"
                            height="32"
                          >
                            <use
                              href={
                                process.env.PUBLIC_URL + '/icons.svg#fork-knife'
                              }
                            ></use>
                          </svg>
                          <span className="filter-checkbox-title">Kitchen</span>
                        </label>
                      </li>
                      <li className="filter-list-item">
                        <label className="filter-checkbox-big">
                          <input type="checkbox" name="equipment" value="TV" />
                          <svg
                            class="filter-checkbox-icon"
                            width="32"
                            height="32"
                          >
                            <use
                              href={process.env.PUBLIC_URL + '/icons.svg#tv'}
                            ></use>
                          </svg>
                          <span className="filter-checkbox-title">TV</span>
                        </label>
                      </li>
                      <li className="filter-list-item">
                        <label className="filter-checkbox-big">
                          <input
                            type="checkbox"
                            name="equipment"
                            value="Shower/WC"
                          />
                          <svg
                            class="filter-checkbox-icon"
                            width="32"
                            height="32"
                          >
                            <use
                              href={
                                process.env.PUBLIC_URL + '/icons.svg#shower'
                              }
                            ></use>
                          </svg>
                          <span className="filter-checkbox-title">
                            Shower/WC
                          </span>
                        </label>
                      </li>
                    </ul>
                  </fieldset>
                  <fieldset className="filter-fieldset">
                    <legend className="filter-fieldset-legend small-legend">
                      Vehicle type
                    </legend>
                    <hr />
                    <ul className="filter-list">
                      <li className="filter-list-item">
                        <label className="filter-checkbox-big">
                          <input type="radio" name="type" value="Van" />
                          <svg
                            class="filter-checkbox-icon"
                            width="32"
                            height="32"
                          >
                            <use
                              href={process.env.PUBLIC_URL + '/icons.svg#van-2'}
                            ></use>
                          </svg>
                          <span className="filter-checkbox-title">Van</span>
                        </label>
                      </li>
                      <li className="filter-list-item">
                        <label className="filter-checkbox-big">
                          <input
                            type="radio"
                            name="type"
                            value="Fully Integrated"
                          />
                          <svg
                            class="filter-checkbox-icon"
                            width="32"
                            height="32"
                          >
                            <use
                              href={process.env.PUBLIC_URL + '/icons.svg#van-1'}
                            ></use>
                          </svg>
                          <span className="filter-checkbox-title">
                            Fully Integrated
                          </span>
                        </label>
                      </li>
                      <li className="filter-list-item">
                        <label className="filter-checkbox-big">
                          <input type="radio" name="type" value="Alcove" />
                          <svg
                            class="filter-checkbox-icon"
                            width="32"
                            height="32"
                          >
                            <use
                              href={process.env.PUBLIC_URL + '/icons.svg#van'}
                            ></use>
                          </svg>
                          <span className="filter-checkbox-title">Alcove</span>
                        </label>
                      </li>
                    </ul>
                  </fieldset>
                  <button
                    className="button main-button form-search-button"
                    type="submit"
                  >
                    Search
                  </button>
                </fieldset>
              </form>
            </div>
            <div className="catalog">
              <ul className="campers-list">
                <li className="camper">
                  <img
                    className="camper-image"
                    src="https://ftp.goit.study/img/campers-test-task/1-1.webp"
                    alt="Mavericks camper"
                  />
                  <div className="camper-details">
                    <div className="camper-header">
                      <div className="camper-header-top">
                        <h2 className="camper-title">Mavericks</h2>
                        <div className="camper-head-actions">
                          <span className="camper-price">€8000.00</span>
                          <svg
                            width="24"
                            height="24"
                            className="camper-add-favorites"
                          >
                            <use
                              href={process.env.PUBLIC_URL + '/icons.svg#heart'}
                            ></use>
                          </svg>
                        </div>
                      </div>
                      <div className="camper-sub-header">
                        <span className="camper-sub-header-badge">
                          <svg width="16" height="16">
                            <use
                              href={
                                process.env.PUBLIC_URL + '/icons.svg#rateing'
                              }
                            ></use>
                          </svg>
                          <span className="text-underline">
                            4.2(10 Reviews)
                          </span>
                        </span>
                        <span className="camper-sub-header-badge">
                          <svg width="16" height="16">
                            <use
                              href={
                                process.env.PUBLIC_URL + '/icons.svg#map-pin'
                              }
                            ></use>
                          </svg>
                          Kyiv, Ukraine
                        </span>
                      </div>
                    </div>
                    <div className="camper-description">
                      <p>
                        Embrace simplicity and freedom with the Mavericks panel
                        truck, an...
                      </p>
                    </div>
                    <ul className="camper-feature-list">
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={process.env.PUBLIC_URL + '/icons.svg#users'}
                          ></use>
                        </svg>
                        2 adults
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={
                              process.env.PUBLIC_URL + '/icons.svg#multiroute'
                            }
                          ></use>
                        </svg>
                        Automatic
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={process.env.PUBLIC_URL + '/icons.svg#gass'}
                          ></use>
                        </svg>
                        Petrol
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={
                              process.env.PUBLIC_URL + '/icons.svg#fork-knife'
                            }
                          ></use>
                        </svg>
                        Kitchen
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={process.env.PUBLIC_URL + '/icons.svg#bed'}
                          ></use>
                        </svg>
                        1 bed
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={process.env.PUBLIC_URL + '/icons.svg#wind'}
                          ></use>
                        </svg>
                        AC
                      </li>
                    </ul>
                    <a href="#" className="button main-button camper-show-more">
                      Show more
                    </a>
                  </div>
                </li>

                <li className="camper">
                  <img
                    className="camper-image"
                    src="https://ftp.goit.study/img/campers-test-task/1-1.webp"
                    alt="Mavericks camper"
                  />
                  <div className="camper-details">
                    <div className="camper-header">
                      <div className="camper-header-top">
                        <h2 className="camper-title">Mavericks</h2>
                        <div className="camper-head-actions">
                          <span className="camper-price">€8000.00</span>
                          <svg
                            width="24"
                            height="24"
                            className="camper-add-favorites"
                          >
                            <use
                              href={process.env.PUBLIC_URL + '/icons.svg#heart'}
                            ></use>
                          </svg>
                        </div>
                      </div>
                      <div className="camper-sub-header">
                        <span className="camper-sub-header-badge">
                          <svg width="16" height="16">
                            <use
                              href={
                                process.env.PUBLIC_URL + '/icons.svg#rateing'
                              }
                            ></use>
                          </svg>
                          <span className="text-underline">
                            4.2(10 Reviews)
                          </span>
                        </span>
                        <span className="camper-sub-header-badge">
                          <svg width="16" height="16">
                            <use
                              href={
                                process.env.PUBLIC_URL + '/icons.svg#map-pin'
                              }
                            ></use>
                          </svg>
                          Kyiv, Ukraine
                        </span>
                      </div>
                    </div>
                    <div className="camper-description">
                      <p>
                        Embrace simplicity and freedom with the Mavericks panel
                        truck, an...
                      </p>
                    </div>
                    <ul className="camper-feature-list">
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={process.env.PUBLIC_URL + '/icons.svg#users'}
                          ></use>
                        </svg>
                        2 adults
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={
                              process.env.PUBLIC_URL + '/icons.svg#multiroute'
                            }
                          ></use>
                        </svg>
                        Automatic
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={process.env.PUBLIC_URL + '/icons.svg#gass'}
                          ></use>
                        </svg>
                        Petrol
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={
                              process.env.PUBLIC_URL + '/icons.svg#fork-knife'
                            }
                          ></use>
                        </svg>
                        Kitchen
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={process.env.PUBLIC_URL + '/icons.svg#bed'}
                          ></use>
                        </svg>
                        1 bed
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={process.env.PUBLIC_URL + '/icons.svg#wind'}
                          ></use>
                        </svg>
                        AC
                      </li>
                    </ul>
                    <a href="#" className="button main-button camper-show-more">
                      Show more
                    </a>
                  </div>
                </li>
                <li className="camper">
                  <img
                    className="camper-image"
                    src="https://ftp.goit.study/img/campers-test-task/1-1.webp"
                    alt="Mavericks camper"
                  />
                  <div className="camper-details">
                    <div className="camper-header">
                      <div className="camper-header-top">
                        <h2 className="camper-title">Mavericks</h2>
                        <div className="camper-head-actions">
                          <span className="camper-price">€8000.00</span>
                          <svg
                            width="24"
                            height="24"
                            className="camper-add-favorites"
                          >
                            <use
                              href={process.env.PUBLIC_URL + '/icons.svg#heart'}
                            ></use>
                          </svg>
                        </div>
                      </div>
                      <div className="camper-sub-header">
                        <span className="camper-sub-header-badge">
                          <svg width="16" height="16">
                            <use
                              href={
                                process.env.PUBLIC_URL + '/icons.svg#rateing'
                              }
                            ></use>
                          </svg>
                          <span className="text-underline">
                            4.2(10 Reviews)
                          </span>
                        </span>
                        <span className="camper-sub-header-badge">
                          <svg width="16" height="16">
                            <use
                              href={
                                process.env.PUBLIC_URL + '/icons.svg#map-pin'
                              }
                            ></use>
                          </svg>
                          Kyiv, Ukraine
                        </span>
                      </div>
                    </div>
                    <div className="camper-description">
                      <p>
                        Embrace simplicity and freedom with the Mavericks panel
                        truck, an...
                      </p>
                    </div>
                    <ul className="camper-feature-list">
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={process.env.PUBLIC_URL + '/icons.svg#users'}
                          ></use>
                        </svg>
                        2 adults
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={
                              process.env.PUBLIC_URL + '/icons.svg#multiroute'
                            }
                          ></use>
                        </svg>
                        Automatic
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={process.env.PUBLIC_URL + '/icons.svg#gass'}
                          ></use>
                        </svg>
                        Petrol
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={
                              process.env.PUBLIC_URL + '/icons.svg#fork-knife'
                            }
                          ></use>
                        </svg>
                        Kitchen
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={process.env.PUBLIC_URL + '/icons.svg#bed'}
                          ></use>
                        </svg>
                        1 bed
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={process.env.PUBLIC_URL + '/icons.svg#wind'}
                          ></use>
                        </svg>
                        AC
                      </li>
                    </ul>
                    <a href="#" className="button main-button camper-show-more">
                      Show more
                    </a>
                  </div>
                </li>
                <li className="camper">
                  <img
                    className="camper-image"
                    src="https://ftp.goit.study/img/campers-test-task/1-1.webp"
                    alt="Mavericks camper"
                  />
                  <div className="camper-details">
                    <div className="camper-header">
                      <div className="camper-header-top">
                        <h2 className="camper-title">Mavericks</h2>
                        <div className="camper-head-actions">
                          <span className="camper-price">€8000.00</span>
                          <svg
                            width="24"
                            height="24"
                            className="camper-add-favorites"
                          >
                            <use
                              href={process.env.PUBLIC_URL + '/icons.svg#heart'}
                            ></use>
                          </svg>
                        </div>
                      </div>
                      <div className="camper-sub-header">
                        <span className="camper-sub-header-badge">
                          <svg width="16" height="16">
                            <use
                              href={
                                process.env.PUBLIC_URL + '/icons.svg#rateing'
                              }
                            ></use>
                          </svg>
                          <span className="text-underline">
                            4.2(10 Reviews)
                          </span>
                        </span>
                        <span className="camper-sub-header-badge">
                          <svg width="16" height="16">
                            <use
                              href={
                                process.env.PUBLIC_URL + '/icons.svg#map-pin'
                              }
                            ></use>
                          </svg>
                          Kyiv, Ukraine
                        </span>
                      </div>
                    </div>
                    <div className="camper-description">
                      <p>
                        Embrace simplicity and freedom with the Mavericks panel
                        truck, an...
                      </p>
                    </div>
                    <ul className="camper-feature-list">
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={process.env.PUBLIC_URL + '/icons.svg#users'}
                          ></use>
                        </svg>
                        2 adults
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={
                              process.env.PUBLIC_URL + '/icons.svg#multiroute'
                            }
                          ></use>
                        </svg>
                        Automatic
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={process.env.PUBLIC_URL + '/icons.svg#gass'}
                          ></use>
                        </svg>
                        Petrol
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={
                              process.env.PUBLIC_URL + '/icons.svg#fork-knife'
                            }
                          ></use>
                        </svg>
                        Kitchen
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={process.env.PUBLIC_URL + '/icons.svg#bed'}
                          ></use>
                        </svg>
                        1 bed
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={process.env.PUBLIC_URL + '/icons.svg#wind'}
                          ></use>
                        </svg>
                        AC
                      </li>
                    </ul>
                    <a href="#" className="button main-button camper-show-more">
                      Show more
                    </a>
                  </div>
                </li>
                <li className="camper">
                  <img
                    className="camper-image"
                    src="https://ftp.goit.study/img/campers-test-task/1-1.webp"
                    alt="Mavericks camper"
                  />
                  <div className="camper-details">
                    <div className="camper-header">
                      <div className="camper-header-top">
                        <h2 className="camper-title">Mavericks</h2>
                        <div className="camper-head-actions">
                          <span className="camper-price">€8000.00</span>
                          <svg
                            width="24"
                            height="24"
                            className="camper-add-favorites"
                          >
                            <use
                              href={process.env.PUBLIC_URL + '/icons.svg#heart'}
                            ></use>
                          </svg>
                        </div>
                      </div>
                      <div className="camper-sub-header">
                        <span className="camper-sub-header-badge">
                          <svg width="16" height="16">
                            <use
                              href={
                                process.env.PUBLIC_URL + '/icons.svg#rateing'
                              }
                            ></use>
                          </svg>
                          <span className="text-underline">
                            4.2(10 Reviews)
                          </span>
                        </span>
                        <span className="camper-sub-header-badge">
                          <svg width="16" height="16">
                            <use
                              href={
                                process.env.PUBLIC_URL + '/icons.svg#map-pin'
                              }
                            ></use>
                          </svg>
                          Kyiv, Ukraine
                        </span>
                      </div>
                    </div>
                    <div className="camper-description">
                      <p>
                        Embrace simplicity and freedom with the Mavericks panel
                        truck, an...
                      </p>
                    </div>
                    <ul className="camper-feature-list">
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={process.env.PUBLIC_URL + '/icons.svg#users'}
                          ></use>
                        </svg>
                        2 adults
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={
                              process.env.PUBLIC_URL + '/icons.svg#multiroute'
                            }
                          ></use>
                        </svg>
                        Automatic
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={process.env.PUBLIC_URL + '/icons.svg#gass'}
                          ></use>
                        </svg>
                        Petrol
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={
                              process.env.PUBLIC_URL + '/icons.svg#fork-knife'
                            }
                          ></use>
                        </svg>
                        Kitchen
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={process.env.PUBLIC_URL + '/icons.svg#bed'}
                          ></use>
                        </svg>
                        1 bed
                      </li>
                      <li className="camper-feture-item">
                        <svg width="20" height="20">
                          <use
                            href={process.env.PUBLIC_URL + '/icons.svg#wind'}
                          ></use>
                        </svg>
                        AC
                      </li>
                    </ul>
                    <a href="#" className="button main-button camper-show-more">
                      Show more
                    </a>
                  </div>
                </li>
              </ul>
              <button id="load-more" className="button outline-button">
                Load more
              </button>
            </div>
          </div>
        </section>
        <div className="modal-holder" style={{ display: 'none' }}>
          <div className="modal">
            <div className="modal-camper-header camper-header">
              <div className="modal-camper-header-top camper-header-top">
                <h2 className="modal-camper-title camper-title">Mavericks</h2>
                <div className="modal-camper-head-actions camper-head-actions">
                  <svg width="32" height="32" className="modal-close">
                    <use
                      href={process.env.PUBLIC_URL + '/icons.svg#close'}
                    ></use>
                  </svg>
                </div>
              </div>
              <div className="modal-camper-sub-header camper-sub-header">
                <span className="modal-camper-sub-header-badge camper-sub-header-badge">
                  <svg width="16" height="16">
                    <use
                      href={process.env.PUBLIC_URL + '/icons.svg#rateing'}
                    ></use>
                  </svg>
                  <span className="text-underline">4.2(10 Reviews)</span>
                </span>
                <span className="modal-camper-sub-header-badge camper-sub-header-badge">
                  <svg width="16" height="16">
                    <use
                      href={process.env.PUBLIC_URL + '/icons.svg#map-pin'}
                    ></use>
                  </svg>
                  Kyiv, Ukraine
                </span>
              </div>
              <span className="camper-price">€8000.00</span>
            </div>
            <div className="modal-camper-gallery">
              <ul className="modal-camper-gallery-list">
                <li className="modal-camper-gallery-item">
                  <img
                    src="https://ftp.goit.study/img/campers-test-task/1-1.webp"
                    alt="Mavericks camper"
                  />
                </li>
                <li className="modal-camper-gallery-item">
                  <img
                    src="https://ftp.goit.study/img/campers-test-task/1-2.webp"
                    alt="Mavericks camper"
                  />
                </li>
                <li className="modal-camper-gallery-item">
                  <img
                    src="https://ftp.goit.study/img/campers-test-task/1-3.webp"
                    alt="Mavericks camper"
                  />
                </li>
              </ul>
            </div>
            <div className="modal-camper-description">
              <p>
                Embrace simplicity and freedom with the Mavericks panel truck,
                an ideal choice for solo travelers or couples seeking a compact
                and efficient way to explore the open roads. This no-frills yet
                reliable panel truck offers the essentials for a comfortable
                journey, making it the perfect companion for those who value
                simplicity and functionality.
              </p>
            </div>
            <ul className="modal-tabs-list">
              <li className="modal-tab-nav active">Features</li>
              <li className="modal-tab-nav">Reviews</li>
            </ul>
            <div className="modal-details">
              <div className="modal-tabs">
                <div
                  id="features"
                  style={{ display: 'none' }}
                  className="modal-tab-content"
                >
                  <ul class="modal-camper-feature-list camper-feature-list">
                    <li class="camper-feture-item">
                      <svg width="20" height="20">
                        <use href="/goit-test-task/icons.svg#users"></use>
                      </svg>
                      2 adults
                    </li>
                    <li class="camper-feture-item">
                      <svg width="20" height="20">
                        <use href="/goit-test-task/icons.svg#multiroute"></use>
                      </svg>
                      Automatic
                    </li>
                    <li class="camper-feture-item">
                      <svg width="20" height="20">
                        <use href="/goit-test-task/icons.svg#gass"></use>
                      </svg>
                      Petrol
                    </li>
                    <li class="camper-feture-item">
                      <svg width="20" height="20">
                        <use href="/goit-test-task/icons.svg#fork-knife"></use>
                      </svg>
                      Kitchen
                    </li>
                    <li class="camper-feture-item">
                      <svg width="20" height="20">
                        <use href="/goit-test-task/icons.svg#bed"></use>
                      </svg>
                      1 bed
                    </li>
                    <li class="camper-feture-item">
                      <svg width="20" height="20">
                        <use href="/goit-test-task/icons.svg#wind"></use>
                      </svg>
                      AC
                    </li>

                    <li class="camper-feture-item">
                      <svg width="20" height="20">
                        <use href="/goit-test-task/icons.svg#gass"></use>
                      </svg>
                      Petrol
                    </li>
                    <li class="camper-feture-item">
                      <svg width="20" height="20">
                        <use href="/goit-test-task/icons.svg#fork-knife"></use>
                      </svg>
                      Kitchen
                    </li>
                    <li class="camper-feture-item">
                      <svg width="20" height="20">
                        <use href="/goit-test-task/icons.svg#bed"></use>
                      </svg>
                      1 bed
                    </li>
                    <li class="camper-feture-item">
                      <svg width="20" height="20">
                        <use href="/goit-test-task/icons.svg#wind"></use>
                      </svg>
                      AC
                    </li>
                  </ul>
                  <div className="camper-vehicle-details">
                    <h3 className="camper-vehicle-details-title">
                      Vehicle details
                    </h3>
                    <ul className="camper-vehicle-details-list">
                      <li className="camper-vehicle-details-item">
                        <span className="camper-vehicle-details-item-title">
                          Form
                        </span>
                        <span className="camper-vehicle-details-item-value">
                          Panel truck
                        </span>
                      </li>
                      <li className="camper-vehicle-details-item">
                        <span className="camper-vehicle-details-item-title">
                          Length
                        </span>
                        <span className="camper-vehicle-details-item-value">
                          5.4 m
                        </span>
                      </li>
                      <li className="camper-vehicle-details-item">
                        <span className="camper-vehicle-details-item-title">
                          Width
                        </span>
                        <span className="camper-vehicle-details-item-value">
                          2.01 m
                        </span>
                      </li>
                      <li className="camper-vehicle-details-item">
                        <span className="camper-vehicle-details-item-title">
                          Height
                        </span>
                        <span className="camper-vehicle-details-item-value">
                          2.05 m
                        </span>
                      </li>
                      <li className="camper-vehicle-details-item">
                        <span className="camper-vehicle-details-item-title">
                          Tank
                        </span>
                        <span className="camper-vehicle-details-item-value">
                          132 I
                        </span>
                      </li>
                      <li className="camper-vehicle-details-item">
                        <span className="camper-vehicle-details-item-title">
                          Consumption
                        </span>
                        <span className="camper-vehicle-details-item-value">
                          12.4l/100km
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="reviews" className="modal-tab-content">
                  <ul className="reviews-list">
                    <li className="reviews-list-item">
                      <div className="reviews-user-info">
                        <span className="reviews-user-fl">J</span>
                        <div className="reviews-user-rate-holder">
                          <span className="reviews-user-name">John Doe</span>
                          <ul className="reviews-rate-list">
                            <li className="reviews-rate-list-item">
                              <svg width="16" height="16">
                                <use
                                  href={
                                    process.env.PUBLIC_URL +
                                    '/icons.svg#rateing'
                                  }
                                ></use>
                              </svg>
                            </li>
                            <li className="reviews-rate-list-item">
                              <svg width="16" height="16">
                                <use
                                  href={
                                    process.env.PUBLIC_URL +
                                    '/icons.svg#rateing'
                                  }
                                ></use>
                              </svg>
                            </li>
                            <li className="reviews-rate-list-item">
                              <svg width="16" height="16">
                                <use
                                  href={
                                    process.env.PUBLIC_URL +
                                    '/icons.svg#rateing'
                                  }
                                ></use>
                              </svg>
                            </li>
                            <li className="reviews-rate-list-item">
                              <svg width="16" height="16">
                                <use
                                  href={
                                    process.env.PUBLIC_URL +
                                    '/icons.svg#rateing'
                                  }
                                ></use>
                              </svg>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p className="reviews-list-item-text">
                        The Mavericks panel truck is a great choice for those
                        who value simplicity and functionality. It has
                        everything you need for a comfortable journey.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="modal-book-form-container">
                <h2 className="modal-title">Book your campervan now</h2>
                <p className="modal-sub-title">
                  Stay connected! We are always ready to help you.
                </p>
                <form className="modal-book-form">
                  <fieldset>
                    <input
                      className="form-input"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      required
                    />
                    <input
                      className="form-input"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                    <input
                      className="form-input"
                      type="date"
                      id="booking_date"
                      name="booking_date"
                      placeholder="Booking date"
                      required
                    />
                    <textarea
                      className="form-input"
                      id="comment"
                      name="comment"
                      placeholder="Comment"
                      rows="4"
                    ></textarea>
                  </fieldset>
                  <button
                    type="submit"
                    className="order-form-submit button main-button"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">All rights reserved © 2024</footer>
    </>
  );
}

export default App;
