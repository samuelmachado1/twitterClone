import React from 'react';

import {
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton, 
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar Perfil</EditButton>

            <h1>Samuel Estrella</h1>
            <h2>@samuelestrelladf</h2>

            <p>
                Cloud Analyst Trainee at <a href="www.stefanini.com">@Stefanini</a>
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    Brasília, Brasil
                </li>
                <li>
                    <CakeIcon />
                    Nascido em 9 de março de 1988
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>94</strong>
                </span>
                <span>
                    <strong>144 </strong> seguidores
                </span>
            </Followage>
        </ProfileData>
    </Container>
    );
}

export default ProfilePage;