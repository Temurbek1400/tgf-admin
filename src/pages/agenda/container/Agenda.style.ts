import styled from "styled-components";

export const StyledAgenda = styled.div`
  .activity{
    border-radius: 8px;
    background: #f6f6f6;
    width: 100% !important ;
    padding: 10px 12px;
    font-size: 17px;
    outline: none;

    &-list{
      padding: 10px 12px;
      &:first-child{
        border-top-left-radius: 8px;
      }
    }
  }
`;
