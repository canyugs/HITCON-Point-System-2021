import React, {useEffect, useState} from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 71px;

  @media(min-width: 1280px) {
    width: 495px;
    height: 653px;
  }
`;

const Image = styled.img`
  @media(min-width: 1280px) {
    height: 250px;
  }
`;

const Info = styled.div`
  position: relative;
  flex-grow: 1;
  background: #002680;
  padding: 18px 35px 36px 30px;
  @media(min-width: 1280px) {
    padding: 30px 64px 33px 43px;
  }
`;

const Title = styled.div`
  font-size: 24px;
  margin-bottom: 22px;
  @media(min-width: 1280px) {
    font-size: 28px;
  }
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 20px;
  max-width: 633px;
  margin-bottom: 27px;
  @media(min-width: 1280px) {
    line-height: 30px;
  }
`;

const Button = styled.button`
  border-radius: 19px;
  font-size: 18px;
  font-weight: border;
  padding: 15px 20px;
`;

const Topic = ({
  title, description, imageSrc, actionLink, actionText, actionToken
}) => {
  return (
    <Container>
      <Image src={imageSrc} />
      <Info>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <form method="POST" action={actionLink}>
          {
            actionToken ?
            <input type="hidden" name="token" value={actionToken} /> :
            null
          }
          <Button type ="submit">{actionText}</Button>
        </form>
      </Info>
    </Container>
  )
}

Topic.defaultProps = {
  title: "駭客狗狗",
  description: "喵～我是駭客狗狗，HITCON 最新開發的狗狗聊天機器人，不過我可沒有百寶袋唷！狗狗將會在 Telegram 以及 IRC 上協助大家參與 HITCON 2021，也許還會有一些小驚喜唷！喵～期待大會與各位相見！#聊天機器人 #駭客狗狗",
  imageSrc: "https://via.placeholder.com/361x190",
  actionLink: "",
  actionText: "Go!",
  actionToken: false,
}

export default Topic;
