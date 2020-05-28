import React, {useState ,useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Swiper from 'react-id-swiper';
import ScrollableAnchor from 'react-scrollable-anchor';
import SquadModal from '../components/layout/SquadModal';
import SquadCard from './layout/SquadCard';

import SquadCardExemple from './layout/SquadCardExemple';
import squad_iphone_mockup_1 from "../images/squad-iphone-mockup-1.png";
import 'swiper/css/swiper.css';
import '../css/home.css';

const live_tutors = [
    {id: 1, name: "Catherine", title: "Yoga", price: "2", statut: "Disponible", bio: "Professeur de yoga diplômée Hatha Yoga, tout âge et tout niveau", img: "https://www.superprof.fr/images/annonces/professeur-home-professeur-yoga-diplomee-hatha-yoga-cours-individuel-equipe-skype-zoom-actuellement-age-niveau.jpg"},
    {id: 2, name: "Gaston", title: "Yoga", price: "2", statut: "Disponible", bio: "Cours de Yoga, renforcement musculaire et detente. Prof certifié Yoga Buenos Aires. En français ou espagnol.", img: "https://www.superprof.fr/images/annonces/professeur-home-cours-yoga-particulier-groupe-renforcement-musculaire-detente-prof-certifie-yoga-buenos-aires-francais-espagnol.jpg"},
    {id: 3, name: "Laura", title: "Cuisine Italienne", price: "2", statut: "Disponible", bio: "Découvrez avec moi la VRAIE CUISINE ITALIENNE. Les meilleures recettes de famille, les plats simples mais d'effet à base de produits frais, et toutes les astuces pour épater votre famille et vos amis.", img: "https://www.superprof.fr/images/annonces/professeur-home-decouvrez-vraie-cuisine-italienne-meilleures-recettes-famille-plats-simples-effet-base-produits.jpg"},
    {id: 4, name: "Sayar Yang", title: "Tai Chi", price: "2", statut: "Disponible", bio: "(ancien moine bouddhiste) kung fu,tai chi, self-défense, boxing, méditation, chi gong, massage,que je vous enseigne les techniques originelles transmises par mes Maîtres", img: "https://www.superprof.fr/images/annonces/professeur-home-ancien-moine-bouddhiste-kung-tai-chi-self-defense-boxing-meditation-chi-gong-massage-enseigne-techniques.jpg"},
    {id: 5, name: "Masha", title: "Peinture", price: "2", statut: "disponible", bio: "Diplômée des Beaux Arts de Moscou donne cours particuliers peinture et dessin", img: "https://www.superprof.fr/images/annonces/professeur-home-diplomee-beaux-arts-moscou-donne-cours-particuliers-peinture-dessin.jpg"},
    {id: 6, name: "Louis", title: "Musculation", price: "2", statut: "Disponible", bio: "Coach Fitness sur Paris donnant des cours de Renforcement Musculaire / Cardio / Pilates / Yoga / Stretching pour tous types de niveaux.", img: "https://www.superprof.fr/images/annonces/professeur-home-coach-fitness-paris-donnant-cours-salle-sport-privee-domicile.jpg"},
    {id: 7, name: "Nicolas", title: "Fitness", price: "2", statut: "Disponible", bio: "Coaching individualisé fitness/remise en forme pour tous niveaux.", img: "https://www.superprof.fr/images/annonces/professeur-home-coaching-individualise-fitness-remise-forme-niveaux-paris-banlieue-proche.jpg"},
    {id: 8, name: "Sergey", title: "Peinture", price: "2", statut: "Disponible", bio: "Intervenant et Jury aux Gobelins, Réalisateur, Character designer : Cours de dessin, Storyboard, animation 2D, 3D MAYA, TVPAINT, Photoshop, Sculpture, préparation aux écoles d'Art et d'Animation", img: "https://www.superprof.fr/images/annonces/professeur-home-intervenant-jury-gobelins-realisateur-character-designer-cours-dessin-storyboard-animation-maya-tvpaint.jpg"},
    {id: 9, name: "Eden", title: "Boxe", price: "2", statut: "Disponible", bio: "Coach Sportif Personnel - SEANCE DE COACHING SPORTIF Cours particulier à domicile ou en extérieur - Paris / Banlieue EDEN COACH à votre disposition", img: "https://www.superprof.fr/images/annonces/professeur-home-coach-sportif-personnel-seance-coaching-sportif-cours-particulier-domicile-exterieur-paris-banlieue-eden-coach.jpg"}
]

const params = {
    slidesPerView: "auto",
    freeMode: true
}

const Home = () => {
    const [show, setShow] = useState(false);
    const [isBooking, setIsBooking] = useState({isBooking: false, payer: {name: "", email: ""}});
    const events = ["Yoga", "Cuisine", "Méditation", "Sport"];
    
    const [mentor, setMentor] = useState({name: "", img: "", price: "", title: "", bio: ""});
    
    let [i, setI] = useState(0);

    useEffect(() => {
        const wordsAnimation = setInterval(() => {handleWordsAnimation()}, 800);
        return () => clearInterval(wordsAnimation);
    })
    
    const handleWordsAnimation = () => {i < events.length ? setI(i++) : setI(0)};

    // Close / Show modal
    const handleClose = () => {setShow(false); setIsBooking({isBooking: false})}
    const handleShow = () => setShow(true);

    
    const getSquadLive = mentorData => {
        setMentor(mentorData);
        handleShow();
    }

    const onSuccess = () => {
        handleClose();
        fetch("/user/live_booking", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: localStorage.getItem('userData')
            })
            .then(response => response.json())
            .then(res => {
                handleShow();
                setIsBooking({isBooking: res.isBooking, payer: {name: res.payer.name, email: res.payer.email}});
                localStorage.removeItem('userData');
                console.log(res)
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <SquadModal className="squad-modal" handleClose={handleClose} show={show} isBooking={isBooking.isBooking} payer={isBooking.payer} mentor={mentor} onSuccess={onSuccess} />
            <Row as="section" className="h-100 m-0 flex-wrap">
                <Col xs={12} md={6} className="d-flex justify-content-center align-items-center flex-column squad-section-1 squad-background-color">
                    <h2 id="title" className="text-dark text-center w-100 mb-5">Des lives de <br/> <span className="inline-block w-auto text-white">{events[i]}</span><br /> avec vos proches</h2>
                    <Button as="a" href="#section1" className="bg-dark-gray text-white" type="button" size="lg">Commencez maintenant</Button>
                </Col>
                <Col xs={12} md={6} className="h-100 d-flex justify-content-center align-items-center squad-section-2 bg-primary">
                    <Image className="squad-iphone-mockup-1 animated slow swing delay-1s mb-4 mt-4 m-md-0" src={squad_iphone_mockup_1} alt="squad-iphone-mockup-1"/>
                </Col>
                <Col xs={12} md={6} className="h-100 d-flex justify-content-center align-items-center squad-section-3 bg-white">
                    <SquadCardExemple />
                </Col>
                <Col xs={12} md={6} className="h-100 d-flex justify-content-center align-items-center squad-section-4 flex-column squad-yellow">
                    <h2 className="text-dark text-center w-75 title2 mb-5">Participez à des expériences <span className="uniques">uniques</span> en famille ou entre amis, n'importe où, n'importe quand.</h2>
                    <Button as="a" href="#section1" className="bg-dark-gray text-white" type="button" size="lg">Commencez maintenant</Button>
                </Col>
                <ScrollableAnchor id={"section1"}>
                    <Col className="h-75 d-flex justify-content-center align-items-center squad-section-5 flex-column slider-container w-auto">
                        <Row className="m-0 w-100">
                            <Swiper {...params}>
                                {live_tutors.map((tutor) => <SquadCard key={tutor.id} title={tutor.title} bio={tutor.bio} price={tutor.price} statut={tutor.statut} img={tutor.img} onClick={() => getSquadLive(tutor)} />)}
                            </Swiper>
                        </Row>
                    </Col>
                </ScrollableAnchor>
            </Row>
        </>
    )
}

export default Home;