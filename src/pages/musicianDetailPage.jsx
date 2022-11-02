/* global tw */
import React from 'react';
import Modal from 'react-modal';
// import PropTypes from 'prop-types';
import { Spring } from 'react-spring/renderprops';
import styled from '@emotion/styled';
import { differenceInYears } from 'date-fns'
import '../styles/global';
import HilaryBioPic from '../images/hilaryBio.jpg';
import JanineBioPic from '../images/janineBio.jpg';
import MaximBioPic from '../images/maximBio.jpg';
import AlekseyBioPic from '../images/alekseyBio.jpg';

const PreloadPicContainer = styled.div`
  display: none;
`

const BioBox = styled.div`
  ${tw('rounded-lg h-full relative')};
  background: #000 url(${({ url }) => url}) no-repeat center;
  background-size: cover;
`;

const BioScrollBox = styled.div`
  ${tw('h-full flex flex-col justify-end text-right')};
  padding: 2rem 0 2rem 2rem;
  background: linear-gradient(-45deg, transparent, black 50%, transparent 50%);
  ${({ mobile, changeProps }) => (mobile
    ? `opacity: ${changeProps.opacity}`
    : `transform: ${changeProps.transform}`
  )};
  div.bioContainer {
    ${tw('flex flex-col overflow-y-scroll')};
    p.p1 {
      ${tw('self-end text-gray-200 lg:text-2xl sm:text-xl mr-8')};
    }
    p.p2 {
      ${tw('self-end text-gray-200 lg:text-2xl sm:text-xl mr-8')};
    }
    a {
      ${tw('text-gray-500 underline mb-8 mr-8')};
    }
    span {
      ${tw('text-gray-300 underline mb-8 mr-8')};
    }
  }
`;

const BioTitle = styled.h2`
  ${tw('my-2 font-semibold text-gray-100 lg:text-4xl sm:text-3xl mr-8')};
`;

const BioAgeText = styled.span`
  ${tw('mb-2 font-semibold text-gray-500 lg:text-3xl sm:text-2xl mr-8')};
`;

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  content: {
    width: '75%',
    height: '75%',
    padding: 0,
    backgroundColor: '#000',
    boxShadow: '0 0 200px 150px #000',
    border: 'none',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  },
};

Modal.setAppElement(`#___gatsby`);

const getBioPic = picName => {
  switch (picName) {
    case 'hilaryBio':
      return HilaryBioPic;
    case 'janineBio':
      return JanineBioPic;
    case 'maximBio':
      return MaximBioPic;
    case 'alekseyBio':
      return AlekseyBioPic;
    default:
      return null;
  }
};

export const PreloadPics = () => (
  <PreloadPicContainer>
    <img src={HilaryBioPic} alt="hilaryBio" />
    <img src={JanineBioPic} alt="janineBio" />
    <img src={MaximBioPic} alt="maximBio" />
    <img src={AlekseyBioPic} alt="alekseyBio" />
  </PreloadPicContainer>
)

const PageContents = ({
  musician: {
    name,
    bioPicName,
    bio1,
    bio2,
    born,
    webSite
  },
  mobile,
  transformFrom,
  transformTo,
  closeModal
}) => {
  const age = differenceInYears(
    new Date(),
    new Date(born)
  )
  return (
    <BioBox url={getBioPic(bioPicName)}>
      <Spring
        delay={1500}
        from={transformFrom}
        to={transformTo}
      >
        {props => (
          <BioScrollBox changeProps={props} mobile={mobile}>
            <BioTitle>{name}</BioTitle>
            <BioAgeText>{`Age: ${age}`}</BioAgeText>
            <div className="bioContainer">
              <p className="p1">{bio1}</p>
              <p className="p2">{bio2}</p>
              <a
                href={webSite}
                target="_blank"
                rel="noopener noreferrer"
              >
                website
              </a>
              <span onClick={closeModal}>back to list</span>
            </div>
          </BioScrollBox>
        )}
      </Spring>
    </BioBox>
  )
}

const PageModal = ({ isModalOpen, musician, closeModal, mobile, transformFrom, transformTo }) => (
  <Modal
    isOpen={isModalOpen}
    // onAfterOpen={this.afterOpenModal}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel={`A modal bio of ${musician}`}
  >
    <PageContents
      musician={musician}
      mobile={mobile}
      transformFrom={transformFrom}
      transformTo={transformTo}
      closeModal={closeModal}
    />
  </Modal>
);

export default PageModal;
