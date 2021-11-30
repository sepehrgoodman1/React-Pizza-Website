import React from 'react'
import {FooterContainer,FooterWrap,SocialMedia,SocialMediaWrap,SocialLogo,SocialIcons,SocialIconLink} from './FooterElements'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' arial-label="Facebook" rel="noopener noreferrer">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' arial-label="Instagram" rel="noopener noreferrer">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' arial-label="Youtube" rel="noopener noreferrer">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href='/' target='_blank' arial-label="Twitter" rel="noopener noreferrer">
                                <FaTwitter/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
