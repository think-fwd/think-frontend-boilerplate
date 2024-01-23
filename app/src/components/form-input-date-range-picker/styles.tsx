import { DateRange } from 'react-date-range'
import styled from '@emotion/styled'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file

export const FormInputDateRangePickerStyles = styled(DateRange)`
  font-family: 'Arial' !important;
  width: 100%;
  & .rdrMonthAndYearPickers {
    font-size: 14px;
    font-weight: 400;
    color: #6d7994;
  }
  & .rdrStartEdge,
  & .rdrEndEdge {
    color: #4070f4 !important;
  }
  & .rdrInRange {
    color: #deeaff !important;
  }
  & .rdrInRange + .rdrDayNumber span {
    color: #3c4c70 !important;
  }
  & .rdrInRange + span + .rdrDayNumber span {
    color: #3c4c70 !important;
  }
  /* & .rdrMonthName {
    display: none !important;
  } */
  & .rdrDayToday:after {
    content: ' ';
    background-color: transparent !important;
    border-width: 1px;
    border-style: solid;
    border-radius: 1.333em;
    border-color: #3c4c70;
    position: absolute;
    left: 0px;
    top: 3px;
    right: 0px;
    bottom: 3px;
  }
  & .rdrDayToday:before {
    content: ' ';
    background-color: transparent !important;
    border-width: 1px;
    border-style: solid;
    border-radius: 1.333em;
    border-color: white;
    position: absolute;
    left: 1px;
    top: 4px;
    right: 1px;
    bottom: 4px;
    z-index: 1;
  }
  & .rdrDayToday .rdrDayNumber > span:after {
    display: none;
  }
`
