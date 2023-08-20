import React from "react";
import styled from "styled-components";
import Profile1 from "../assets/images/Ellipse -1.png";
import Profile2 from "../assets/images/Ellipse -2.png";
import Profile3 from "../assets/images/Ellipse -3.png";
import Profile4 from "../assets/images/Ellipse -4.png";
import Profile5 from "../assets/images/Ellipse 1.png";

export default function Birthday() {
  const Birthdays = [
    {
      id: 1,
      user: "Griffin Wooldrige",
      age: "20 Years",
      profile: Profile1,
    },
    {
      id: 2,
      user: "Hester Hogan",
      age: "23 Years",
      profile: Profile2,
    },
    {
      id: 3,
      user: "Danny Winget",
      age: "25 Years",
      profile: Profile3,
    },
    {
      id: 4,
      user: "Joshua Vergara",
      age: "23 Years",
      profile: Profile4,
    },
    {
      id: 5,
      user: "Jon Rettinger",
      age: "20 Years",
      profile: Profile5,
    },
  ];

  return (
    <Div>
      <Mdiv>
        <Heading>5 birthdays today</Heading>
        <Container>
          <Ul>
            {Birthdays.map((birthday) => (
              <Li key={birthday.id}>
                <Profileimg src={birthday.profile} alt="Profile" />
                <Sec>
                  <Name>{birthday.user}</Name>
                  <Year>{birthday.age}</Year>
                </Sec>
              </Li>
            ))}
          </Ul>
        </Container>
        <Bdiv><Clearbutton>Clear All</Clearbutton></Bdiv>
      </Mdiv>
    </Div>
  );
}

const Div = styled.div`
  margin: 0 auto;
  height:100dvh;
  background: #F8F0E5;
  display:flex;
  align-items:center;
  justify-content:center;
`;
const Mdiv = styled.div`
  background: #EADBC8;
  width: 380px;
  padding:10px;
  border-radius:20px;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 30px;
  font-family: "baloo_paaji_2bold";
`;

const Container = styled.div``;

const Ul = styled.ul``;

const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
`;

const Sec = styled.div``;

const Profileimg = styled.img`
  width: 50px;
  height: 50px;
`;

const Name = styled.h2`
  font-size: 18px;
  font-family: "baloo_paaji_2bold";
  color: #1f223b;
`;

const Year = styled.span`
  font-family: "baloo_paaji_2regular";
  color: #868f9c;
`;

const Clearbutton = styled.button`
  border-radius: 6px;
  background: #102C57;
  color: white;
  width: 190px;
  font-size: 18px;
  padding: 5px 20px;
  font-family: "baloo_paaji_2regular";
  margin:0 auto;
  cursor:pointer;
`;
const Bdiv=styled.div`
width:100%;
display:flex;
justify-content:center;`;
