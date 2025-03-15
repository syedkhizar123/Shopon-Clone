import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import MyCustomCard from './components/cards';
import myCard from './components/cards';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductsCards } from './components/cards';
import { Show } from './components/cards';
import { PopularVid } from './components/cards';





let sliderSrc = ["https://shopon.pk/images/promo/213/arch_x_shopon.jpg", "https://shopon.pk/images/promo/222/Solar_componenets.png", "https://shopon.pk/images/promo/249/xbox_Gift_cards__1_.png", "https://shopon.pk/images/promo/214/special_offer_di3y-ni.gif", "https://shopon.pk/images/promo/249/xbox_Gift_cards__2_.png", "https://shopon.pk/images/promo/214/special_offer.png", "https://shopon.pk/images/promo/248/xbox_gift_card_main.png"]
export function ShowFinal() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (

    <div>
      <Slider {...settings}>
        {sliderSrc.map((item, index) => {
          return (
            <div>
              <img key={index} src={item} height={"400px"} width={"100%"} alt="Slide" />
            </div>
          )
        })}
      </Slider>

    </div>
  )

}


export function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img height={"50px"} src="https://shopon.pk/images/logos/9/Shopon_Logo_F-03__1__3n3z-fn.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><b >GIFT CARDS</b></Nav.Link>
            <Nav.Link href="#link"><b>HOMES</b></Nav.Link>
            <Nav.Link href="#home"><b>MOBILES & TABLETS</b></Nav.Link>
            <Nav.Link href="#link"><b>FASHION</b></Nav.Link>
            <Nav.Link href="#home"><b>ELECTRONICS</b></Nav.Link>
            <Nav.Link href="#link"><b>BRANDS</b></Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}


let samsungMobiles = [
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/209/download__5__86k9-tm.jpg",
    name: "Samsung Galaxy S23",
    price: "$799.99"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/171/samsung-galaxy-z-fold-5-pakistan-priceoye-h8tjk-500x500.jpg",
    name: "Samsung Galaxy Z Flip 5",
    price: "$999.99"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/157/image_2023-08-24_170903471.jpg",
    name: "Samsung Galaxy A54",
    price: "$399.99"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/171/samsung-galaxy-s23-ultra-pakistan-priceoye-ndm7s-500x500.jpg",
    name: "Samsung Galaxy Note 20",
    price: "$1,299.99"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/157/image_2023-08-24_185826893.png",
    name: "Samsung Galaxy M54",
    price: "$349.99"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/251/xiaomi-redmi-note-13-pro-pakistan-priceoye-8zikv-500x500.jpg",
    name: "Samsung Galaxy S22 Ultra",
    price: "$1,199.99"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/136/Samsung-Galaxy-A13-Awesom-Blue-7.png",
    name: "Samsung Galaxy A14 5G",
    price: "$249.99"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/171/samsung-galaxy-z-fold-5-pakistan-priceoye-h8tjk-500x500.jpg",
    name: "Samsung Galaxy Z Fold 5",
    price: "$1,799.99"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/158/download_ps6f-e6.jpg",
    name: "Samsung Galaxy A34 5G",
    price: "$329.99"
  },
  {
    img: "https://i5.walmartimages.com/seo/Restored-Samsung-Galaxy-S21-5G-128GB-G991U-Fully-Unlocked-Smartphone-Refurbished_dcf28e36-4c71-49d1-931b-4649b866db89.22d7e2d5e09fe373b2541876b509ebfb.jpeg",
    name: "Samsung Galaxy S21 FE",
    price: "$699.99"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/158/download_qqa8-83.jpg",
    name: "Samsung Galaxy M34 5G",
    price: "$279.99"
  },
  {
    img: "data:image/jpeg;base64,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",
    name: "Samsung Galaxy A04s",
    price: "$179.99"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/158/download_vl64-1t.jpg",
    name: "Samsung Galaxy A73 5G",
    price: "$499.99"
  }
];

let gameCards = ["https://shopon.pk/images/promo/182/IPHONE-SALESS.jpg", "https://shopon.pk/images/promo/182/gaming-cards.jpg"]

let mobiles = [
  {
    imageSrc: "https://shopon.pk/images/thumbnails/270/270/detailed/212/oppo-reno-12f-5g-pakistan-priceoye-i5ee8.jpg",
    title: "Wireless Headphones",
    price: "$99.99"
  },
  {
    imageSrc: "https://shopon.pk/images/thumbnails/270/270/detailed/40/funda_carbon_ultra_oppo_reno_2_01_negro_l.jpg",
    title: "Smartwatch",
    price: "$199.99"
  },
  {
    imageSrc: "https://shopon.pk/images/thumbnails/270/270/detailed/117/Apple-iPhone-14-Plus-6.jpg",
    title: "Bluetooth Speaker",
    price: "$49.99"
  },
  {
    imageSrc: "https://shopon.pk/images/thumbnails/270/270/detailed/117/Apple-iPhone-14-Plus.jpg",
    title: "Laptop Backpack",
    price: "$39.99"
  },
  {
    imageSrc: "https://shopon.pk/images/thumbnails/270/270/detailed/117/iPhone-14-Mini.jpg",
    title: "4K TV",
    price: "$499.99"
  },
  {
    imageSrc: "https://shopon.pk/images/thumbnails/270/270/detailed/118/iPhone-14-Pro-Max-Silver.jpg",
    title: "Portable Charger",
    price: "$29.99"
  }

];

let electronicItems = [
  {
    img: "https://shopon.pk/images/thumbnails/300/270/detailed/139/15492060143e6a5a507dc420622ffc6e9b00a69c9d.jpg",
    name: "Sony  Wireless Headphones",
    price: "$349.99"
  },
  {
    img: "https://shopon.pk/images/thumbnails/300/270/detailed/113/43X755.jpg",
    name: "Apple iPhone 14 Pro Max",
    price: "$1,099.99"
  },
  {
    img: "https://shopon.pk/images/thumbnails/300/270/detailed/113/sss.jpg",
    name: "Samsung Galaxy Tab S8",
    price: "$649.99"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/176/copy-1--1540-14392-170223102308-17888-0-280823093555621.jpg",
    name: "Dell XPS 13 Laptop",
    price: "$1,299.99"
  },
  {
    img: "https://shopon.pk/images/thumbnails/300/270/detailed/123/ezgif.com-gif-maker-8.jpg",
    name: "Samsung 55-Inch 4K TV",
    price: "$799.99"
  },
  {
    img: "https://shopon.pk/images/thumbnails/300/270/detailed/253/Screenshot_20250302-091959.png",
    name: "Bose Bluetooth Speaker",
    price: "$329.99"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/144/download_4xnf-js.jpg",
    name: "Sony PlayStation 5",
    price: "$499.99"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/104/image_1024x1024_c19ea5f0-3b55-4165-97c1-0a2880386fad_360x.jpg",
    name: "Microsoft Xbox Series X",
    price: "$499.99"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/146/gallery2.jpg",
    name: "Apple MacBook Air",
    price: "$1,099.99"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/144/download_tkg8-ck.jpg",
    name: "GoPro HERO Action Camera",
    price: "$499.99"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/59/a-16d-universal__16549_zoom.jpg",
    name: "Nest Learning Thermostat",
    price: "$249.99"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/113/mega_t_30.png",
    name: "Samsung Galaxy Buds Pro",
    price: "$199.99"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/144/10.jpg",
    name: "Fitbit Fitness Tracker",
    price: "$149.99"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/20/westpoint_insect_killer_wf-7108_15000_2_6.jpg",
    name: "Amazon Echo Dot",
    price: "$49.99"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/144/download_qdz4-yj.jpg",
    name: "Anker PowerCore Charger",
    price: "$25.99"
  }
];

let decor = [
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/84/791d1b218a7031a53b50e71e5d5a0739.jpg",
    name: "Tijarat online Real Feel Artificial",
    price: "2899"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/84/ca08bcf7394bd53d4b079902f5062b73.jpg",
    name: "Artifical Plants Set of 4 mini plant",
    price: "1499"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/83/c5f9a761931a392cb5bb51948825400e.jpg",
    name: "Artificial Flowers For Home Decor ",
    price: "1899"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/86/e896078edc1035491da7b1b93302cf8b.jpg",
    name: "Courtyard Wooden Wall Clock",
    price: "2249"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/86/fd26b7957f67b1638286ae62fa990288.jpg",
    name: "Wall Clock Wooden Effect",
    price: "1999"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/86/28e5978720e5f09d6cb603e48d02a101.jpg",
    name: "Clocks for Rooms Clock Wall Stylish",
    price: "2499"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/104/Revolving-8-Pcs-Spice-Rack-Tower-Kitchen-Masala-Jar-rs-1500-_1_360x.jpg",
    name: "Kitchen Masala Jar",
    price: "2599"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/104/1-_176_360x.jpg",
    name: "A Kitchen Hanging Basket",
    price: "2999"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/104/dde953cc-29cd-47ce-84df-bf02d9aa6766_1_360x.jpg",
    name: "Glass Spice Jar",
    price: "1199"
  }
]

let popularVidgames = ["https://shopon.pk/images/thumbnails/270/270/detailed/2/con1.jpg", "https://shopon.pk/images/thumbnails/270/270/detailed/12/t49.jpg", "https://shopon.pk/images/thumbnails/270/270/detailed/94/WhatsApp_Image_2021-10-16_at_3.04.06_PM.jpeg", "https://shopon.pk/images/thumbnails/270/270/detailed/94/WhatsApp_Image_2021-10-16_at_2.34.27_PM__1__68gq-rz.jpeg", "https://shopon.pk/images/thumbnails/270/270/detailed/94/WhatsApp_Image_2021-10-16_at_3.04.04_PM.jpeg", "https://shopon.pk/images/thumbnails/270/270/detailed/8/1__36_-1000x1000.jpg"]

let newCards = ["https://shopon.pk/images/images/MEN.jpg?1708514603633", "https://shopon.pk/images/images/women.jpg?1708514692327", "https://shopon.pk/images/images/kids.jpg?1708514791762", "https://shopon.pk/images/images/dd.jpg?1708514896368"]

let laptops = [
  {
    img: "https://shopon.pk/images/thumbnails/300/270/detailed/176/5590-3.jpg",
    name: "Dell Alienware m15 R6",
    price: "Contact Us for Price"
  },
  {
    img: "https://shopon.pk/images/thumbnails/300/270/detailed/176/sdjs_1.jpg",
    name: "Dell Inspiron 15",
    price: "Contact Us for Price"
  },
  {
    img: "https://shopon.pk/images/thumbnails/300/270/detailed/176/4zu3_HP_Probook_645_G4.jpg",
    name: "HP Envy 13",
    price: "Contact Us for Price"
  },
  {
    img: "https://shopon.pk/images/thumbnails/300/270/detailed/176/840-G5-4.jpg",
    name: "HP Spectre x360 14",
    price: "Contact Us for Price"
  },
  {
    img: "https://shopon.pk/images/thumbnails/300/270/detailed/176/840-G5-4.jpg",
    name: "HP Pavilion 15",
    price: "Contact Us for Price"
  },
  {
    img: "https://shopon.pk/images/thumbnails/300/270/detailed/176/P8agK8Aifu_r2rb-ok.jpg",
    name: "HP Elite Dragonfly",
    price: "Contact Us for Price"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/159/screenshot_2023-01-28_at_6.42.25_pm.png",
    name: "Dell XPS 13",
    price: "Contact Us for Price"
  }
]

let imagesSrc = ["https://shopon.pk/images/images/gift-card.png?1700821419075", "https://shopon.pk/images/images/grocery.png?1700821641905", "https://shopon.pk/images/images/fashion.png?1700821697408", "https://shopon.pk/images/images/beauty.png?1700821781831", "https://shopon.pk/images/images/home-decor-item.png?1700821738843", "https://shopon.pk/images/images/mobile-%26-tablets.png?1700821816773", "https://shopon.pk/images/images/electonics.png?1700822336297", "https://shopon.pk/images/images/new-on-shopon.png?1700822388029", "https://shopon.pk/images/images/brands-west-points.png?1700822468020"]

let deals = [
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/112/download__12__8rnm-9r.jpg",
    name: "Dell Alienware m15 R6",
    price: "Contact Us for Price"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/112/download__12__kfrd-ej.jpg",
    name: "Dell Inspiron 15",
    price: "Contact Us for Price"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/112/download__12_.jpg",
    name: "HP Envy 13",
    price: "Contact Us for Price"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/112/71oa5BlpV0L_pbc8-n4.jpg",
    name: "Play Station Plus Extra 12 Month Membership TURKEY",
    price: "Contact Us for Price"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/112/71oa5BlpV0L_98c1-km.jpg",
    name: "Play Station Plus Extra 3 Month Membership TURKEY",
    price: "Contact Us for Price"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/112/71oa5BlpV0L_r3bb-hu.jpg",
    name: "Play Station Plus Extra 1 Month Membership TURKEY",
    price: "Contact Us for Price"
  },
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/112/71oa5BlpV0L.jpg",
    name: "Play Station Plus Deluxe 12 Month Membership TURKEY",
    price: "Contact Us for Price"
  } ,
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/112/psn-playstation-plus-90-days-turkey-subscription-smartcdkeys-cheap-cd-key-cover-390x580.jpg",
    name: "Dell XPS 13",
    price: "Contact Us for Price"
  } ,
  {
    img: "https://shopon.pk/images/thumbnails/270/270/detailed/112/download__9_.jpg",
    name: "Dell XPS 13",
    price: "Contact Us for Price"
  } 
]

function App() {
  return (
    <>

      <Container style={{ display: "flex", justifyContent: "space-between", flex: "wrap", marginTop: "40px", marginBottom: "20px" }}>
        {imagesSrc.map((item, index) => {
          return (
            <MyCustomCard key={index} productSrc={item} height={"70px"} width={"70px"} />
          )
        })}
      </Container>

    </>
  );
}
export default App;
const newSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
}

let sources = ["https://shopon.pk/images/images/Playstation-card-from-shopon.jpg?1696679699501", "https://shopon.pk/images/images/Google-Play-gift-card.jpg?1696679747133", "https://shopon.pk/images/images/itune-gift-card.jpg?1696679797447", "https://shopon.pk/images/images/Amazon-gift-card.jpg?1696679866632"]
export function ShowCards() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Gifts Cards</h1>
      <Container>
        <Row>
          {sources.map((item, index) => {
            console.log(item)
            return (
              <>
                <Col xs={6} sm={6} md={6} lg={3} xl={3} xxl={3} style={{ marginTop: "40px", marginBottom: "40px" }}>
                  <MyCustomCard key={index} productSrc={item} height={"180px"} width={"200px"} />
                </Col>
              </>
            )
          })}
        </Row>
      </Container>

      <Container style={{ marginTop: "50px" }}>
        <Row>
          {gameCards.map((item, index) => {
            return (
              <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} style={{ marginTop: "20px" }}>
                <MyCustomCard key={index} productSrc={item} height={"200px"} width={"475px"} />
              </Col>
            )
          })}
        </Row>
      </Container>

      <Container style={{ marginTop: "60px", padding: "20px 10px", backgroundColor: "#e7e5e5" }}>
        <Slider {...newSettings}>
          {mobiles.map((item, index) => {
            return (
              <>
                <ProductsCards key={index} imgSrc={item.imageSrc} title={item.title} price={item.price} />
              </>
            )
          })}
        </Slider>
      </Container>

      <Container style={{ marginTop: "30px", padding: "20px 10px", backgroundColor: "#e7e5e5" }}>
        <Slider {...newSettings}>
          {samsungMobiles.map((item, index) => {
            return (
              <>
                <ProductsCards key={index} imgSrc={item.img} title={item.name} price={item.price} />
              </>
            )
          })}
        </Slider>
      </Container>

      <Container style={{ marginTop: "40px" }}>
        <Row>
          <Col>
            <MyCustomCard productSrc="https://shopon.pk/images/promo/183/electronics-collection.jpg" height={"150px"} width={"88%"} />
          </Col>
        </Row>
      </Container>
      <h3 style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}>ELECTRONICS</h3>
      <Container style={{ marginTop: "50px", marginBottom: "50px", backgroundColor: "#e7e5e5", paddingTop: "10px", paddingBottom: "10px" }}>

        <Row >
          {electronicItems.map((item, index) => {
            return (
              <>
                <Col xs={12} sm={6} md={4} lg={3} xl={3} xxl={3} >
                  <ProductsCards key={index} imgSrc={item.img} title={item.name} price={item.price} />
                </Col>
              </>
            )

          })}
        </Row>

      </Container>
      <Container >
        <Row>
          <Col>
            <MyCustomCard productSrc="https://shopon.pk/images/images/summer-new-arrials.jpg?1708514544809" height={"400px"} width={"100%"} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {newCards.map((item, index) => {
            console.log(item)
            return (
              <>
                <Col xs={6} sm={6} md={6} lg={3} xl={3} xxl={3} style={{ marginTop: "40px", marginBottom: "40px" }}>
                  <MyCustomCard key={index} productSrc={item} height={"180px"} width={"180px"} />
                </Col>
              </>
            )
          })}
        </Row>
      </Container>

      <h3 style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}>POPULAR VIDEO GAMES</h3>
      <Container style={{ marginTop: "50px", marginBottom: "50px", backgroundColor: "#e7e5e5", paddingTop: "10px", paddingBottom: "10px" }}>
        <Row >
          {popularVidgames.map((item, index) => {
            return (
              <>
                <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={2} >
                  <PopularVid key={index} imgSrc={item} />
                </Col>
              </>
            )
          })}
        </Row>
      </Container>
      <Container >
        <Row>
          <Col>
            <MyCustomCard productSrc="https://shopon.pk/images/promo/183/laptop-new-sals.jpg" height={"150px"} width={"88%"} />
          </Col>
        </Row>
      </Container>

      <h3 style={{ textAlign: "center", marginBottom: "50px", marginTop: "50px" }}>COMPUTER AND LAPTOPS</h3>
      <Container style={{ marginTop: "30px", padding: "20px 10px", backgroundColor: "#e7e5e5" }}>
        <Slider {...newSettings}>
          {laptops.map((item, index) => {
            return (
              <>
                <ProductsCards key={index} imgSrc={item.img} title={item.name} price={item.price} />
              </>
            )
          })}
        </Slider>
      </Container>

      <h3 style={{ textAlign: "center", marginBottom: "50px", marginTop: "50px" }}>DEALS OF THE WEEK</h3>
      <Container style={{ marginTop: "30px", marginBottom: "50px" , padding: "20px 10px", backgroundColor: "#e7e5e5" }}>
      <Slider {...newSettings}>
          {deals.map((item, index) => {
            return (
              <>
                <ProductsCards key={index} imgSrc={item.img} title={item.name} price={item.price} />
              </>
            )
          })}
        </Slider>
      </Container>

      <Container >
        <Row>
          <Col>
            <MyCustomCard productSrc="https://shopon.pk/images/promo/183/decore-roome.jpg" height={"150px"} width={"88%"} />
          </Col>
        </Row>
      </Container>

      <h3 style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}>HOME & DECOR</h3>
      <Container style={{ marginTop: "50px", marginBottom: "50px", backgroundColor: "#e7e5e5", paddingTop: "10px", paddingBottom: "10px" }}>

        <Row >
          {decor.map((item, index) => {
            return (
              <>
                <Col xs={12} sm={6} md={4} lg={3} xl={3} xxl={3} >
                  <ProductsCards key={index} imgSrc={item.img} title={item.name} price={item.price} />
                </Col>
              </>
            )

          })}
        </Row>

      </Container>
    </>
  )
}
