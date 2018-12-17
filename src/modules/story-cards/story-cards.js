import React from 'react';
import './storyCards.scss';
import Picture from '../../assets/img/shai.jpg';

const storyCard = () => {
    return (
        <div className="story">
                    <figure className="story__shape">
                        <img src={Picture} alt="Person a tour" className="story__img"></img>
                        <figcaption className="story__caption">REÇ</figcaption>
                    </figure>
                    <div className="story__text">
                        <h3 className="heading-tertiary u-margin-bottom-small">Something like bla bla bla</h3>
                        <p>
                        Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir. Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir.
                        </p>
                    </div>
                </div>
    );
}

export default storyCard;