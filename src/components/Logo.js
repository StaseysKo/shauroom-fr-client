import PropTypes from 'prop-types';
import { memo } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  isSimple: PropTypes.bool,
  onDark: PropTypes.bool,
  sx: PropTypes.object,
};

function Logo({ onDark = false, isSimple = false, sx }) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const PRIMARY_MAIN = theme.palette.primary.main;
  const LIGHT_COLOR = theme.palette.common.white;
  const DARK_COLOR = theme.palette.grey[800];

  return (
    <NextLink href="/" passHref>
      <Box
        sx={{
          // width: isSimple ? 164 : 75,
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        {isSimple ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 512 512"
          >
            <ellipse cx="405.143" cy="338.571" fill={PRIMARY_MAIN} rx="82.857" ry="82.857" />
            <path
              fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR}
              d="M114.742 355.332H256v66.097H24v-61.376l140.323-203.956H24V90h232v61.376L114.742 355.332z"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="53" width="168" viewBox="0 0 640 236">
            <g>
              <g id="Лого">
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M630.7,172c-1.9,0-3.6,0-5.7,0c0.2-34.4,0.4-68.7,0.6-103c-0.3-0.1-0.5-0.2-0.6-0.2c-3.2-0.3-3.2-0.2-3.8,2.9
      c-2.4,14-4.8,28.1-7.2,42.1c-1.9,11.3-3.9,22.6-5.8,33.9c0,0.2-0.1,0.4-0.2,0.7c-3.4,0-6.8,0-10.3,0c-1.3-7.7-2.7-15.4-4-23.1
      c-2.9-16.9-5.8-33.8-8.7-50.7c-0.2-1.4-0.6-2.8-0.7-4.2c-0.1-1.4-0.7-1.8-2-1.7c-0.6,0.1-1.3,0-2.2,0c0.2,34.5,0.4,68.8,0.6,103.2
      c-2,0-3.8,0-5.6,0c0-36.2,0-72.2,0-108.5c4.2,0,8.4,0,12.5,0.1c0.4,0,1,0.8,1,1.3c1.4,7.9,2.6,15.7,4,23.6
      c2.1,12.2,4.1,24.4,6.2,36.6c1,6,2,12,3,18c1.3,0.5,1.8,0.2,2.1-1.2c2.9-16.9,5.8-33.7,8.7-50.6c1.5-8.6,2.9-17.2,4.4-25.8
      c0.1-0.6,0.3-1.1,0.5-1.9c4.1,0,8.1,0,12.1,0c0.4,0,0.7,0.6,1,1c0.1,0.2,0,0.6,0,0.9c0,35.2,0,70.5,0.1,105.7
      C630.7,171.3,630.7,171.5,630.7,172z"/>
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M32.5,65.1c1.9,0,3.5,0,5.3,0c0,34.2,0,68.3,0,102.5c6,0,11.9,0,17.9,0c0-34.1,0-68.2,0-102.5c1.8,0,3.4,0,5.1,0
      c0,35.9,0,71.7,0,107.7c-17.2,0-34.3,0-51.6,0c0-35.9,0-71.8,0-107.7c1.7,0,3.3,0,5,0c0,34.1,0,68.2,0,102.5c6.1,0,12.1,0,18.2,0
      C32.5,133.4,32.5,99.3,32.5,65.1z"/>
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M319.8,132c0,17.5,0,35,0,52.5c0,10.3-6.3,18.8-15.9,21.6c-2.2,0.6-4.5,0.9-6.8,0.9c-11.9,0.1-23.8,0.1-35.8,0
      c-11.3,0-20.2-7.3-22.2-18.2c-0.3-1.4-0.3-2.9-0.3-4.4c0-23.3,0-46.6,0-70c0-1.9,0.6-2.9,2.3-3.6c25-11.5,50-23,75.1-34.5
      c2.6-1.2,3.7-0.5,3.7,2.4C319.8,96.5,319.8,114.2,319.8,132z M315.6,81c-1.1,0.5-1.9,0.8-2.7,1.2c-22.9,10.5-45.8,21-68.7,31.5
      c-1.2,0.5-1.6,1.2-1.6,2.5c0,23.1,0,46.2,0,69.3c0,0.8,0,1.5,0.2,2.3c1.6,9.2,8.8,15.2,18.3,15.3c11.9,0,23.8,0,35.8,0
      c11.2,0,18.8-7.7,18.8-18.9c0-12.6-0.1-25.1-0.1-37.7c0-21.1,0-42.2,0-63.3C315.6,82.5,315.6,81.9,315.6,81z"/>
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M353.1,63.6c0.2-0.1,0.5-0.1,0.7-0.1c6.2,0,12.5-0.2,18.7,0.1c8.8,0.4,13.5,5.2,13.6,14c0.2,10.2,0.1,20.4,0.1,30.7
      c0,2.6,0,5.2,0,7.8c-0.1,7.5-2.7,13.2-10.5,15.3c3.9,13.5,7.7,27,11.7,40.8c-1.8,0-3.4,0.1-5-0.1c-0.4,0-1-0.9-1.1-1.4
      c-2.4-8.2-4.7-16.3-7-24.5c-1.2-4.3-2.5-8.6-3.6-12.9c-0.3-1.1-0.8-1.6-2-1.6c-3.2,0.1-6.4,0-9.8,0c0,13.5,0,26.8,0,40.2
      c-1.9,0-3.7,0-5.6,0C353.1,135.8,353.1,99.7,353.1,63.6z M358.8,68.7c0,19.3,0,38.5,0,57.6c4.8,0,9.5,0,14.2,0
      c0.5,0,0.9-0.1,1.4-0.2c3.8-1,6.2-4.5,6.4-9.3c0.1-2,0-4,0-6c0-10.7,0.1-21.5,0-32.2c0-4.9-2.4-9.9-8.8-9.9
      C367.6,68.7,363.3,68.7,358.8,68.7z"/>
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M459.5,117.7c0,13.1,0,26.2,0,39.3c0,2.4-0.4,4.8-1,7.1c-1.4,4.9-4.7,7.9-9.7,8.4c-4.2,0.4-8.5,0.6-12.6,0
      c-6.7-0.9-10.4-5.1-11.1-11.9c-0.2-1.8-0.3-3.6-0.3-5.4c0-25.2,0-50.4,0-75.6c0-2,0.1-4,0.5-5.9c1.4-6.8,4.6-10.2,11.5-10.9
      c4.1-0.4,8.4-0.3,12.4,0.2c5.6,0.8,9.1,4.9,10,11c0.2,1.7,0.4,3.4,0.4,5.1C459.5,92,459.5,104.8,459.5,117.7z M430.2,117.7
      C430.2,117.7,430.2,117.7,430.2,117.7c0,3,0,6,0,9c0,10.7,0,21.4,0.1,32.1c0.1,5.4,3.4,8.8,8.8,8.9c2.4,0.1,4.8,0.1,7.2-0.1
      c2.8-0.2,4.9-1.5,6.2-4c1.3-2.3,1.5-4.8,1.5-7.3c0-25.9,0-51.8,0-77.7c0-0.9-0.1-1.9-0.2-2.8c-0.7-5.1-3.9-7.9-9-7.9
      c-1.8,0-3.5,0-5.3,0c-5.7,0-9.3,3.4-9.3,9.2C430.2,90.5,430.2,104.1,430.2,117.7z"/>
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M534.1,117.7c0,12.8,0,25.6,0,38.4c0,1.9-0.1,3.9-0.5,5.8c-1.3,6.7-4.6,10.1-11.4,10.8c-4.2,0.4-8.5,0.3-12.6-0.3
      c-5.6-0.8-9.1-5.1-9.9-11.1c-0.2-1.7-0.4-3.4-0.4-5.1c0-25.6,0-51.1,0-76.7c0-2.3,0.2-4.6,0.7-6.8c1.3-5.6,4.7-9.3,10.5-9.8
      c4.4-0.4,8.8-0.4,13.1,0.1c5.9,0.7,9.5,5.4,10.1,12.1c0.2,2.3,0.2,4.7,0.2,7C534.1,93.9,534.1,105.8,534.1,117.7z M528.5,117.7
      c0-13.4,0.1-26.9,0-40.3c0-5.6-3.3-9.9-9.4-9.6c-1.9,0.1-3.9,0-5.8,0c-3.4,0-6.1,1.5-7.3,4.7c-0.7,1.9-1.2,4.1-1.2,6.1
      c-0.1,25.8-0.1,51.6-0.1,77.3c0,0.8,0,1.6,0,2.5c0.3,4.6,2.7,8.3,6.5,8.8c3.6,0.5,7.3,0.5,10.9,0c3.9-0.5,6.5-4.5,6.5-9.1
      C528.5,144.7,528.5,131.2,528.5,117.7z"/>
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M109.3,65c4.8,0,9.3,0,13.9,0c0.4,0,1,0.6,1,1c1,8.5,1.9,17,2.9,25.5c1,8.7,2,17.4,3,26c1.1,10,2.2,19.9,3.4,29.9
      c0.9,7.8,1.8,15.6,2.7,23.4c0.1,0.6,0.1,1.2,0.1,1.9c-1.8,0-3.4,0-5.3,0c-0.4-3-0.7-6.1-1.1-9.1c-0.5-4.4-0.9-8.9-1.5-13.3
      c0-0.4-0.7-1-1.1-1c-7.1-0.1-14.2-0.1-21.3,0c-0.4,0-1,0.7-1.1,1.1c-0.8,6.3-1.4,12.6-2.2,18.9c-0.1,1.1-0.2,2.2-0.4,3.4
      c-1.8,0-3.4,0-5.4,0C101.1,136.9,105.2,101.1,109.3,65z M127.6,144.1c-2.8-24.7-5.5-49.3-8.2-73.8c-1.9,0-3.6,0-5.3,0
      c-2.8,24.6-5.7,49.2-8.5,73.8C112.9,144.1,120.1,144.1,127.6,144.1z"/>
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M174.2,173.1c-0.5-5.4-0.5-5.4,4.2-5.4c5.9,0,8.5-2.1,9.4-8c1.1-6.9,1.9-13.8,2.8-20.9c-4,0-7.8,0-11.8,0
      c-3.8-24.6-7.5-49.1-11.2-73.5c0.2-0.1,0.3-0.2,0.4-0.2c5-0.3,4.9-0.3,5.7,4.6c2.4,15.9,4.9,31.9,7.3,47.8
      c0.7,4.9,1.5,9.7,2.2,14.6c0.1,1.1,0.4,1.6,1.6,1.5c2.2-0.1,4.4,0,6.8,0c3-22.9,6-45.7,9-68.5c1.8,0,3.4,0,5.4,0
      c-0.3,2.7-0.7,5.4-1,8.1c-1.2,9.4-2.5,18.8-3.7,28.2c-1.2,9.2-2.5,18.4-3.7,27.5c-1.2,9.4-2.4,18.7-3.8,28.1c-0.4,3-1,6-2,8.9
      c-1.3,3.6-4.2,5.8-8,6.5C180.6,172.8,177.4,172.9,174.2,173.1z"/>
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M233.9,48.8c-0.2-6.2,2.2-11.1,7.1-14.6c10.1-7.2,20.8-8.1,32.2-3.2c3.3,1.4,6.6,2.9,10.1,4.1c4.2,1.4,8.4,0.9,12.6-0.2
      c3.3-0.9,6.7-1.7,10.1-2.3c1.3-0.2,2.7,0,4,0.3c3.3,1,4.7,4.1,3.9,8.4c-0.2,0.9-0.3,1.8-0.6,2.6c-0.7,1.7,0,2.3,1.5,2.8
      c1.6,0.5,3.1,1,4.7,1.5c3.4,1.3,5.2,3.8,5.1,7.4c-0.1,5.6-2,10.8-4.4,15.8c-0.5,1.1-1.5,1.5-2.6,1c-1-0.5-1.1-1.4-0.7-2.4
      c0.8-2,1.7-4,2.3-6.1c0.7-2.2,1.4-4.5,1.6-6.8c0.3-3.5-1.2-5.4-4.5-6.3c-1-0.3-1.9-0.5-2.9-0.7c-3.4-1-4.6-3.1-3.9-6.5
      c0.2-1.1,0.5-2.3,0.8-3.4c0.5-2.5-0.8-4-3.4-3.8c-1.8,0.2-3.7,0.4-5.3,1.1c-10,4-19.5,2.5-28.8-2.2c-4.2-2.1-8.6-3.6-13.3-3.4
      c-6.2,0.2-11.7,2.4-16.5,6.2c-4.7,3.8-5.4,9.1-4.5,14.6c1,5.9,2.5,11.7,3.7,17.5c0.1,0.6-0.3,1.4-0.5,2.1c-0.8-0.4-2-0.6-2.2-1.2
      c-1.4-3.8-2.7-7.6-3.6-11.5C234.5,55.9,234.3,52.3,233.9,48.8z"/>
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M289.2,55.4c0.7,0.2,2.1,0.4,3.4,0.9c5.4,1.7,10.7,3.4,16,5.2c4.5,1.5,6.5,5.3,5.2,9.8c-0.4,1.3-0.8,2.6-1.2,3.8
      c-0.7,1.9-1.7,2.7-3,2.3c-1.4-0.4-1.7-1.5-1.1-3.7c0.4-1.3,0.8-2.6,1.2-3.9c0.6-2-0.1-3.5-2.1-4.2c-6-2-12-3.9-18-5.8
      c-2-0.6-3.5,0.3-4.2,2.6c-2.6,8-5.2,16.1-7.7,24.1c-0.2,0.5-0.3,1.3-0.7,1.5c-0.7,0.4-1.7,1-2.3,0.8c-0.6-0.2-1.1-1.2-1.3-2
      c-0.1-0.6,0.1-1.4,0.4-2c2.6-8,5.1-16.1,7.7-24.1C282.5,57.5,285.3,55.4,289.2,55.4z"/>
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M242.7,79.2c0,7.4,0,14.5,0,21.6c0,1.6,0,3.3,0,4.9c0,1.3-0.7,2.1-2,2.2c-1.3,0-2.1-0.7-2.1-2.1c0-9.9,0-19.8,0-29.8
      c0-1.8,1.5-2.5,3.4-1.6c2.6,1.2,5.1,2.4,7.6,3.6c7.1,3.5,14.2,6.9,21.3,10.4c1.7,0.8,2.1,2,1.2,3.3c-0.9,1.2-1.9,0.8-3,0.3
      c-8.1-3.9-16.1-7.8-24.2-11.7C244.4,80,243.7,79.7,242.7,79.2z"/>
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M247.2,72.8c0.3-10,8.6-18.7,18.5-19.8c4.5-0.5,8.7,0.3,12.8,2.2c1.2,0.6,2.3,1.3,1.8,2.8c-0.6,1.6-2,1.1-3.2,0.7
      c-2.3-0.6-4.5-1.4-6.8-1.8c-7.8-1.4-15.4,3.2-17.9,10.7c-0.6,1.8-1,3.6-1.4,5.4c-0.3,1.3-0.7,2.7-2.4,2.4
      C247.1,75.2,247.2,73.8,247.2,72.8z"/>
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M573.1,199.8c-2-2.2-2.2-4.8-0.4-6.4c1.8-1.6,5.3-1.5,6.9,0.2c1.7,1.8,1.4,4.1-0.6,6.2c2.3,2.3,2.6,5.1,0.7,7
      c-1.8,1.8-5.6,1.7-7.4,0C570.5,205,570.8,202.2,573.1,199.8z M576.4,205.4c0.5-0.7,1.3-1.3,1.4-2.1c0.3-1.2-0.6-1.7-1.7-1.7
      c-1,0-1.9,0.4-1.9,1.6C574.1,204.4,574.7,205.1,576.4,205.4z M577.8,197.2c0-0.3,0-0.5,0-0.8c-0.6-0.4-1.1-1-1.7-1.1
      c-1.1-0.2-1.7,0.6-1.5,1.6c0.1,0.6,0.9,1.5,1.5,1.5C576.6,198.5,577.2,197.7,577.8,197.2z"/>
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M353.1,207.9c0-5.2,0-10.2,0-15.3c3.5,0,6.9,0,10.4,0c0,1,0,1.7,0,2.7c-2.4,0-4.7,0-7.1,0c0,1.2,0,2.3,0,3.6
      c1.9,0,3.8,0,5.8,0c0,1,0,1.8,0,2.8c-1.9,0-3.8,0-5.9,0c0,1.1,0,2.1,0,3.2c2.4,0,4.7,0,7,0c0.6,2.9,0.5,3-2.1,3
      C358.5,207.9,355.9,207.9,353.1,207.9z"/>
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M525.3,200.1c0,1.3,0,2.6,0,3.9c-0.1,2.6-1.8,4.1-4.5,4.1c-2.8,0-4.7-1.4-4.8-4c-0.1-2.6-0.1-5.3,0-7.9
      c0.1-2.6,2.1-4,4.8-4c2.7,0.1,4.3,1.6,4.4,4.2C525.3,197.7,525.3,198.9,525.3,200.1z M522.2,200.3c0-1.2,0.2-2.4-0.1-3.5
      c-0.1-0.6-0.9-1.4-1.4-1.4c-0.5,0-1.5,0.7-1.6,1.2c-0.2,2.4-0.2,4.8,0,7.2c0,0.5,1,1.2,1.6,1.2c0.5,0,1.3-0.8,1.4-1.3
      C522.3,202.6,522.2,201.4,522.2,200.3z"/>
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M394.8,194c-0.5,0.9-0.8,1.6-1.1,2.2c-1.5-0.3-2.9-0.8-4.3-0.9c-1-0.1-2.3,0.2-2.1,1.5c0.1,0.6,1.1,1.3,1.8,1.7
      c0.9,0.4,2.1,0.4,3.1,0.7c2,0.6,2.9,1.9,3,3.9c0.1,2-0.8,3.6-2.7,4.3c-3.2,1.3-6.3,0.9-9.2-1.3c0.4-0.8,0.9-1.6,1.2-2.1
      c1.8,0.4,3.4,0.8,5,1c0.5,0.1,1.2-0.1,1.7-0.4c0.4-0.3,0.9-0.9,0.9-1.3c0-0.4-0.6-1.1-1-1.2c-1.1-0.4-2.3-0.5-3.4-0.7
      c-2.4-0.6-3.6-2-3.6-4.3c0-2.4,1.3-3.9,3.7-4.5C390.2,192,392.5,192.4,394.8,194z"/>
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M490.8,205c1.9,0,3.3,0,4.9,0c0,1.1,0,2,0,3c-3,0-6,0-9,0c-0.3-1.6-0.2-3,1-4.4c1.6-1.7,2.9-3.7,4.2-5.6
      c0.5-0.8,1.2-1.7,0-2.4c-1-0.6-1.7,0-2.4,0.9c-0.5,0.6-1.9,0.6-2.9,0.9c-0.2-3.1,1.7-5.1,4.5-5.1c3.1,0,4.9,1.9,4.4,4.7
      c-0.2,1.4-1,2.7-1.8,3.9C493.1,202.3,492,203.5,490.8,205z"/>
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M413.7,195.4c0-1.1,0-1.9,0-2.9c3.8,0,7.4,0,11.2,0c0,0.9,0,1.8,0,2.8c-1.3,0-2.5,0-4,0c0,4.2,0,8.3,0,12.3
      c-3,0.7-3.1,0.6-3.1-2.2c0-3.3,0-6.7,0-10.1C416.3,195.4,415.1,195.4,413.7,195.4z"/>
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M547.3,207.8c0-3.8,0-7.6,0-11.5c-0.6,0.1-1.1,0.2-1.8,0.3c0-1-0.1-1.9,0-2.8c0.2-1,2.5-1.5,4.8-1.1c0,2.2,0,4.5,0,6.8
      c0,2,0,4,0,6C550.3,208.2,550.3,208.2,547.3,207.8z"/>
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M265.7,72.4c-0.2-0.5-0.5-1.1-0.7-1.6c-1-2.2-2.1-4.5-2.9-6.8c-0.2-0.5,0.3-1.5,0.7-1.9c0.8-0.7,1.6-0.1,1.9,0.8
      c1,2.3,2,4.6,3,6.9c0.4,1.1-0.3,2-1.5,2C266.1,72,265.9,72.2,265.7,72.4z"/>
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M254.9,69.6c0.8,0.3,1.3,0.5,1.7,0.7c2,0.9,3.9,1.8,5.9,2.7c1,0.4,1.4,1.2,0.9,2c-0.3,0.5-1.4,0.8-1.9,0.6
      c-2.3-0.9-4.5-1.9-6.7-3c-0.5-0.3-0.9-1.1-0.9-1.7C253.9,70.5,254.5,70,254.9,69.6z"/>
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M270.7,70.4c1-2.9,1.8-5.5,2.8-7.9c0.2-0.4,1.3-0.8,1.6-0.6c0.5,0.3,1.1,1.2,1,1.6c-0.7,2.5-1.6,5-2.5,7.4
      c-0.2,0.4-1.2,0.8-1.7,0.7C271.4,71.5,271,70.8,270.7,70.4z"/>
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M442.6,208.1c0-1.2,0-2.1,0-3.1c0.9,0,1.7,0,2.9,0c0,0.9,0.2,2.1-0.2,2.6C444.9,208.1,443.6,207.9,442.6,208.1z" />
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M285.5,150.7c0-8.7,0-17.3,0-26c0-2.4,1.7-4.4,4.2-4.7c2.2-0.3,4.5,1.1,5.2,3.3c0.1,0.4,0.2,0.9,0.2,1.4
      c0,17.2,0,34.5,0,51.7c0,2.6-1.6,4.5-4.1,4.9c-2.7,0.5-5.4-1.7-5.5-4.4c0-0.2,0-0.4,0-0.7C285.5,167.8,285.5,159.2,285.5,150.7z
       M291.7,150.7c0-8.6,0-17.1,0-25.7c0-0.2,0-0.3,0-0.5c0-0.7-0.6-1.3-1.4-1.4c-0.6-0.1-1.3,0.4-1.5,1.1c-0.1,0.2-0.1,0.5-0.1,0.7
      c0,17.1,0,34.2,0,51.3c0,0.2,0,0.4,0,0.5c0,1,0.9,1.6,1.9,1.4c0.7-0.2,1-0.7,1-1.6C291.7,168,291.7,159.3,291.7,150.7z"/>
                <path fill={isLight && !onDark ? DARK_COLOR : LIGHT_COLOR} d="M263.3,150.7c0-8.6,0-17.3,0-25.9c0-1.8,0.8-3.2,2.3-4.1c1.6-1,3.2-1,4.8-0.1c1.6,0.9,2.5,2.3,2.5,4.2
      c0,17.3,0,34.5,0,51.8c0,2.1-1,3.6-2.9,4.5c-1.8,0.8-3.6,0.5-5.1-0.8c-1-0.9-1.5-2-1.6-3.3c0-0.2,0-0.4,0-0.7
      C263.3,167.7,263.3,159.2,263.3,150.7z M266.6,150.7c0,6.7,0,13.5,0,20.2c0,1.9,0,3.9,0,5.8c0,0.5,0.2,0.9,0.5,1.2
      c0.5,0.4,1,0.4,1.5,0.2c0.6-0.3,0.8-0.7,0.8-1.4c0-17.4,0-34.7,0-52.1c0-0.1,0-0.1,0-0.2c-0.1-0.6-0.3-1-0.9-1.3
      c-0.5-0.2-1-0.2-1.4,0.2c-0.4,0.3-0.6,0.8-0.6,1.3C266.6,133.4,266.6,142.1,266.6,150.7z"/>
              </g>
            </g>
          </svg>
        )}
      </Box>
    </NextLink>
  );
}

export default memo(Logo);