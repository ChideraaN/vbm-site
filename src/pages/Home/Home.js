import './Home.scss';
import { NavBar } from '../../components/NavBar/NavBar';
import { Frame } from '../../components/Frame/Frame';
import { LogoSlider } from '../../components/LogoSlider/LogoSlider';
import { StickyButton } from '../../components/StickyButton/StickButton';
import { Quote } from '../../components/Quote/Quote';

export function Home() {
  return (
    <div className='home'>
      <div className='hero' id='hero'>
        <video autoPlay loop playsInline muted className="hero-video">
          <source src='/hero-video.mp4' type="video/mp4" />
        </video>
        <NavBar />

        <img src='/imgs/vbm-logo-large.png' alt='chevron' className='logo' />

        <a href='#buy-sell-source'>
          <img src='/imgs/chevron.svg' alt='chevron' className='chevron' />
        </a>
      </div>

      <section id='buy-sell-source' className='business-info'>
        <div className='section-container'>

          <div className='container'>
            <div>
              <img src='/imgs/tri-image.png' alt='stacked images' className='rotate' />
            </div>

            <div className='business-info-text'>
              <h1 className='title'>
                BUY <br /><span>SELL</span> <br />SOURCE
              </h1>
              <p>
                Welcome to Vouched By Many (VBM) - your ultimate urban reselling <br />
                platform where authenticity meets modernity.
                At VBM we're not just a <br /> marketplace;
                we're community where every item has a story <br />
                and every transaction is a step towards a sustainable future.
              </p>
              <p>
                Born in the heart of the city we understand the Pulse of urban fashion <br />
                and tech. Our mission is to provide a trustworthy and seamless reselling <br />
                experience vouch by a community of passionate individuals.
              </p>
            </div>
          </div>
          {/* <a href='#buy-sell-source'>
          <img src='/imgs/chevron.svg' alt='chevron' className='chevron' />
        </a> */}
        </div>
      </section>
      <section id='impact-in-numbers'>
        <div className='impact-container'>
          <div className='title'>OUR IMPACT IN NUMBERS</div>
          <div className='impact-stats'>
            <Frame source='/imgs/person.svg' text='1000+ Happy Bosses' />
            <Frame source='/imgs/verified.svg' text='100% Authenticity' />
            <Frame source='/imgs/shopping.svg' text='5000+ Items Sold' />
          </div>
          <LogoSlider />
        </div>
      </section>
      <section id='testimonials' className='testimonials'>
        <div>
          <div className='shifted-row'>
            <Quote>
              VBM has revolutionized the way I shop <br /> for gear. Every purchase feels <br /> personal and authentic - Alex J
            </Quote>
            <Quote>
              VBM was a breeze my items were sold quickly and the process was very efficient 😁 - Samantha K
            </Quote>
          </div>
          <div className='shifted-row'>
            <Quote>
              I was hesitant buying resole items online, but VBM's authenticity guarantee gave me the confidence to dive in. Best decision ever ! - Mike D
            </Quote>
            <Quote>
              Simply the best grafter and best seller in the game - Colin S
            </Quote>
          </div>
        </div>
      </section>
      <section id='photo-gallery'>

      </section>
      <StickyButton target='buy-sell-source' />
    </div>
  )
}