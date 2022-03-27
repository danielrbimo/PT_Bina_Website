import React from 'react'
import { TeamsContainer, TeamsH1, TeamsCard, TeamsContent, Imgbx, Contentbx, TeamsJob, TeamsName, TeamsWrapper, Icons} from './TeamElements'
import Icon1 from '../../images/TeamPics/iwan.jpg'
import Icon2 from '../../images/TeamPics/lucy.JPG'
import Icon3 from '../../images/TeamPics/raina.jpg'
import Icon4 from '../../images/TeamPics/bimo.jpg'
const Team = () => {
  return (
      <>
      <TeamsContainer>
          <TeamsH1>Our Team</TeamsH1>
          <TeamsWrapper>
            <TeamsCard>
                <TeamsContent>
                    <Imgbx><Icons src={Icon1}/></Imgbx>
                    <Contentbx>
                        <TeamsName>Emmanuel Ernawan</TeamsName>
                        <TeamsJob>Commissioner</TeamsJob>
                    </Contentbx>
                </TeamsContent>
            </TeamsCard>
            <TeamsCard>
                <TeamsContent>
                    <Imgbx><Icons src={Icon2}/></Imgbx>
                    <Contentbx>
                        <TeamsName>Lucy Akmaltalia</TeamsName>
                        <TeamsJob>Chief Executive Officer</TeamsJob>
                    </Contentbx>
                </TeamsContent>
            </TeamsCard>
            <TeamsCard>
                <TeamsContent>
                    <Imgbx><Icons src={Icon3}/></Imgbx>
                    <Contentbx>
                        <TeamsName>Raina Ernawan</TeamsName>
                        <TeamsJob>Chief Marketing Officer</TeamsJob>
                    </Contentbx>
                </TeamsContent>
            </TeamsCard>
            <TeamsCard>
                <TeamsContent>
                    <Imgbx><Icons src={Icon4}/></Imgbx>
                    <Contentbx>
                        <TeamsName>Daniel Hantoro</TeamsName>
                        <TeamsJob>Chief Technology Officer</TeamsJob>
                    </Contentbx>
                </TeamsContent>
            </TeamsCard>
            </TeamsWrapper>
      </TeamsContainer>
      </>
  )
}

export default Team
