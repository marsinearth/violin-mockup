/* global tw */
import React, { PureComponent } from 'react';
import styled from '@emotion/styled';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import SEO from '../components/SEO';
import SVG from '../components/SVG';
import ProjectCard from '../components/ProjectCard';
import { rotate, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import violin from '../images/violin.svg';
import hilary from '../images/hilary.jpg';
import janine from '../images/janine.jpg';
import maxim from '../images/maxim.jpg';
import aleksey from '../images/aleksey.jpg';
import StradiVsGuarneri from '../images/strad_and_guarneri.jpg';
import '../styles/global';
import PageModal from './musicianDetailPage';
import MusicianData from '../musicianData.json';

const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
`;

const BigTitle = styled.h1`
  ${tw('text-5xl lg:text-6xl font-serif text-grey-lightest mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

const Title = styled.h1`
  ${tw('text-4xl lg:text-4xl font-serif text-grey-lighter mb-8 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 34px;
    height: 34px;
    background: url(${violin});
    position: absolute;
    background-size: 34px;
    #animation: ${rotate} 4s linear infinite;
    left: -45px;
    top: 5px;
  }
`;

const Subtitle = styled.p`
  ${tw('text-2xl lg:text-4xl font-sans text-grey-light mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`;

const Avatar = styled.img`
  ${tw('rounded-lg w-4/5 lg:w-2/5 shadow-lg h-auto')};
`;

const AboutSub = styled.span`
  ${tw('text-grey-lightest font-semibold pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl')};
`;

const AboutDesc = styled.p`
  ${tw('text-grey-lighter text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify')};
`;

const ContactText = styled.p`
  ${tw('text-grey-lighter font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Footer = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

export default class Index extends PureComponent {
  state = {
    isModalOpen: false,
    musician: null
  };

  onClickCard = e => {
    const { target: { dataset, parentElement: { dataset: parentDataSet } }} = e;
    let musician = null;
    if (dataset && dataset.name) {
      musician = MusicianData[dataset.name];
    } else if (parentDataSet && parentDataSet.name) {
      musician = MusicianData[parentDataSet.name];
    }
    if (musician) {
      this.setState({ musician, isModalOpen: true });
    }
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen, musician } = this.state;
    return (
      <>
        <SEO />
        <Parallax pages={5}>
          <Divider speed={0.2} offset={0}>
            <UpDown>
              <SVG icon="violin" className={hidden} width={8} stroke={colors['orange-lighter']} fill={colors['orange-lighter']} left="10%" top="20%" />
              <SVG icon="sixtyFourthRest" width={8} stroke={colors['red-lighter']} fill={colors['red-lighter']} left="60%" top="70%" />
              <SVG icon="musicNotes" width={4} fill={colors['grey-light']} left="60%" top="15%" />
            </UpDown>
            <UpDownWide>
              <SVG icon="CClef" className={hidden} width={10} fill={colors['blue-light']} left="80%" top="10%" />
              <SVG icon="violin" width={8} stroke={colors.grey} fill={colors.grey} left="90%" top="50%" />
              <SVG icon="GClef" width={10} fill={colors.grey} left="70%" top="90%" />
              <SVG icon="violin" width={10} stroke={colors['grey-dark']} fill={colors['grey-dark']} left="30%" top="65%" />
              <SVG icon="GClef" width={4} fill={colors['grey-light']} left="75%" top="10%" />
              <SVG icon="cello" className={hidden} width={6} fill={colors['grey-darker']} left="45%" top="10%" />
            </UpDownWide>
            <SVG icon="GClef" className={hidden} width={8} fill={colors['grey-darker']} left="5%" top="70%" />
            <SVG icon="GClef" width={4} fill={colors.grey} left="4%" top="20%" />
            <SVG icon="GClef" width={8} fill={colors['grey-dark']} left="50%" top="60%" />
            <SVG icon="cello" width={6} fill={colors['grey-dark']} left="95%" top="90%" />
            <SVG icon="cello" className={hidden} width={8} fill={colors['grey-darker']} left="40%" top="80%" />
            <SVG icon="violin" width={6} stroke={colors.grey} fill={colors.grey} left="25%" top="5%" />
            <SVG icon="GClef" width={8} fill={colors['green-lighter']} left="95%" top="5%" />
            <SVG icon="musicNotes" className={hidden} width={8} fill={colors['purple-lighter']} left="5%" top="90%" />
            <SVG icon="musicNotes" width={4} fill={colors['grey-light']} left="10%" top="10%" />
            <SVG icon="musicNotes" width={8} fill={colors['grey-light']} left="40%" top="30%" />
            <SVG icon="sixtyFourthRest" width={6} stroke={colors['grey-light']} fill={colors['grey-light']} left="10%" top="50%" />
            <SVG icon="sixtyFourthRest" width={6} stroke={colors['grey-light']} fill={colors['grey-light']} left="80%" top="70%" />
          </Divider>
          <Content speed={0.4} offset={0}>
            <Hero>
              <BigTitle>
                Hello, <br /> This is a violin mockup page
              </BigTitle>
              <Subtitle>I'm introducing some of the great contemporary violinists here.</Subtitle>
            </Hero>
          </Content>
          <DividerMiddle
            bg="linear-gradient(to right, #A04000 0%, #D68910 100%)"
            speed={-0.2}
            offset={1.1}
            factor={2}
          />
          <Content speed={0.4} offset={1.2} factor={2}>
            <Inner>
              <Title>Violinists</Title>
              <ProjectsWrapper>
                <ProjectCard
                  title="Hilary Hahn"
                  name="Hilary"
                  link="http://www.hilaryhahn.com/"
                  // bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
                  bg={`url(${hilary}) 20% 10%`}
                  onClick={this.onClickCard}
                >
                  "The Bach Machine"
                </ProjectCard>
                <ProjectCard
                  title="Janine Jansen"
                  name="Janine"
                  link="https://www.janinejansen.com/"
                  // bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
                  bg={`url(${janine}) center`}
                  onClick={this.onClickCard}
                >
                  "Dutch Empress"
                </ProjectCard>
                <ProjectCard
                  title="Maxim Vengerov"
                  name="Maxim"
                  link="http://www.nfbm.com/maxim-vengerov/"
                  // bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
                  bg={`url(${maxim}) center`}
                  onClick={this.onClickCard}
                >
                  "Jewish and Russian. Standard Virtuoso"
                </ProjectCard>
                <ProjectCard
                  title="Aleksey Igudesman"
                  name="Aleksey"
                  link="https://www.alekseyigudesman.com/"
                  // bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
                  bg={`url(${aleksey}) center`}
                  onClick={this.onClickCard}
                >
                  "A Classical funmaker"
                </ProjectCard>
              </ProjectsWrapper>
            </Inner>
          </Content>
          <Divider speed={0.1} offset={1} factor={2}>
            <UpDown>
              <SVG icon="musicNotes" width={4} fill={colors['red-lighter']} left="85%" top="75%" />
              <SVG icon="cello" width={6} fill={colors['teal-light']} left="70%" top="20%" />
              <SVG icon="violin" width={6} stroke={colors['orange-lighter']} fill={colors['orange-lighter']} left="25%" top="5%" />
              <SVG icon="GClef" className={hidden} width={24} fill={colors['red-lighter']} left="17%" top="60%" />
            </UpDown>
            <UpDownWide>
              <SVG icon="CClef" className={hidden} width={10} fill={colors['green-lighter']} left="20%" top="90%" />
              <SVG icon="violin" width={8} stroke={colors['grey-lightest']} fill={colors['grey-lightest']} left="90%" top="30%" />
              <SVG icon="GClef" width={10} fill={colors['yellow-lighter']} left="70%" top="90%" />
              <SVG icon="violin" className={hidden} width={10} stroke={colors.teal} left="18%" top="75%" />
              <SVG icon="GClef" width={4} fill={colors['red-lighter']} left="75%" top="10%" />
              <SVG icon="cello" className={hidden} width={6} fill={colors['green-lighter']} left="45%" top="10%" />
            </UpDownWide>
            <SVG icon="GClef" width={4} fill={colors['red-lighter']} left="4%" top="20%" />
            <SVG icon="GClef" width={8} fill={colors['pink-light']} left="80%" top="60%" />
            <SVG icon="musicNotes" width={4} fill={colors['orange-lighter']} left="10%" top="10%" />
            <SVG icon="musicNotes" width={8} fill={colors['yellow-lighter']} left="29%" top="26%" />
            <SVG icon="sixtyFourthRest" width={10} stroke={colors['red-lighter']} fill={colors['red-lighter']} left="75%" top="30%" />
            <SVG icon="sixtyFourthRest" width={6} stroke={colors['yellow-light']} fill={colors['yellow-lighter']} left="80%" top="70%" />
          </Divider>
          <Divider
            bg="#364349"
            clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
            speed={0.2}
            offset={3}
          />
          <Divider speed={0.1} offset={3}>
            <UpDown>
              <SVG icon="musicNotes" className={hidden} width={4} fill={colors['blue-light']} left="50%" top="75%" />
              <SVG icon="cello" className={hidden} width={6} fill={colors['grey-dark']} left="70%" top="20%" />
              <SVG icon="violin" width={6} stroke={colors.grey} fill={colors.grey} left="25%" top="5%" />
              <SVG icon="cello" className={hidden} width={8} fill={colors['orange-light']} left="80%" top="80%" />
            </UpDown>
            <UpDownWide>
              <SVG icon="CClef" className={hidden} width={6} fill={colors['purple-light']} left="5%" top="80%" />
              <SVG icon="violin" width={8} stroke={colors.grey} fill={colors.grey} left="95%" top="50%" />
              <SVG icon="GClef" width={4} fill={colors['red-light']} left="85%" top="15%" />
              <SVG icon="cello" className={hidden} width={6} fill={colors['grey-darkest']} left="45%" top="10%" />
            </UpDownWide>
            <SVG icon="GClef" width={4} fill={colors['red-light']} left="4%" top="20%" />
            <SVG icon="GClef" width={8} fill={colors.grey} left="70%" top="60%" />
            <SVG icon="musicNotes" width={4} fill={colors['orange-light']} left="10%" top="10%" />
            <SVG icon="musicNotes" width={8} fill={colors.grey} left="20%" top="30%" />
            <SVG icon="sixtyFourthRest" width={6} stroke={colors['grey-dark']} left="80%" top="70%" />
          </Divider>
          <Content speed={0.4} offset={3}>
            <Inner>
              <Title>Master Pieces</Title>
              <AboutHero>
                <Avatar src={StradiVsGuarneri} alt="strad" />
                <AboutSub>Stradivarius vs. Guarnerius</AboutSub> 
              </AboutHero>
              <AboutDesc>
                Antonius Stradivarius was the first violin maker in his family. Apprenticed to Amati at a young age, Stradivarius was a sober and industrious guy that led a large workshop cranking out his instruments for almost 60 years, from about 1680 to 1737. He made more than 2,000 instruments of which about 600 still exist, mainly violins, violas and cellos. If you know anything about violins or violin makers, you know the name Stradivarius.
              </AboutDesc>
              <AboutDesc>
                Giuseppe Guarnerius, known as del Gesu came from a large family of violin makers and learned the craft from his father. He was an erratic worker who primarily worked alone, and he never put his name on a cello (although I did work on one by his uncle Petrus that definitely bears Giuseppe's workmanship).  As a cello enthusiast, I don't think I'll ever forgive Giuseppe for this lack of cello love. His working life spanned about 20 years, from approximately 1726 to 1744. His output was relatively small and about 100 of his instruments still exist.
              </AboutDesc>
            </Inner>
          </Content>
          <Divider fill="#364349" speed={0.2} offset={4}>
            <WaveWrapper>
              <InnerWave>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 338.05" preserveAspectRatio="none">
                  <path className={waveAnimation}>
                    <animate
                      attributeName="d"
                      values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                      repeatCount="indefinite"
                      dur="30s"
                    />
                  </path>
                </svg>
              </InnerWave>
            </WaveWrapper>
          </Divider>
          <Content speed={0.4} offset={4}>
            <Inner>
              <Title>Get in touch</Title>
              <ContactText>
                Say <a href="mailto:marsonearth@me.com">Hi</a> to me.
              </ContactText>
            </Inner>
            <Footer>
              &copy; 2018 by Gatsby Starter Portfolio Cara.{' '}
              <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Github Repository</a>.
            </Footer>
          </Content>
          <Divider speed={0.1} offset={4}>
            <UpDown>
              <SVG icon="cello" className={hidden} width={6} fill={colors['grey-darker']} left="70%" top="20%" />
              <SVG icon="violin" width={6} stroke={colors['grey-darker']} left="25%" top="5%" />
            </UpDown>
            <UpDownWide>
              <SVG icon="violin" width={8} stroke={colors.grey} fill={colors.grey} left="95%" top="50%" />
              <SVG icon="GClef" width={4} fill={colors['red-lighter']} left="85%" top="15%" />
              <SVG icon="cello" className={hidden} width={6} fill={colors['grey-darkest']} left="45%" top="10%" />
            </UpDownWide>
            <SVG icon="GClef" width={4} fill={colors['red-lighter']} left="4%" top="20%" />
            <SVG icon="GClef" width={8} fill={colors['grey-dark']} left="70%" top="60%" />
            <SVG icon="musicNotes" width={8} fill={colors['grey-dark']} left="20%" top="30%" />
            <SVG icon="sixtyFourthRest" width={6} stroke={colors['grey-darker']} fill={colors['grey-darker']} left="80%" top="70%" />
          </Divider>
        </Parallax>
        <PageModal isModalOpen={isModalOpen} musician={musician} closeModal={this.closeModal} />
      </>
    );
  }
}
