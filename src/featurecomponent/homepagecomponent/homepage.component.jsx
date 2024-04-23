import React from 'react';


import './homepage.component.css';
import { CarosalComponent } from '../carosal/carosal.comonent.jsx';
import { Servicecomponent } from '../servicecomponents/service.component.jsx';
import { Cardcomponent } from '../cardcomponents/card.component.jsx';
import { Footercomponent } from '../footercomponent/footer.component.jsx';
import SliderComponent from '../Smallslidercomponent/slider.component.jsx';
import { HowItWorks } from '../Htwcomponent/htw.component.jsx';
import { Headercomponent } from '../Headercomponent/header.component.jsx';
const Homepage = () => {
    return (
        <div>
            <Headercomponent></Headercomponent>
            {/* <CarosalComponent></CarosalComponent> */}
            <Servicecomponent></Servicecomponent>
            <SliderComponent></SliderComponent>
            <Cardcomponent></Cardcomponent>
            <HowItWorks></HowItWorks>
            <Footercomponent></Footercomponent>
        </div>

    );
};

export default Homepage;