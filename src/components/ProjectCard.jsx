/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  ${tw('shadow-lg w-full relative no-underline rounded-lg px-8 py-16 md:py-24 text-white')};
  background: #000 ${({ bg }) => bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
  cursor: pointer;
`;

const Text = styled.div`
  ${tw('opacity-75 font-sans text-sm md:text-base')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
  ${tw('text-white uppercase text-2xl md:text-3xl xl:text-4xl letter-spacing-wide font-sans pt-8')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const ProjectCard = ({ title, nickName, bg, onClick }) => (
  <Wrapper bg={bg} onClick={onClick}>
    <Text>{`"${nickName}"`}</Text>
    <Title>{title}</Title>
  </Wrapper>
);

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  nickName: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
