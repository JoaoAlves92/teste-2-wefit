/*
 ** Copyright (c) 2021 Oracle and/or its affiliates.
 */
import {generateMedia} from 'styled-media-query';
import theme from './theme';

const {mobile, tablet, laptop, desktop, desktopLarge} = theme.breakpoints;

const media = generateMedia({
  mobile,
  tablet,
  laptop,
  desktop,
  desktopLarge
});

export default media;
