import classes from "./HomePage.module.css";
import DetailsPage from "./DetailsPage";
import Category from "./Categories";
import Card from "./Card";
import speakerImg from "../../Images/speakers.jpeg";
import headphonesImg from "../../Images/headphones.jpeg";
import soundImg from "../../Images/soundbars.jpeg";
import televisionImg from "../../Images/television.jpeg";
import abstractBg from "../../Images/abstract.jpeg";
import historyBg from "../../Images/history.jpg";
import replayedBg from "../../Images/recreated.jpg";
import Collections from "./Collections";
import atelierImg from "../../Images/darkwine.jpg";
import ferrariImg from "../../Images/ferrari.jpg";
import rhythmBlueImg from "../../Images/rhythm.jpg";
import beolabImg from "../../Images/beolab.jpg";
import List from "./List";
import minimalJpg from "../../Images/minimalistic.jpg";

const Homepage = () => {
  return (
    <div>
      <div className={classes.home}>
        <div className={classes.homer}>
          <DetailsPage
            firstG={"Recreated."}
            secondG={"Replayed."}
            thirdG={"Reborn."}
            buttonText={"Discover more"}
            bgImg={replayedBg}
          />
          <DetailsPage
            firstG={"History of an icon"}
            buttonText={"Explore more"}
            bgImg={historyBg}
            textDetails={
              "The Beosystem 9000c is our latest Recreated Classic. Upgraded. Updated.Yet upholding all of its original elegance and power."
            }
          />
        </div>

        <div className={classes.categories}>
          <Category placeholder="Speakers" bgImg={speakerImg} />
          <Category placeholder="Headphones" bgImg={headphonesImg} />
          <Category placeholder="Televisions" bgImg={televisionImg} />
          <Category placeholder="Sound Bars" bgImg={soundImg} />
        </div>
        <div className={classes["story-div"]}>
          <p>BANG & OLUFSEN</p>
          <h1>Iconic quality since 1925</h1>
          <button>Our story</button>
        </div>
        <div
          className={classes.abstract}
          style={{ backgroundImage: `url(${abstractBg})` }}
        ></div>
      </div>
      <section>
        <div className={classes.collection}>
          <div className={classes["collection-div"]}>
            <h4>The Ferrari collection</h4>
            <p>
              Fill the room with roaring bass and sound that fires on all
              cylinders. Beosound 2 Ferrari Edition takes the craft of Danish
              audio and the flair of Italian motorsport – and drives it home.
            </p>
            <button>Discover the collection</button>
          </div>
        </div>
        <div className={classes.cardDiv}>
          <Card
            heading="Experience in store"
            firstP="UP CLOSE AND PERSONAL"
            secondP="Come by one of our stores to hear, see and feel Bang & Olufsen yourself."
            btnText="Find store"
            image={televisionImg}
          />
        </div>
        <section className={classes["products-col"]}>
        <h2>World of B&O</h2>
          <div className={classes.grid}>
            
            <Collections
              image={atelierImg}
              paragraph="HEAR IN FULL COLOUR"
              heading="Welcome to Atelier"
              para2="CDs disrupted the music industry, while Bang & Olufsen’s Beosound 9000 disrupted the concept of the CD player with its revolutionary design, first debuted in 1996 at the height of CDs’ popularity.'"
            />
            <Collections
              image={ferrariImg}
              paragraph="BANG & OLUFSEN FOR FERRARI"
              heading="The Ferrari Collection"
              para2="CDs disrupted the music industry, while Bang & Olufsen’s Beosound 9000 disrupted the concept of the CD player with its revolutionary design, first debuted in 1996 at the height of CDs’ popularity."
            />
            <Collections
              image={rhythmBlueImg}
              paragraph="BANG & OLUFSEN X ADER ERROR"
              heading="'Rhythm of Blue'"
              para2= "CDs disrupted the music industry, while Bang & Olufsen’s Beosound 9000 disrupted the concept of the CD player with its revolutionary design, first debuted in 1996 at the height of CDs’ popularity."
            />
            <Collections
              image={beolabImg}
              paragraph="BEHIND THE SCENES"
              heading="Beolab 8"
              para2= "CDs disrupted the music industry, while Bang & Olufsen’s Beosound 9000 disrupted the concept of the CD player with its revolutionary design, first debuted in 1996 at the height of CDs’ popularity."
            />
          </div>
        </section>
      </section>
      <main className={classes.main}>
        <img src={minimalJpg} alt="" />
        <div className={classes["main-div"]}>
          <h6>THE HOUSE OF BANG & OLUFSEN</h6>
          <h3>
            Join our global community for exclusive benefits and news about
          </h3>
          <div className={classes["list-div"]}>
            <List paragraph="New & limited products" />
            <List paragraph="Exclusive events" />
            <List paragraph="Personalised content" />
            <List paragraph="Special offers" />
            <List paragraph="Behind the scenes" />
          </div>
          <form className={classes["input-container"]}>
            <div>
              <label htmlFor="">
                Email <span>(required)</span>
              </label>
              <input type="text" />
            </div>

            <button>Subscribe</button>
          </form>
        </div>
      </main>
      <footer className={classes.footer}>
        <p>Bang & Olufsen 2024</p>
      </footer>
    </div>
  );
};

export default Homepage;
