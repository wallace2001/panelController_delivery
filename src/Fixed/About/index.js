import React from 'react'
import { Contain } from '../../Components/About';

export const About = () => {
    return (
        <Contain>
            <Contain.Content>
                <h2>Sobre nós</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris purus, fringilla ultricies arcu vel, efficitur volutpat diam. Nullam ultrices urna et pharetra finibus. Phasellus vehicula dictum nunc non tincidunt. Donec vestibulum mi ut nulla faucibus, a semper urna tempor. Curabitur ultricies urna est, ut aliquam erat egestas pulvinar. Sed vehicula porta nibh tincidunt tincidunt. Maecenas cursus ex rhoncus lectus egestas egestas. Donec consequat posuere nisi et convallis. Nulla id consectetur erat. Nullam ante quam, consectetur eget venenatis sit amet, venenatis ac eros. Donec ac tellus cursus, condimentum odio vel, maximus tellus. Donec vestibulum rutrum luctus. Aliquam ut iaculis eros, condimentum auctor augue.</p>
                <button className="edit">Editar</button>
            </Contain.Content>
        </Contain>
    )
}