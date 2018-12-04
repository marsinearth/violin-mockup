/* global tw */
import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring';
import styled from '@emotion/styled';
import '../styles/global';
import HilaryBioPic from '../images/hilaryBio.jpg';
import JanineBioPic from '../images/janineBio.jpg';
import MaximBioPic from '../images/maximBio.jpg';
import AlekseyBioPic from '../images/alekseyBio.jpg';

const BioBox = styled.div`
  ${tw('rounded-lg h-full overflow-hidden relative')};
  background-color: #000;
  background: url(${props => props.url}) center no-repeat;
  background-size: cover;
`;

const BioScrollBox = styled.div`
  ${tw('p-8 h-full overflow-y-scroll flex flex-col justify-end text-right')};
  background: linear-gradient(-45deg, transparent, black 50%, transparent 50%);
  transform: ${props => props.transform};
  .bioContainer {
    ${tw('flex flex-col')};
    p.p1 {
      ${tw('w-1/3 self-end text-grey-light lg:text-2xl sm:text-xl')};
    }
    p.p2 {
      ${tw('w-3/4 self-end text-grey-light lg:text-2xl sm:text-xl')};
    }
    a {
      ${tw('text-grey underline mb-8')};
    }
  }
`;

const BioTitle = styled.h2`
  ${tw('my-2 font-semibold text-grey-lighter lg:text-4xl sm:text-3xl')};
`;

const BioAgeText = styled.span`
  ${tw('mb-2 font-semibold text-grey lg:text-3xl sm:text-2xl')};
`;

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  content: {
    width: '75%',
    height: '75%',
    backgroundColor: '#000',
    boxShadow: '0 0 200px 100px #000',
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

const PageContents = ({
  musician: {
    name,
    bioPicName,
    bio1,
    bio2,
    age,
    webSite
  }
}) => (
  <BioBox url={getBioPic(bioPicName)}>
    <Spring
      delay={1500}
      from={{ transform: 'translate(-100%, 100%)' }}
      to={{ transform: 'translate(0, 0)' }}
    >
      {({ transform }) => (
        <BioScrollBox transform={transform}>
          <BioTitle>{`Bio of ${name}`}</BioTitle>
          <BioAgeText>{`Age: ${age}`}</BioAgeText>
          <div className="bioContainer">
            <p className="p1">{bio1}</p>
            <p className="p2">{bio2}</p>
            <a 
              href={webSite} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {`${name}'s web page`}
            </a>
          </div>
        </BioScrollBox>
      )}
    </Spring>
  </BioBox>
);

const PageModal = ({ isModalOpen, musician, closeModal }) => (
  <Modal
    isOpen={isModalOpen}
    // onAfterOpen={this.afterOpenModal}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel={`A modal bio of ${musician}`}
  >
    <PageContents musician={musician} />
  </Modal>
);

export default PageModal;
