import React, { Component } from 'react';
import QuotesSlider from './quoteSlider';

class QuotesSliderSection extends Component {
  render() {

    var quotes = [
        {
            id: 0,
            name: "Brian May",
            band: "Queen",
            quote: "Queen songs are not about the life of a rock star - they tend to be about the lives of normal people, which is why I think the songs connect so much. We're very lucky that they seemingly connect with every generation."
        },

        {
            id: 1,
            name: "Kurt Cobain",
            band: "Nirvana",
            quote: "I didn't know how to deal with success. If there was a Rock Star 101, I would have liked to take it. It might have helped me."
        },

        {
            id: 2,
            name: "Jon Bon Jovi",
            band: "Bon Jovi",
            quote: "For years, I've had a hankering for the portrait of Benjamin Franklin by Joseph Duplessis. Franklin is credited with so many inventions: the postal system, lightning rods, the constitution. He was a rock star before there was such a thing."
        },

        {
            id: 3,
            name: "Flea",
            band: "Red Hot Chili Peppers",
            quote: "Being a rock star isn't all it's cracked up to be, let me tell you."
        },

        {
            id: 4,
            name: "James Hetfield",
            band: "Metallica",
            quote: "Metallica fans sided with Napster because they’re lazy bastards and they want everything for free, I like playing music because it’s a good living and I get satisfaction from it but I can’t feed my family with satisfaction."
        },

        {
            id: 5,
            name: "Axl Rose",
            band: "Guns'N'Roses",
            quote: "I’m not God but if I were God, ¾ of you would be girls, and the rest would be pizza and beer."
        },

        {
            id: 6,
            name: "Ian Gillan",
            band: "Deep Purple",
            quote: "Heavy metal drives me bonkers, it makes me want to vomit, heavy metal really is a pile of puke."
        },

        {
            id: 7,
            name: "Steven Tyler",
            band: "Aerosmith",
            quote: "We believed that anything that was worth doing was worth overdoing."
        },

        {
            id: 8,
            name: "Jimmy Page",
            band: "Led Zeppelin",
            quote: "I'm pretty optimistic about the future of rock... It will be back to composition as in classical music or jazz."
        }
    ];
	

    return (
		<section className="quotesSliderSection">
            <QuotesSlider slide={quotes}/>
        </section>
    );
  }
}

export default QuotesSliderSection;
