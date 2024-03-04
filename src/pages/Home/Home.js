import './Home.scss';
import { Hero } from '../../components/HeroSection/Hero';
import { Frame } from '../../components/Frame/Frame';
import { LogoSlider } from '../../components/LogoSlider/LogoSlider';
// import { StickyButton } from '../../components/StickyButton/StickButton';
import { Quote } from '../../components/Quote/Quote';

export function Home() {
  return (
    <div className='home'>
      <Hero />
      <section id='buy-sell-source'>
        <div className='content'>
          <div className='layered-image'>
            <img src='/imgs/tri-image.png' alt='Layered Images' />
          </div>
          <div className='business-info-text'>
            <div className='title'>
              BUY <br /><span>SELL</span> <br />SOURCE
            </div>
            <p>
              Welcome to Vouched By Many (VBM) - your ultimate urban reselling
              platform where authenticity meets modernity.
              At VBM we're not just a marketplace;
              we're community where every item has a story
              and every transaction is a step towards a sustainable future.
            </p>
            <p>
              Born in the heart of the city we understand the Pulse of urban fashion
              and tech. Our mission is to provide a trustworthy and seamless reselling
              experience vouch by a community of passionate individuals.
            </p>
          </div>
        </div>
      </section>
      <section id='testimonials'>
        <div className='testimonials-content'>
          <div className='testimonials-title'>
            OUR IMPACT IN NUMBERS
          </div>
          <div className='frames'>
            <Frame text='1000+ Happy Bosses' source='/imgs/person.svg' />
            <Frame text='100% Authenticity' source='/imgs/verified.svg' />
            <Frame text='5000+ Items Sold' source='/imgs/shopping.svg' />
          </div>
        </div>
      </section>
      <section id='what-people-say' className='what-people-say'>
        {/* <div className='logo-slider'>
          <LogoSlider />
        </div> */}
        <div className='quote-container'>
          <Quote>
            VBM has revolutionized the way I shop for gear. Every purchase feels personal and authentic - Alex J
          </Quote>
          <Quote>
            VBM was a breeze my items were sold quickly and the process was very efficient 😁 - Samantha K
          </Quote>
          <Quote>
            I was hesitant buying resole items online, <br /> but VBM's authenticity guarantee gave me the confidence to dive in. Best decision ever ! - Mike D
          </Quote>
          <Quote>
            Simply the best grafter and best seller in the game - Colin S
          </Quote>
        </div>
      </section>
      <section>
      </section>
    </div >
  )
}