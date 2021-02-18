import React from 'react';

import { ContainerFooter, SocialMedia, Images, PlayButton } from './styles';

// Iconst
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function Footer() {
  return (
   <ContainerFooter>
    <SocialMedia>
     <GitHubIcon />
     <TwitterIcon />
     <LinkedInIcon />
    </SocialMedia>

    <Images>
     <ul>
      <li>
       <img src="https://cdnb.artstation.com/p/assets/images/images/011/015/331/large/alena-zakharenkova-basg-color-new.jpg?1527439015" alt="images"/>
       <span>Explore the Forest</span>
       
      </li>
      <li>
       <img src="https://cdnb.artstation.com/p/assets/images/images/011/015/331/large/alena-zakharenkova-basg-color-new.jpg?1527439015" alt="images"/>
       <span>Challenge Monsters</span>
      </li>
     </ul>
    </Images>

    <PlayButton>
     <PlayArrowIcon />
     <p>Play Movie</p>
    </PlayButton>
   </ContainerFooter>
  );
}

export default Footer;