import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Swiper from "react-id-swiper";
import ScrollableAnchor from "react-scrollable-anchor";
import SquadModal from "../components/layout/SquadModal";
import SquadCard from "./layout/SquadCard";

import SquadCardExemple from "./layout/SquadCardExemple";
import squad_iphone_mockup_1 from "../images/squad-iphone-mockup-1.png";
import "swiper/css/swiper.css";
import "../css/home.css";

const live_tutors = [
  {
    id: 1,
    name: "Catherine",
    live_name: "Yoga",
    price: "40",
    statut: "Disponible",
    bio: "Professeur de yoga diplômée Hatha Yoga, tout âge et tout niveau",
    imageUrl:
      "https://www.superprof.fr/images/annonces/professeur-home-professeur-yoga-diplomee-hatha-yoga-cours-individuel-equipe-skype-zoom-actuellement-age-niveau.jpg",
  },
  {
    id: 2,
    name: "Gaston",
    live_name: "Yoga",
    price: "60",
    statut: "Disponible",
    bio:
      "Cours de Yoga, renforcement musculaire et detente. Prof certifié Yoga Buenos Aires. En français ou espagnol.",
    imageUrl:
      "https://www.superprof.fr/images/annonces/professeur-home-cours-yoga-particulier-groupe-renforcement-musculaire-detente-prof-certifie-yoga-buenos-aires-francais-espagnol.jpg",
  },
  {
    id: 3,
    name: "Laura",
    live_name: "Cuisine Italienne",
    price: "30",
    statut: "Disponible",
    bio:
      "Découvrez avec moi la VRAIE CUISINE ITALIENNE. Les meilleures recettes de famille, les plats simples mais d'effet à base de produits frais, et toutes les astuces pour épater votre famille et vos amis.",
    imageUrl:
      "https://www.superprof.fr/images/annonces/professeur-home-decouvrez-vraie-cuisine-italienne-meilleures-recettes-famille-plats-simples-effet-base-produits.jpg",
  },
  {
    id: 4,
    name: "Sayar Yang",
    live_name: "Tai Chi",
    price: "80",
    statut: "Disponible",
    bio:
      "(ancien moine bouddhiste) kung fu,tai chi, self-défense, boxing, méditation, chi gong, massage,que je vous enseigne les techniques originelles transmises par mes Maîtres",
    imageUrl:
      "https://www.superprof.fr/images/annonces/professeur-home-ancien-moine-bouddhiste-kung-tai-chi-self-defense-boxing-meditation-chi-gong-massage-enseigne-techniques.jpg",
  },
  {
    id: 5,
    name: "Masha",
    live_name: "Peinture",
    price: "30",
    statut: "disponible",
    bio:
      "Diplômée des Beaux Arts de Moscou donne cours particuliers peinture et dessin",
    imageUrl:
      "https://www.superprof.fr/images/annonces/professeur-home-diplomee-beaux-arts-moscou-donne-cours-particuliers-peinture-dessin.jpg",
  },
  {
    id: 6,
    name: "Louis",
    live_name: "Musculation",
    price: "60",
    statut: "Disponible",
    bio:
      "Coach Fitness sur Paris donnant des cours de Renforcement Musculaire / Cardio / Pilates / Yoga / Stretching pour tous types de niveaux.",
    imageUrl:
      "https://www.superprof.fr/images/annonces/professeur-home-coach-fitness-paris-donnant-cours-salle-sport-privee-domicile.jpg",
  },
  {
    id: 7,
    name: "Nicolas",
    live_name: "Fitness",
    price: "50",
    statut: "Disponible",
    bio: "Coaching individualisé fitness/remise en forme pour tous niveaux.",
    imageUrl:
      "https://www.superprof.fr/images/annonces/professeur-home-coaching-individualise-fitness-remise-forme-niveaux-paris-banlieue-proche.jpg",
  },
  {
    id: 8,
    name: "Sergey",
    live_name: "Peinture",
    price: "40",
    statut: "Disponible",
    bio:
      "Intervenant et Jury aux Gobelins, Réalisateur, Character designer : Cours de dessin, Storyboard, animation 2D, 3D MAYA, TVPAINT, Photoshop, Sculpture, préparation aux écoles d'Art et d'Animation",
    imageUrl:
      "https://www.superprof.fr/images/annonces/professeur-home-intervenant-jury-gobelins-realisateur-character-designer-cours-dessin-storyboard-animation-maya-tvpaint.jpg",
  },
  {
    id: 9,
    name: "Eden",
    live_name: "Boxe",
    price: "50",
    statut: "Disponible",
    bio:
      "Coach Sportif Personnel - SEANCE DE COACHING SPORTIF Cours particulier à domicile ou en extérieur - Paris / Banlieue EDEN COACH à votre disposition",
    imageUrl:
      "https://www.superprof.fr/images/annonces/professeur-home-coach-sportif-personnel-seance-coaching-sportif-cours-particulier-domicile-exterieur-paris-banlieue-eden-coach.jpg",
  },
];

const params = {
  slidesPerView: "auto",
  freeMode: true,
};

const Home = () => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isBooking, setIsBooking] = useState({
    isBooking: false,
    payer: { name: "", email: "" },
  });
  const events = ["sport", "yoga", "cuisine", "méditation", "danse"];
  const [mentors, setMentors] = useState([]);
  const [mentor, setMentor] = useState({
    name: "",
    imageUrl: "",
    price: "",
    live_name: "",
    bio: "",
  });

  let [i, setI] = useState(0);

  useEffect(() => {
    const wordsAnimation = setInterval(() => {
      handleWordsAnimation();
    }, 500);

    return () => clearInterval(wordsAnimation);
    fetchMentor();
  });

  const handleWordsAnimation = () => {
    i < events.length ? setI(i++) : setI(0);
  };

  // Close / Show modal
  const handleClose = () => {
    setShow(false);
    setIsBooking({ isBooking: false });
  };
  const handleShow = () => setShow(true);

  const fetchMentor = () => {
    setIsLoading(true);
    fetch("/api/mentors", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((res) => {
        setMentors(res);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const getSquadLive = (mentorData) => {
    setMentor(mentorData);
    handleShow();
  };

  const onSuccess = () => {
    handleClose();
    fetch("/user/live_booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: localStorage.getItem("userData"),
    })
      .then((response) => response.json())
      .then((res) => {
        handleShow();
        setIsBooking({
          isBooking: res.isBooking,
          payer: { name: res.payer.name, email: res.payer.email },
        });
        // localStorage.removeItem("userData");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <SquadModal
        className="squad-modal"
        handleClose={handleClose}
        show={show}
        isBooking={isBooking.isBooking}
        payer={isBooking.payer}
        mentor={mentor}
        onSuccess={onSuccess}
      />
      <Row as="section" className="h-100 m-0 flex-wrap">
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center flex-column squad-section-1 squad-background-color mt-md-4"
        >
          <h2 id="title" className="text-dark text-center w-100 mt-5">
            Des lives de <br />{" "}
            <span className="inline-block w-auto text-white">{events[i]}</span>
            <br /> avec vos proches
          </h2>
          <Button
            as="a"
            href="#section1"
            className="bg-dark-gray text-white mt-4"
            type="button"
            size="lg"
          >
            Commencez maintenant
          </Button>
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center squad-section-2 bg-primary mt-md-4"
        >
          <Image
            className="squad-iphone-mockup-1 animated slow swing delay-1s"
            src={squad_iphone_mockup_1}
            alt="squad-iphone-mockup-1"
          />
        </Col>
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center squad-section-3 bg-white"
        >
          <SquadCardExemple />
        </Col>
        <Col
          xs={12}
          md={6}
          className="h-100 d-flex justify-content-center align-items-center squad-section-4 flex-column squad-yellow"
        >
          <h2 className="text-dark text-center w-75 title2 mb-5">
            Participez à des expériences{" "}
            <span className="uniques">uniques</span> en famille ou entre amis,
            n'importe où, n'importe quand.
          </h2>
          <Button
            as="a"
            href="#section1"
            className="bg-dark-gray text-white"
            type="button"
            size="lg"
          >
            Commencez maintenant
          </Button>
        </Col>
        <ScrollableAnchor id={"section1"}>
          <Col className="d-flex justify-content-center align-items-center slider-container squad-section-5 w-auto flex-column">
            <Row className="w-100 mt-5">
              <Col md={12}>
                <h2 className="text-white text-left title2 m-0">
                  Lives à venir
                </h2>
              </Col>
            </Row>
            <Swiper {...params}>
              {live_tutors.map((mentor) => (
                <SquadCard
                  key={mentor._id}
                  name={mentor.name}
                  live_name={mentor.live_name}
                  bio={mentor.bio}
                  price={mentor.price}
                  statut="Disponible"
                  imageUrl={mentor.imageUrl}
                  onClick={() => getSquadLive(mentor)}
                />
              ))}
            </Swiper>
          </Col>
        </ScrollableAnchor>
      </Row>
    </>
  );
};

export default Home;
